import React from "react";

const sortingOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {
  return (
    <div>
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {Object.keys(sortingOptions).map((option) => (
              <li key={sortingOptions[option]}>{option}</li>
            ))}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Push!</a>
        </div>

      </div>
    </div>
  );
};

export default SearchBar
