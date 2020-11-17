import React from "react";
import { NavLink } from "./Navlink";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="characters">Characters</NavLink>
      <NavLink to="episodes">Episodes</NavLink>
      <NavLink to="registration">Registration</NavLink>
    </div>
  );
};
