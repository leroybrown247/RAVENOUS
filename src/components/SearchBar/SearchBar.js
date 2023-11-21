import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import search from "../../utils/yelpAPI";

const sortingOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [selectedSortOption, setSelectedSortOption] = useState("best_match");

  const handleKeyDown = (event) => { // Prevents the default action of the event
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };

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
      
      // Sort businesses based on the search term
      const sortedBusinesses = businesses.slice().sort((a, b) => {
        if (selectedSortOption === "rating") {
          return b.rating - a.rating; // Sorts by highest rating first
        } else if (selectedSortOption === "review_count") {
          return b.review_count - a.review_count; // Sorts by highest review count first
        } else {
          return 0;
        }
      });

      onSearch(sortedBusinesses);
    } catch (error) {
      console.error("Error searching Yelp:", error.message);
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
                onClick={() => {
                  setSelectedSortOption(sortingOptions[option]);
                  handleSearch(new Event("click"));
                }}
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
            placeholder="Cuisine?"
            value={searchTerm}
            onChange={handleSearchTermChange}
            onKeyDown={handleKeyDown}
          />
          <input
            placeholder="Location?"
            value={location}
            onChange={handleLocationChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className={styles["SearchBarSubmit"]}>
          <button className={styles["Button"]} onClick={handleSearch}>
            Click to search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
