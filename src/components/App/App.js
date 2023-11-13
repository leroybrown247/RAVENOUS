import "./App.css";
import React from "react";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <h1 className="Heading">
          ravenous app
        </h1>
        <p className="TagLine">Find your next local hangout and eatery!</p>
      </header>
      <main>
        <SearchBar />
        <BusinessList />
      </main>
      <footer className="Footer">

      </footer>
    </div>
  );
}

export default App;
