const { Actor } = require('apify');
const { CheerioCrawler } = require('crawlee');
const randomUserAgent = require('random-useragent');

(async () => {
    await Actor.init();

    // Hardcoded input for testing
    const input = await Actor.getInput() || {
        startUrls: ['https://www.apartments.com/hollywood-hills-los-angeles-ca/?bb=uj5hqnt0oNp_wsjwF']
    };

    if (!input || !Array.isArray(input.startUrls) || input.startUrls.length === 0) {
        throw new Error('No valid Start URLs provided in the input.');
    }

    const { startUrls } = input;
    const allScrapedListings = [];

    console.log('Starting URLs:', startUrls);

    const crawler = new CheerioCrawler({
        maxRequestRetries: 10,
        useSessionPool: true,
        persistCookiesPerSession: false,

        proxyConfiguration: await Actor.createProxyConfiguration({
            groups: ['RESIDENTIAL'], 
            countryCode: input.proxyCountryCode || 'US',
        }),

        requestHandler: async ({ request, $ }) => {
            console.log(`Scraping: ${request.url}`);

            // Extract the total number of apartments
            const totalText = $('h1.placardSearchHeading').text();
            const totalListings = totalText.match(/\d[\d,]*/)?.[0]?.replace(/,/g, '') || 0;

            console.log(`Total Listings: ${totalListings}`);

            // Extract apartment listings
            $('li.mortar-wrapper').each((_, el) => {
                const $el = $(el);
                const listingId = $el.find('article.placard').data('listingid');
                const url = $el.find('article.placard').data('url');
                const title = $el.find('div.property-title span.js-placardTitle').text().trim();
                const address = $el.find('div.property-address').text().trim();
                const pricing = $el.find('p.property-pricing').text().trim();
                const beds = $el.find('p.property-beds').text().trim();
                const amenities = $el.find('p.property-amenities span').map((_, span) => $(span).text().trim()).get().join(', ');
                const phone = $el.find('a.phone-link span').text().trim();
                const imageUrl = $el.find('.carousel-inner .carousel-item.active img').attr('src') || '';

                if (listingId) {
                    allScrapedListings.push({
                        id: listingId,
                        title,
                        address,
                        pricing,
                        beds,
                        amenities,
                        phone,
                        url,
                        imageUrl,
                    });
                }
            });

            console.log(`Extracted ${allScrapedListings.length} listings from ${request.url}`);
        },

        failedRequestHandler({ request }) {
            console.error(`Failed to scrape ${request.url}`);
        },

        preNavigationHooks: [
            async ({ request }) => {
                const userAgent = randomUserAgent.getRandom() || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36';
                request.headers = {
                    'user-agent': userAgent,
                    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                };
            },
        ],
    });

    console.log('Starting the crawler...');
    await crawler.run(startUrls);

    console.log(`Pushing ${allScrapedListings.length} listings to the dataset...`);
    await Actor.pushData(allScrapedListings);

    console.log('Scraping completed. Data pushed to the dataset.');
    await Actor.exit();
})();
