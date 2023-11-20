import React, { useEffect, useState } from "react";
import styles from "./BusinessList.module.css";
import Business from "../Business/Business";
import search from "../../utils/yelpAPI";

const BusinessList = () => {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await search("pizza", "Auckland", "best_match");
        setBusinesses(data || []);
      } catch (error) {
        console.log("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.BusinessList}>
      {businesses.map((business) => (
        <Business key={business.id} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;
