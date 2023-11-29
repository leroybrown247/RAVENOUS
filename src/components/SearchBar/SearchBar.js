import React, { useState, useEffect, useCallback } from "react";
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
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const sortBusinesses = (businesses, sortOption) => {
    if (sortOption === "rating") {
      return businesses.slice().sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "review_count") {
      return businesses.slice().sort((a, b) => b.review_count - a.review_count);
    } else {
      return businesses.slice();
    }
  };

  // Memoized version of handleSearch using useCallback
  const handleSearch = useCallback(async () => {
    try {
      const businesses = await search(searchTerm, location, selectedSortOption);
      const sortedBusinesses = sortBusinesses(businesses, selectedSortOption);
      const limitedResults = sortedBusinesses.slice(0, 10);
      setSearchResults(limitedResults);
      onSearch(sortedBusinesses);
    } catch (error) {
      console.error("Error searching Yelp:", error.message);
    }
  }, [searchTerm, location, selectedSortOption, onSearch]);

  const handleClickSearch = () => {
    handleSearch();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  useEffect(() => {
    // You can optionally add any other logic here
  }, [searchResults]); // Add dependencies as needed

  return (
    <div>
      <div className={styles.SearchBar}>
        {/* Sorting options */}
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

        {/* Divider */}
        <div className={styles["DividerClass"]}>
          <hr className={styles["Divider"]} />
        </div>

        {/* Search input fields */}
        <div className={styles["SearchBarFields"]}>
          <input
            placeholder="Search cuisine type?"
            value={searchTerm}
            onChange={handleSearchTermChange}
            onKeyDown={handleKeyDown}
          />
          <input
            placeholder="Search location?"
            value={location}
            onChange={handleLocationChange}
            onKeyDown={handleKeyDown}
          />
        </div>

        {/* Search button */}
        <div className={styles["SearchBarSubmit"]}>
          <button className={styles["Button"]} onClick={handleClickSearch}>
            Click to search
          </button>
        </div>
      </div>

      {/* Display search results */}
      <div className={styles["SearchResults"]}>
        <p>Search Results:</p>
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>
              Customize the display based on your search result properties
              {result.name} - Rating: {result.rating}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
