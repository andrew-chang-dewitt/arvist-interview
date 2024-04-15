import { useState } from "react";
import { TodoItem } from "./TodoList";

export type ItemProps = {
  index: number;
  item: TodoItem;
  completeHandler(index: number): void;
  deleteHandler(index: number): void;
};

export function Item({
  index,
  item,
  completeHandler,
  deleteHandler,
}: ItemProps) {
  let [value, _setValue] = useState("");
  const { desc, completed } = item;

  return (
    <li>
      <input
        type="checkbox"
        value={value}
        checked={completed}
        onChange={(_) => completeHandler(index)}
      />{" "}
      {desc}
      <button onClick={(_) => deleteHandler(index)}>Delete</button>
    </li>
  );
}
