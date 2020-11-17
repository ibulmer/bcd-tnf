import React from "react";
import "./App.css";
import { Routes } from "./navigation/Routes";
import { Navbar } from "./navigation/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export { App };
