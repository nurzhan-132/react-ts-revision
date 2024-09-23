import React, { FC, useEffect, useState } from "react";
import { ITodo } from "../types/types";
import axios from "axios";
import List from "../components/List";
import TodoItem from "../components/TodoItem";

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

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
    fetchTodos();
  }, []);

  return (
    <List
      items={todos}
      renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
    />
  );
};

export default TodosPage;
