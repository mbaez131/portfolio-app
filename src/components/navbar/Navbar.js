import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="flex-container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/Contact">Contact Me</Link>
        </li>
      </ul>
      <div className="signature">
        Marcos Baez
      </div>
      </div>
    </div>
  );
}