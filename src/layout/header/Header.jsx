import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
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
        <button
          onClick={() => {
            navigate("/login", { replace: true });
          }}
        >
          log in
        </button>
        <button
          onClick={() => {
            navigate("/signup", { replace: true });
          }}
        >
          sign up
        </button>
      </nav>
    </div>
  );
}
