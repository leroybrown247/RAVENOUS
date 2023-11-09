import "./App.css";
import BusinessList from "../BusinessList";
import SearchBar from "../SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ravenous</h1>
      </header>
      <main>
        <SearchBar />
        <BusinessList />
      </main>
      <footer>{/*placeholder*/}</footer>
    </div>
  );
}

export default App;
