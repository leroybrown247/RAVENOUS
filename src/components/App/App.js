import "./App.css";
import React, { useState } from "react";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../App/Ravenous-Favicon.svg"

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (businesses) => {
    setSearchResults(businesses);
  };
  return (
    <div className="App">
      <header className="AppHeader">
      <div className="Header-content" >
      <img className="Logo" src={logo} alt="Logo" />
      <div className="HeadingTagline">
        <h1 className="Heading">RAVENOUS</h1>
        <p className="TagLine">Find your next local hangout and eatery!</p>
        </div>
        </div>
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
