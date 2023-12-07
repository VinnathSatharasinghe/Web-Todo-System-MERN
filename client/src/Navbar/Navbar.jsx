import React from "react";
import "./nav.css";

function CreativeNavbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/home">R E D U X - C A F E</a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/gg">Login</a>
        </li>
        <li>
          <a href="/table">Update</a>
        </li>
        <li>
          <a href="/sing">Portfolio</a>
        </li>
        <li>
          <a href="/todo">TODO</a>
        </li>
      </ul>
    </nav>
  );
}

export default CreativeNavbar;
