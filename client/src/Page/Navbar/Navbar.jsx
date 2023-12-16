import React from "react";
import "./Nav.css";

function CreativeNavbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <br />
        <a href="/home">R E D U X - C A F E</a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/gg">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default CreativeNavbar;
