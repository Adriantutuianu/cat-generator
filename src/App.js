import { useEffect, useState } from "react";
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

  const year = new Date().getFullYear();

  useEffect(() => {
    getCat();
  }, []);

  return (
    <div className="App">
      {cat && (
        <img
          src={cat}
          alt="cat"
          style={{
            width: "500px",
            height: "500px",
          }}
        ></img>
      )}
      <button onClick={getCat}>Get Cat</button>
      <footer
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
        }}
      >
        @{year} - Made by Adrian Tut.
      </footer>
    </div>
  );
}

export default App;
