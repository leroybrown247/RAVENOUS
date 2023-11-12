import React from "react";
import styles from "./Business.module.css"

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
    <div className={styles.Business}>
      <div className="imageContainer">
        <img src={sampleBusiness.imageSrc} alt={sampleBusiness.name} />
      </div>
      <p>{sampleBusiness.name}</p>
      <div className={styles["BusinessInfo"]}>
        <div className={styles["BusinessAddress"]}>
          <p>{sampleBusiness.address},</p>
          <p>
          {sampleBusiness.city}, {sampleBusiness.state} {sampleBusiness.zipCode}
          </p>
        </div>
        <div className={styles["BusinessReviews"]}>
          <p>{sampleBusiness.category}</p>
          <p className={styles.rating}>{sampleBusiness.rating} Stars</p>
          <p>{sampleBusiness.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
