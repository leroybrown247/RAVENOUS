import React from "react";
import styles from "./Business.module.css";


const Business = ({ business }) => {
  return (
    <div className={styles.Business}>
      <div className="ImageContainer">
        <img src={Business.imageSrc} alt={Business.name} />
        <p className={styles["BusinessName"]}>{Business.name}</p>
      </div>
      <div className={styles["BusinessInfo"]}>
        <div className={styles["InfoContainer"]}>
          <div className={styles["BusinessAddress"]}>
            <p>{Business.address},</p>
            <p>{Business.city},</p>
            <p>
              {Business.state},{Business.zipCode}
            </p>
          </div>
        </div>
        <div className={styles["DetailsContainer"]}>
          <div className={styles["BusinessReviews"]}>
            <p className={styles["Category"]}>{Business.category}</p>
            <p className={styles["Rating"]}>{Business.rating} Stars</p>
            <p>{Business.reviewCount} Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
