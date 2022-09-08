import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import NavbarComp from "./components/includes/NavbarComp";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavbarComp />

    </div>
  );
}

export default App;
