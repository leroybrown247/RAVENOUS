import React from "react";
import styles from "./SearchBar.module.css";

const sortingOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};



const SearchBar = () => {

// 1. Use the useState hook to manage the state for search term, location, and sorting option.

const [searchTerm, setSearchTerm] = useState("");
const [location, setLocation] = useState("");
const [selectedSortOption, setSealectedSortOption] = useState("best-match");

  return (
    <div>
      <div className={styles.SearchBar}>
        <div className={styles["SearchBarSortOptions"]}>
          <ul>
            {Object.keys(sortingOptions).map((option) => (
              <li key={sortingOptions[option]}>{option}</li>
            ))}
          </ul>
        </div>
        <div className={styles["DividerClass"]}>
          <hr className={styles["Divider"]} />
        </div>
        <div className={styles["SearchBarFields"]}>
          <input placeholder="Search business's" />
          <input placeholder="Where?" />
        </div>
        <div className={styles["SearchBarSubmit"]}>
          <button className={styles["Button"]}>Let's Push</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
