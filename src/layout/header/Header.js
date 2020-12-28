import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item">
        <a class="nav-link" href="/">Kategori <span class="sr-only">(current)</span></a>
        </li>
        
        <li class="nav-item">
        <a class="nav-link" href="/Ingredient">Malzemeler <span class="sr-only">(current)</span></a>
        </li>
        
        </ul>
  </div>
      </nav>
    </div>
  );
}

export default Header;
