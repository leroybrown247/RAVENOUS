import React from "react";

// For the Business component, create a hardcoded business that can be used to generate a list of fake businesses and simulate the website’s functionality.

// Eventually, the hardcoded business will be replaced with dynamic data retrieved from the Yelp API.

const sampleBusiness = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  };  

const Business = () => {
  return (
    <div className="Business">
      <div className="image-container">
        <img src="placeholder" alt="resturaunt" />
      </div>
      <h2>Business Name</h2>
      <div className="Business-Info">
        <p>101 Taniwha Street</p>
        <p>Glen Innes, Auckland 1072</p>
        <h3>Catagory</h3>
        <h3 className="rating">5 Stars</h3>
        <p>100 reviews</p>
      </div>
    </div>
  );
};

export default Business;
