import React from "react";
import TaskManager from "./components/TaskManager";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Task Manager</h1>
      </header>
      <main>
        <TaskManager />
      </main>
    </div>
  );
}

export default App;
