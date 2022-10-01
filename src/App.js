import { useState } from "react";
import "./App.css";

function App() {
  const [cat, setCat] = useState("");

  const getCat = async () => {
    try {
      await fetch("https://aws.random.cat/meow")
        .then((result) => result.json())
        .then((result) => {
          setCat(result.file);
        });
    } catch (error) {
      console.log("Failed to retrieve the quote: " + error);
    }
  };

  return (
    <div className="App">
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
