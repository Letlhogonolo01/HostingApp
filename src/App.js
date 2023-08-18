// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("My name is " + name);
  };

  return (
    <div className="App">
      <h1>Hosting Test</h1>
      <form onSubmit={handleSubmit}>
        <div>Todo</div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" />
      </form>
      <form onSubmit={handleSubmit}> 
      <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" />
        </form>
        <form onSubmit={handleSubmit}>
      <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" />
        </form>
    </div>
  );
}

export default App;
