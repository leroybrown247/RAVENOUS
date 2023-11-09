import React from "react";
import { Button } from "react-bootstrap";
import styles from "./SearchBar.module.css";
import backgroundImage from "./ravenous.jpg";

const sortingOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className={styles.SearchBar} style={backgroundStyle}>
      <div className={styles["SearchBar-sort-options"]}>
        {Object.keys(sortingOptions).map((option) => (
          <Button
            key={sortingOptions[option]}
            variant="light"
            className={styles["sort-button"]}
          >
            {option}
          </Button>
        ))}
      </div>
      <div className={styles["SearchBar-fields"]}>
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
      </div>
      <div className={styles["SearchBar-submit"]}>
        <Button variant="dark">Let's Eat!</Button>
      </div>
    </div>
  );
};

export default SearchBar;
