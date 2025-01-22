```markdown
# Wellfound ( Formerly AngelList Talent ) Job Scraper

This scraper extracts detailed information from Wellfound job listings based on the provided job category or search URL.

## Input

### Example Input
The scraper accepts a JSON input to define the scraping parameters, such as the URLs to scrape and additional options.

Example:
```json
{
  "startUrls": [
    {
      "url": "https://wellfound.com/role/l/engineering-manager/los-angeles",
      "method": "GET"
    }
  ],
  "proxyCountryCode": "FR",
  "customCookies": ""
}
```

### Fields:
- **startUrls**: An array of URLs to scrape. These URLs should be Wellfound job category or search result pages.
- **proxyCountryCode** (optional): Country code for proxy usage (e.g., "US", "FR"). Defaults to "US" if not provided.
---

## API Call Example

See the API tab
---

## Output

The scraper returns an array of job objects, where each object contains detailed information about a Wellfound job listing.

### Example Output:
```json
[
  {
    "id": "3127216",
    "title": "Senior Manager, Network Engineering",
    "primaryRoleTitle": "DevOps",
    "description": "About Zapier. We're humans who simply think computers...",
    "location": "Long Beach",
    "remote": "No",
    "jobType": "full-time",
    "liveStartAt": 1729037889,
    "slug": "senior-manager-network-engineering",
    "yearsExperienceMin": "N/A",
    "yearsExperienceMax": "N/A",
    "compensation": "Not listed",
    "isBookmarked": "No"
  }
]
```

### Fields:
- **id**: The unique ID of the job listing.
- **title**: The title of the job.
- **primaryRoleTitle**: The primary role for the job.
- **description**: A brief description of the job.
- **location**: The location(s) where the job is available.
- **remote**: Whether the job is remote (`Yes` or `No`).
- **jobType**: Type of job (e.g., `full-time`).
- **liveStartAt**: Unix timestamp indicating when the job was posted.
- **slug**: The unique slug for the job listing.
- **yearsExperienceMin**: Minimum years of experience required.
- **yearsExperienceMax**: Maximum years of experience required.
- **compensation**: Compensation details if available.
- **isBookmarked**: Whether the job is bookmarked (`Yes` or `No`).

---

## Usage

1. **Configure Input**:
   - Add the Wellfound job category or search URLs in the `startUrls` field.
   - Set `proxyCountryCode` to your preferred proxy location if needed.

2. **Run the Scraper**:
   - Use the Apify platform or API to execute the scraper.

3. **Get Results**:
   - Extract comprehensive job data in JSON format.

---

This scraper is ideal for analyzing Wellfound job categories, monitoring job trends, and gathering data for research or business use cases.
``` # apartments-scraper
