import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [cat, setCat] = useState("");

  const getCat = async () => {
    try {
      await fetch("http://thecatapi.com/api/images/get?format=src&type=gif")
        .then((result) => result.json())
        .then((result) => {
          console.log(result);
          // setCat - result
          setCat(result);
        });
    } catch (error) {
      console.log("Failed to retrieve the quote: " + error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={getCat}>Get Cat</button>
      <img
        src={cat}
        alt="cat"
        style={{ width: "200px", height: "200px" }}
      ></img>
    </div>
  );
}

export default App;
