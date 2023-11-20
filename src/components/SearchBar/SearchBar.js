import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import search from "../../utils/yelpAPI"


const sortingOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [selectedSortOption, setSelectedSortOption] = useState("best_match");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
 
    try {
      const businesses = await search(searchTerm, location, selectedSortOption);
      onSearch(businesses);
    } catch (error) {
      console.error("Error searching Yelp:", error.message)
    }
  };

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
            onChange={handleSearchTermChange}
          />
          <input
            placeholder="Where?"
            value={location}
            onChange={handleLocationChange}
          />
        </div>
        <div className={styles["SearchBarSubmit"]}>
          <button className={styles["Button"]} onClick={handleSearch}>Let's Push</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
