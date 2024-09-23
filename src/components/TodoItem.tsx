import React, { FC } from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <input type="checkbox" checked={todo.completed} />
      <h4>
        {todo.id}. {todo.title}
      </h4>
    </div>
  );
};

export default TodoItem;
