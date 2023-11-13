import React from "react";
import Business from "../Business/Business";
import styles from "./BusinessList.module.css"

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
  {
    id: 2,
    name: 'Business 2',
    imageSrc: 'image2.jpg',
    address: '456 Oak St',
    state: 'NY',
    zipCode: '10001',
    category: 'Coffee Shop',
    rating: 4.0,
    reviewCount: 90,
  },
  {
    id: 3,
    name: 'Business 3',
    imageSrc: 'image2.jpg',
    address: '456 Oak St',
    state: 'NY',
    zipCode: '10001',
    category: 'Coffee Shop',
    rating: 4.0,
    reviewCount: 90,
  },
  {
    id: 4,
    name: 'Business 3',
    imageSrc: 'image2.jpg',
    address: '456 Oak St',
    state: 'NY',
    zipCode: '10001',
    category: 'Coffee Shop',
    rating: 4.0,
    reviewCount: 90,
  },
  {
    id: 5,
    name: 'Business 3',
    imageSrc: 'image2.jpg',
    address: '456 Oak St',
    state: 'NY',
    zipCode: '10001',
    category: 'Coffee Shop',
    rating: 4.0,
    reviewCount: 90,
  },
  {
    id: 6,
    name: 'Business 3',
    imageSrc: 'image2.jpg',
    address: '456 Oak St',
    state: 'NY',
    zipCode: '10001',
    category: 'Coffee Shop',
    rating: 4.0,
    reviewCount: 90,
  },
  {
    id: 7,
    name: 'Business 3',
    imageSrc: 'image2.jpg',
    address: '456 Oak St',
    state: 'NY',
    zipCode: '10001',
    category: 'Coffee Shop',
    rating: 4.0,
    reviewCount: 90,
  },
  {
    id: 8,
    name: 'Business 3',
    imageSrc: 'image2.jpg',
    address: '456 Oak St',
    state: 'NY',
    zipCode: '10001',
    category: 'Coffee Shop',
    rating: 4.0,
    reviewCount: 90,
  },
];

const BusinessList = () => {
  return (
    <div className={styles.BusinessList}>
      {business.map((business, index) => (
        <Business key={index} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;
