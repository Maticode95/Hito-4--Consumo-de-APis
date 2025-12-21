import React from "react";

const Navbar = () => {
  const token = true;        // si está logueado o no
  const total = 25990;       // valor fijo por ahora

  return (
    <nav className="navbar navbar-dark bg-dark px-4">

      <span className="navbar-brand">Pizzería Mamma Mia!</span>

      <div>
        <button className="btn btn-outline-light me-2">🍕 Home</button>

        {token ? (
          <>
            <button className="btn btn-outline-light me-2">🔓 Profile</button>
            <button className="btn btn-outline-light me-2">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-light me-2">🔐 Login</button>
            <button className="btn btn-outline-light me-2">🔐 Register</button>
          </>
        )}

        <button className="btn btn-success">
          🛒 Total: ${total.toLocaleString()}
        </button>
      </div>

    </nav>
  );
};

export default Navbar;
