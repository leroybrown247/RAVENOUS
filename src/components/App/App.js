import "./App.css";
import React, { useState } from "react";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (businesses) => {
    setSearchResults(businesses);
  };
  return (
    <div className="App">
      <header className="AppHeader">
        <h1 className="Heading">Ravenous App</h1>
        <p className="TagLine">Find your next local hangout and eatery!</p>
      </header>
      <main>
        <SearchBar onSearch={handleSearch} />
        <BusinessList businesses={searchResults} />
      </main>
      <footer className="Footer"></footer>
    </div>
  );
}

export default App;
