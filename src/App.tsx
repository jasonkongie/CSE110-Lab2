// src/App.tsx

import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { StickyNotes } from "./stickyNotes";
import { ToDoList } from "./toDoList";
import { Navbar } from "./navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<StickyNotes />} />
        <Route path="/todolist/:name" element={<ToDoList />} />
      </Routes>
    </div>
  );
};

export default App;