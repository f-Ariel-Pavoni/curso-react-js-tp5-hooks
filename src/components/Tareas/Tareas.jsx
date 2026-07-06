import React from "react";
import Tarea from "../Tarea/Tarea";

const Tareas = ({ tareas, eliminarTarea, completarTarea }) => {
  return (
    <>
      {tareas.length === 0 ? (
        <p>No hay tareas en la lista.</p>
      ) : (
        <div className="tareas">
          {tareas.map((tarea) => (
            <Tarea
              key={tarea.id}
              tarea={tarea}
              eliminarTarea={eliminarTarea}
              completarTarea={completarTarea}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Tareas;
