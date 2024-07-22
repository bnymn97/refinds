import { useState } from "react";
import logo from "./assets/1R.png";
import "./App.css";

function App() {
  return (
    <>
      <div id="navigationbar">
        <div id="suche">
          <input id="suchleiste" type="text" placeholder="Wonach suchst du?" />
          <button id="suchButton">Suchen</button>
        </div>
        <img src={logo} className="logo" alt="logo" />
        <div id="buttonContainer">
          <button id="buttons">Registrieren</button>
          <button id="buttons">Einloggen</button>
        </div>
      </div>
    </>
  );
}

export default App;
