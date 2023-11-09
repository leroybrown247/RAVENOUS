import React from "react";

// Create a SearchBar component that users can use to search for businesses on the Yelp platform.

// The search bar should contain two inputs, one for the user’s search terms and the selected location.

// The search bar should also offer sorting options such as Best Match, Highest Rated, and Most Reviewed.

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
          <button>Let's Push!</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar