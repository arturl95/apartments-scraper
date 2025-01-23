# Apartments.com Scraper

This scraper extracts detailed information from Apartments.com listings based on the provided search URLs.

## Input

### Example Input
The scraper accepts a JSON input to define the scraping parameters, such as the URLs to scrape and additional options.

Example:
```json
{
  "startUrls": [
    {
      "url": "https://www.apartments.com/hollywood-hills-los-angeles-ca"
    }
  ],
  "proxyCountryCode": "FR"
}
```

### Fields:
- **startUrls** (required): An array of URLs to scrape. These URLs should be search result pages from Apartments.com.
- **proxyCountryCode** (optional): Country code for proxy usage (e.g., "US", "FR"). Defaults to "FR" if not provided.

---

## API Call Example

See the API tab for detailed instructions on how to call this scraper programmatically.

---

## Output

The scraper returns an array of listing objects, where each object contains detailed information about an Apartments.com listing.

### Example Output:
```json
[
  {
    "id": "12345",
    "title": "Spacious 2-Bedroom Apartment",
    "address": "123 Main Street, Los Angeles, CA",
    "pricing": "$3,200/month",
    "beds": "2 Beds",
    "amenities": ["Pool", "Gym", "Parking"],
    "phone": "(123) 456-7890",
    "url": "https://www.apartments.com/spacious-2-bedroom-apartment/12345/",
    "imageUrl": "https://images.apartments.com/example.jpg"
  }
]
```

### Fields:
- **id**: The unique ID of the apartment listing.
- **title**: The title or name of the apartment.
- **address**: The full address of the apartment.
- **pricing**: The price of the apartment (e.g., `$3,200/month`).
- **beds**: The number of bedrooms available (e.g., `2 Beds`).
- **amenities**: A list of amenities included with the apartment (e.g., `Pool`, `Gym`, `Parking`).
- **phone**: The contact phone number for the listing.
- **url**: The URL of the specific apartment listing.
- **imageUrl**: A URL to the primary image of the apartment.

---

## Usage

1. **Configure Input**:
   - Add the Apartments.com search URLs in the `startUrls` field.
   - Optionally, set `proxyCountryCode` to your preferred proxy location.

2. **Run the Scraper**:
   - Use the Apify platform or API to execute the scraper.

3. **Get Results**:
   - Extract comprehensive apartment listing data in JSON format.

---

## Use Cases

This scraper is ideal for:
- Real estate agencies analyzing rental markets.
- Individuals or businesses tracking housing trends in specific areas.
- Aggregators collecting data for property comparison platforms.

---

This Apartments.com scraper provides a streamlined way to gather actionable data on rental properties, making it a valuable tool for real estate research, trend monitoring, and decision-making.