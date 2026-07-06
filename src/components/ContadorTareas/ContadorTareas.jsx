import React from "react";

const ContadorTareas = ({ completadas, pendientes }) => {
  return (
    <div className="card mb-3">
      <div className="card-body d-flex justify-content-around">
        <div>
          <span className="fw-semibold">Completadas:</span>
          <span className="badge bg-success ms-2">{completadas}</span>
        </div>

        <div>
          <span className="fw-semibold">Pendientes:</span>
          <span className="badge bg-warning text-dark ms-2">{pendientes}</span>
        </div>
      </div>
    </div>
  );
};

export default ContadorTareas;
