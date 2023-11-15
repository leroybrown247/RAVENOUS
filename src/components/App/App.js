import "./App.css";
import React from "react";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

//Mock Business Data
const businesses = [
  {
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "TinTin & LuLu",
    address: "101 Taniwha Street",
    city: "Auckland",
    state: "Glen Innes",
    zipCode: "1072",
    category: "Maori Cuisine",
    rating: 5,
    reviewCount: 100,
  },
  {
    id: 2,
    name: "Pizza Hutt",
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    address: "35 Saint Johns Road",
    city: "Auckland",
    state: "MeadowBank Shopping Centre",
    zipCode: "1072",
    category: "Italian",
    rating: 4.0,
    reviewCount: 90,
  },
];

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <h1 className="Heading">ravenous app</h1>
        <p className="TagLine">Find your next local hangout and eatery!</p>
      </header>
      <main>
        <SearchBar />
        <BusinessList businesses={businesses} />
      </main>
      <footer className="Footer"></footer>
    </div>
  );
}

export default App;
