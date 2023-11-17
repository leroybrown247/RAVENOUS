import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const sortingOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [selectedSortOption, setSelectedSortOption] = useState("best-match");

  return (
    <div>
      <div className={styles.SearchBar}>
        <div className={styles["SearchBarSortOptions"]}>
          <ul>
            {Object.keys(sortingOptions).map((option) => (
              <li
                key={sortingOptions[option]}
                onClick={() => setSelectedSortOption(sortingOptions[option])}
                className={
                  selectedSortOption === sortingOptions[option]
                    ? styles["SelectedOption"]
                    : ""
                }
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["DividerClass"]}>
          <hr className={styles["Divider"]} />
        </div>
        <div className={styles["SearchBarFields"]}>
          <input
            placeholder="Search business's"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            placeholder="Where?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className={styles["SearchBarSubmit"]}>
          <button className={styles["Button"]}>Let's Push</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
