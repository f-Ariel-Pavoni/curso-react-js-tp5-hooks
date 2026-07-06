# Curso React JS - TP5 Hooks

Proyecto desarrollado como parte del curso de React JS.  
Consiste en una aplicación de lista de tareas que permite agregar, completar, eliminar y filtrar tareas, aplicando hooks de React y un custom hook para persistencia en localStorage.

---

## Tecnologías utilizadas

- React + Vite  
- JavaScript (ES6+)  
- Bootstrap 5  
- React Hooks:
  - useState
  - useEffect
  - useRef
  - useMemo
- Custom Hook:
  - useLocalStorage

---

## Estructura del proyecto

```
src/
│
├── App.jsx
├── App.css
├── main.jsx
├── index.css
│
├── assets/
│
├── components/
│   ├── Buscador/
│   │   └── Buscador.jsx
│   │
│   ├── ContadorTareas/
│   │   └── ContadorTareas.jsx
│   │
│   ├── FormularioTarea/
│   │   └── FormularioTarea.jsx
│   │
│   ├── Tarea/
│   │   └── Tarea.jsx
│   │
│   └── Tareas/
│       └── Tareas.jsx
│
└── hooks/
    └── useLocalStorage.js
```

---

## Funcionalidades

- Agregar tareas nuevas  
- Marcar tareas como completadas  
- Eliminar tareas  
- Filtrar tareas por texto  
- Persistencia en localStorage  
- Contador de tareas completadas y pendientes  
- Optimización con useMemo  
- Auto focus en input con useRef  

---

## Conceptos aplicados

- useState para manejo de estado  
- useEffect para sincronización con localStorage  
- useRef para acceso al DOM  
- useMemo para optimización de cálculos  
- Custom hooks para reutilización de lógica  
- Componentización en React  
- Props y flujo de datos unidireccional  

---

## Instalación y ejecución

```bash
git clone https://github.com/f-Ariel-Pavoni/curso-react-js-tp5-hooks.git
cd curso-react-js-tp5-hooks
npm install
npm run dev
```

---

## 👨‍💻 Autor

Proyecto realizado por Ariel Pavoni  
Curso React JS - UTN / Full Stack
