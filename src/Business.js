import React from "react";

// For the Business component, create a hardcoded business that can be used to generate a list of fake businesses and simulate the website’s functionality.

// Eventually, the hardcoded business will be replaced with dynamic data retrieved from the Yelp API.

const sampleBusiness = {
  imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
  name: "TinTin & LuLu",
  address: "101 Taniwha Street",
  city: "Auckland",
  state: "Glen Innes",
  zipCode: "1072",
  category: "Maori Cuisine",
  rating: 5,
  reviewCount: 100,
};

const Business = () => {
  return (
    <div className="Business">
      <div className="image-container">
        <img src={sampleBusiness.imageSrc} alt={sampleBusiness.name} />
      </div>
      <h2>{sampleBusiness.name}</h2>
      <div className="Business-info">
        <div className="Business-address">
          <p>{sampleBusiness.address}</p>,{" "}
          <p>
            {sampleBusiness.state} {sampleBusiness.zipCode}
          </p>
        </div>
        <div className="Business-reviews">
          <h3>{sampleBusiness.category}</h3>
          <h3 className="rating">{sampleBusiness.rating} Stars</h3>
          <p>{sampleBusiness.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
