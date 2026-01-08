import React from "react";

const Profile = () => {
  const email = "usuario@example.com"; // Email estático por ahora

  const handleLogout = () => {
    // Función estática por ahora, se implementará en siguientes hitos
    console.log("Cerrar sesión");
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-4">Perfil de Usuario</h2>
              <div className="mb-3">
                <label className="form-label fw-bold">Email:</label>
                <p className="form-control-plaintext">{email}</p>
              </div>
              <button 
                className="btn btn-danger" 
                onClick={handleLogout}
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
