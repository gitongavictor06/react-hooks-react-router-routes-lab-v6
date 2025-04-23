// src/components/NavBar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"; // Optional if you’re using CSS

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </nav>
  );
}

export default NavBar;
