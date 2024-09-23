import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import TodosPage from "./pages/TodosPage";
import UsersPage from "./pages/UsersPage";
import UserItemPage from "./pages/UserItemPage";
import TodoItemPage from "./pages/TodoItemPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/todos">Todos</Link>
          <Link to="/users">Users</Link>
        </nav>
        <Routes>
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserItemPage />} />
          <Route path="/todos/:id" element={<TodoItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
