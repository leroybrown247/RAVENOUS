import "./App.css";
import React from "react";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          ravenous app
        </h1>
        <p className="Tag-line">Find you next local hangout and eatery!</p>
      </header>
      <main>
        <SearchBar />
        <BusinessList />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
