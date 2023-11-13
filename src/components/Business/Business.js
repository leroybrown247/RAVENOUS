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
      <div className="ImageContainer">
        <img src={sampleBusiness.imageSrc} alt={sampleBusiness.name} />
      <p className={styles["BusinessName"]}>{sampleBusiness.name}</p>
      </div>
      <div className={styles["BusinessInfo"]}>
      <div className={styles["InfoContainer"]}>
        <div className={styles["BusinessAddress"]}>
          <p>{sampleBusiness.address},</p>
          <p>
          {sampleBusiness.city},</p>
          <p>{sampleBusiness.state}, 
          {sampleBusiness.zipCode}</p>
          </div>
        </div>
        <div className={styles["DetailsContainer"]}>
        <div className={styles["BusinessReviews"]}>
          <p className={styles["Category"]}>{sampleBusiness.category}</p>
          <p className={styles["Rating"]}>{sampleBusiness.rating} Stars</p>
          <p>{sampleBusiness.reviewCount} Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
