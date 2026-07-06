import { useState, useRef, useEffect } from "react";

const FormularioTarea = ({ agregarTarea }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === "") return;

    agregarTarea(input);
    setInput("");
  };

  return (
    <form className="d-flex gap-2 mb-3" onSubmit={handleSubmit}>
      <label htmlFor="taskInput" className="visually-hidden">
        Nueva tarea
      </label>
      <input
        id="taskInput"
        ref={inputRef}
        type="text"
        className="form-control"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        maxLength={100}
        placeholder="Escribí una tarea..."
      />

      <button className="btn btn-primary" type="submit">
        Agregar
      </button>
    </form>
  );
};

export default FormularioTarea;
