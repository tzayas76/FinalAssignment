import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home-Page";
import Donate from "./DONATE";
import Adopt from "./ADOPT";
import Navigation from "./components/Navigation";
import DonateForm from "./components/Donate-form";



function App() {
  return (
    <div className="App">
      <Home/>
    

    </div>
  );
}

export default App