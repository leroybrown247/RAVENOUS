import React from "react";
import styles from "./SearchBar.module.css"

const sortingOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {
  return (
    <div>
      <div className={styles.SearchBar}>
        <div className={styles["SearchBar-sort-options"]}>
          <ul>
            {Object.keys(sortingOptions).map((option) => (
              <li key={sortingOptions[option]}>{option}</li>
            ))}
          </ul>
        </div>
        <div className={styles["divider-class"]}>

        <hr className={styles["divider"]} />

        </div>
        <div className={styles["SearchBar-fields"]}>
          <input placeholder="Find your experience!" />
          <input placeholder="Keyword : ( ie . BBQ )" />
        </div>
        <div className={styles["SearchBar-submit"]}>
          <button className={styles["button"]}>Let's Push</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
