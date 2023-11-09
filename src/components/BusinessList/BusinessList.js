import React from "react";
import Business from "../Business/Business";

const business = [
  {
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "TinTin & LuLu",
    address: "101 Taniwha Street",
    city: "Auckland",
    state: "Glen Innes",
    zipCode: "1072",
    category: "Maori Cuisine",
    rating: 5,
    reviewCount: 100,
  },
];

const BusinessList = () => {
  return (
    <div className="BusinessList">
      {business.map((business, index) => (
        <Business key={index} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;
