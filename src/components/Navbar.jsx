import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Navbar = () => {
  const token = true;        // si está logueado o no
  const total = 25990;       // valor fijo por ahora

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <div className="brand">
        <img src="/images/logo.svg" alt="Logo" className="logo" />
        <Link to="/" className="navbar-brand brand-title" style={{ textDecoration: 'none', color: 'white', margin: 0 }}>
          Pizzería Mamma Mia!
        </Link>
      </div>

      <div>
        <Link to="/" className="btn btn-outline-light me-2">
          🍕 Home
        </Link>

        {token ? (
          <>
            <Link to="/profile" className="btn btn-outline-light me-2">
              🔓 Profile
            </Link>
            <button className="btn btn-outline-light me-2">🔒 Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline-light me-2">
              🔐 Login
            </Link>
            <Link to="/register" className="btn btn-outline-light me-2">
              🔐 Register
            </Link>
          </>
        )}

        <Link to="/cart" className="btn btn-success">
          🛒 Total: ${total.toLocaleString()}
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
