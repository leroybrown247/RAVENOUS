import "whatwg-fetch";

const apiKey = process.env.REACT_APP_YELP_API_KEY;
const apiUrl = "https://api.yelp.com/v3/businesses/search";

const search = async (terms, location, sortBy) => {
  const url = `https://cors-anywhere.herokuapp.com/${apiUrl}?term=${terms}&location=${location}&sortBy=${sortBy}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      redirect: "follow",
    });

    if (response.ok) {
      const jsonResponse = await response.json();

      console.log(jsonResponse);

      const businesses =
        jsonResponse.businesses && Array.isArray(jsonResponse.businesses)
          ? jsonResponse.businesses.map((business) => {
              return {
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories
                  .map((category) => category.title)
                  .join(", "),
                rating: business.rating,
                reviewCount: business.review_count,
              };
            })
          : [];

      return businesses;
    } else {
      const errorResponse = await response.text(); // Get the actual response content
      console.error("Error fetching data from Yelp API:", errorResponse);
      throw new Error("Error fetching data from Yelp API");
    }
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};

export default search;
