import React from "react";

const Tarea = ({ tarea, eliminarTarea, completarTarea }) => {
  return (
    <div
      className={`card mb-2 ${tarea.completada ? "bg-light text-muted" : ""}`}
    >
      <div className="card-body d-flex justify-content-between align-items-center">
        <span
          className="flex-grow-1 text-truncate me-3"
          style={{ maxWidth: "70%" }}
        >
          {tarea.completada && <span className="text-success me-2">✔</span>}
          {tarea.nombre}
        </span>
        <div className="d-flex gap-2">
          <button
            className="btn btn-success btn-sm"
            onClick={() => completarTarea(tarea.id)}
            disabled={tarea.completada}
          >
            Completada
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => eliminarTarea(tarea.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tarea;
