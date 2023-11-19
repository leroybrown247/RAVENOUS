import React, { useEffect, useState } from "react";
import styles from "./BusinessList.module.css";
import Business from "../Business/Business";
import search from "../../utils/yelpAPI";

// const BusinessList = ({ businesses }) => {

const BusinessList = () => {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const data = await search("pizza", "Auckland", "best_match");
        setBusinesses(data);
      } catch (error) {
        console.log("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []); // Effect only runs once

  return (
    <div className={styles.BusinessList}>
      {businesses.map((business) => (
        <Business key={business.id} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;
