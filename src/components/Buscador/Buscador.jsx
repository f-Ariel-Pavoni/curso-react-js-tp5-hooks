import React from "react";

const Buscador = ({ busqueda, setBusqueda }) => {
  return (
    <>
      <label htmlFor="searchInput" className="visually-hidden">
        Buscar tarea
      </label>

      <input
        id="searchInput"
        type="text"
        className="form-control mb-3"
        placeholder="Buscar tarea..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
    </>
  );
};

export default Buscador;
