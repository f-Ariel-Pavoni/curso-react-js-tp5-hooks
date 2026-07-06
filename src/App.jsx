import { useState, useMemo } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

import FormularioTarea from "./components/FormularioTarea/FormularioTarea";
import Tareas from "./components/Tareas/Tareas";
import Buscador from "./components/Buscador/Buscador";
import ContadorTareas from "./components/ContadorTareas/ContadorTareas";

function App() {
  const [tareas, setTareas] = useLocalStorage("tareas", []);
  const [busqueda, setBusqueda] = useState("");

  const agregarTarea = (nombre) => {
    const nuevaTarea = {
      id: Date.now(),
      nombre,
      completada: false,
    };

    setTareas((prev) => [...prev, nuevaTarea]);
    setBusqueda("");
  };

  const eliminarTarea = (id) => {
    setTareas((prev) => prev.filter((tarea) => tarea.id !== id));
  };

  const completarTarea = (id) => {
    setTareas((prev) =>
      prev.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: true } : tarea,
      ),
    );
  };

  const tareasFiltradas = useMemo(() => {
    return tareas.filter((tarea) =>
      tarea.nombre.toLowerCase().includes(busqueda.toLowerCase()),
    );
  }, [tareas, busqueda]);

  const [completadas, pendientes] = useMemo(() => {
    const completadas = tareas.reduce(
      (acc, tarea) => (tarea.completada ? acc + 1 : acc),
      0,
    );
    return [completadas, tareas.length - completadas];
  }, [tareas]);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Lista de tareas</h1>

      <FormularioTarea agregarTarea={agregarTarea} />
      <Buscador busqueda={busqueda} setBusqueda={setBusqueda} />
      <Tareas
        tareas={tareasFiltradas}
        eliminarTarea={eliminarTarea}
        completarTarea={completarTarea}
      />
      <ContadorTareas completadas={completadas} pendientes={pendientes} />
    </div>
  );
}

export default App;
