// Step 1: Import necessary dependencies
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import 'whatwg-fetch';

// Step 2: Define constants for the Yelp API
const apiKey = '-CJPQb3Nh13vVk4NP4JFsc58OzunliBDcmn9TIPls8oqO5yctmCV4a1UMdFUrl1OTa5qaHDjG9BG0oiPnUuYzUqYOCfqzT_PNrqXhSd9ROBkZbGZEMc_vnegk9dZZXYx'
const  apiUrl = 'https://api.yelp.com/v3/businesses/search'

// Step 3: Create a function to interact with the Yelp API
const search = async (terms, location, sortBy) => {
    // Step 4: Construct the URL with search parameters
    const url = `${apiUrl}?term=${terms}&location=${location}&sortBy=${sortBy}`
}

try {
    // Step 5: Make a GET request to the Yelp API
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    })

// Step 6: Check if the response is successful

if (response.ok) {
    // Step 7: Parse the Json data
    const jsonResponse = await response.json()
}

// Step 8: Extract relevant info about each business
const businesses = jsonResponse.business.map((business) => {
    return {
        id: business.id,
          name: business.name,
          imageSrc: business.image_url,
          rating: business.rating,
          reviewCount: business.review_count,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
    }
})

}
