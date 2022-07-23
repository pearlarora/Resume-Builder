import React from "react";
import logo from "../../assets/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <a href="#" className="brand-logo">
        <img src={logo} alt="logo" />
      </a>

      <nav>
        <a href="#" class="header-links">
          home
        </a>
        <a href="#" class="header-links">
          developers
        </a>
        <a href="www.facebook.com">
          <button>log in</button>
        </a>
        <a href="www.facebook.com">
          <button>sign up</button>
        </a>
      </nav>
    </div>
  );
}
