// Step 1: Import necessary dependencies
import 'whatwg-fetch';

// Step 2: Define constants for the Yelp API
const apiKey = '-CJPQb3Nh13vVk4NP4JFsc58OzunliBDcmn9TIPls8oqO5yctmCV4a1UMdFUrl1OTa5qaHDjG9BG0oiPnUuYzUqYOCfqzT_PNrqXhSd9ROBkZbGZEMc_vnegk9dZZXYx'
const  apiUrl = 'https://api.yelp.com/v3/businesses/search'

// Step 3: Create a function to interact with the Yelp API
const search = async (terms, location, sortBy) => {
    // Step 4: Construct the URL with search parameters
    const url = `${apiUrl}?term=${terms}&location=${location}&sortBy=${sortBy}`
}

