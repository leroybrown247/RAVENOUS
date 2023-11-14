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
    name: 'Business 2',
    imageSrc: 'image2.jpg',
    address: '456 Oak St',
    state: 'NY',
    zipCode: '10001',
    category: 'Coffee Shop',
    rating: 4.0,
    reviewCount: 90,
  }
]

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
        <BusinessList businesses={businesses}/>
      </main>
      <footer className="Footer">

      </footer>
    </div>
  );
}

export default App;
