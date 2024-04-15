import { useState } from "react";

import styles from "./TodoList.module.css";

import { Item } from "./TodoItem";
import { NewItem } from "./NewItem";

export type TodoItem = {
  desc: string;
  completed: boolean;
};

export function List() {
  let [items, setItems] = useState<TodoItem[]>([]);
  const updateHandler = (index: number, newDesc: string) => {
    const newItems = items.map((item, idx) =>
      index === idx ? { ...item, desc: newDesc } : item
    );

    setItems(newItems);
  };
  const completeHandler = (index: number) => {
    const newItems = items.map((item, idx) =>
      index === idx ? { ...item, completed: !item.completed } : item
    );

    setItems(newItems);
  };
  const deleteHandler = (index: number) => {
    const newItems = [
      // get all before index to delete
      ...items.slice(0, index),
      // and all after
      ...items.slice(index + 1, items.length),
    ];

    setItems(newItems);
  };
  const clearCompleted = () => {
    const newItems = items.filter((item) => !item.completed);

    setItems(newItems);
  };

  return (
    <div className={styles.listParent}>
      <ul className={styles.list}>
        <li>
          <NewItem items={items} setItemsHandler={setItems} />
        </li>
        {items.map((item, index) => (
          <Item
            item={item}
            index={index}
            completeHandler={completeHandler}
            deleteHandler={deleteHandler}
            updateHandler={updateHandler}
          />
        ))}
      </ul>
      <div className={styles.footer}>
        <p>
          {items.reduce<number>(
            (incompleteCount, currentItem) =>
              currentItem.completed ? incompleteCount : incompleteCount + 1,
            0
          )}{" "}
          items remaining
        </p>
        <button onClick={clearCompleted}>Clear completed</button>
      </div>
    </div>
  );
}
