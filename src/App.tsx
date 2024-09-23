import React, { useEffect, useState } from "react";
import "./App.css";
import Card, { CardType } from "./components/Card";
import { ITodo, IUser } from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users",
      );
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
      );
      setTodos(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <Card height="100px" width="100px" type={CardType.outlined}>
        <button>Click me!</button>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </div>
  );
}

export default App;
