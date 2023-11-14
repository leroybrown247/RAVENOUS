import React from "react";
import styles from "./Business.module.css";


const Business = ({ business }) => {
  return (
    <div className={styles.Business}>
      <div className="ImageContainer">
        <img src={business.imageSrc} alt={business.name} />
        <p className={styles["BusinessName"]}>{business.name}</p>
      </div>
      <div className={styles["BusinessInfo"]}>
        <div className={styles["InfoContainer"]}>
          <div className={styles["BusinessAddress"]}>
            <p>{business.address},</p>
            <p>{business.city},</p>
            <p>
              {business.state},{business.zipCode}
            </p>
          </div>
        </div>
        <div className={styles["DetailsContainer"]}>
          <div className={styles["BusinessReviews"]}>
            <p className={styles["Category"]}>{business.category}</p>
            <p className={styles["Rating"]}>{business.rating} Stars</p>
            <p>{Business.reviewCount} Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
