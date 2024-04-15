import { useState } from "react";

import styles from "./Item.module.css";

import { TodoItem } from "./TodoList";

export type ItemProps = {
  index: number;
  item: TodoItem;
  completeHandler(index: number): void;
  deleteHandler(index: number): void;
  updateHandler(index: number, newDesc: string): void;
};

export function Item({
  index,
  item,
  completeHandler,
  deleteHandler,
  updateHandler,
}: ItemProps) {
  let [value, _setValue] = useState("");
  const { desc, completed } = item;

  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        value={value}
        checked={completed}
        onChange={(_) => completeHandler(index)}
      />{" "}
      <input
        type="text"
        value={desc}
        onChange={(e) => {
          e.preventDefault();

          updateHandler(index, e.target.value);
        }}
      />
      <button onClick={(_) => deleteHandler(index)}>Delete</button>
    </li>
  );
}
