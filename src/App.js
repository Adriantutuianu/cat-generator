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
    <div className="App" style={{ height: "100vh" }}>
      <button
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          padding: "10px",
          marginTop: "50px",
        }}
        onClick={getCat}
      >
        Get Cat
      </button>
      {cat && (
        <img
          src={cat}
          alt="cat"
          style={{
            width: "500px",
            height: "500px",
            marginTop: "100px",
          }}
        ></img>
      )}
      <footer>@{year} - Made by Adrian Tut.</footer>
    </div>
  );
}

export default App;
