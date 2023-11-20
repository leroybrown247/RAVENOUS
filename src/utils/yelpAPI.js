import "whatwg-fetch";

const apiKey =
  "-CJPQb3Nh13vVk4NP4JFsc58OzunliBDcmn9TIPls8oqO5yctmCV4a1UMdFUrl1OTa5qaHDjG9BG0oiPnUuYzUqYOCfqzT_PNrqXhSd9ROBkZbGZEMc_vnegk9dZZXYx";
const apiUrl = "https://api.yelp.com/v3/businesses/search";

const search = async (terms, location, sortBy) => {
  const url = `${apiUrl}?term=${terms}&location=${location}&sortBy=${sortBy}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (response.ok) {
      const jsonResponse = await response.json();

      const businesses = jsonResponse.business.map((business) => {
        return {
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.category, 
          rating: business.rating,
          reviewCount: business.review_count,
        };
      });

      return businesses;
    } else {
      throw new Error("Error fetching data from Yelp API");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export default search;
