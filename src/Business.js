import React from "react";

// Create a Business component. The component will represent how a business (a restaurant) in Ravenous will be formatted and styled.

// Each Business component should display an image, name, address, city, state, zipcode, category, rating, and review count.

// Create the Business Component Function

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
      </div>
    </div>
  );
};

export default Business;
