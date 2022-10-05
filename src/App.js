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
      {cat && <img className="image-random" src={cat} alt="cat"></img>}
      <button className="get-cat-btn" onClick={getCat}>
        Generate a new cat! 🐈
      </button>
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
