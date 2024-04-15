import { useState } from "react";
import { Item } from "./TodoItem";
import { NewItem } from "./NewItem";

export type TodoItem = {
  desc: string;
  completed: boolean;
};

export function List() {
  let [items, setItems] = useState<TodoItem[]>([]);
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

  return (
    <>
      <ul>
        <li>
          <NewItem items={items} setItemsHandler={setItems} />
        </li>
        {items.map((item, index) => (
          <li>
            <Item
              item={item}
              index={index}
              completeHandler={completeHandler}
              deleteHandler={deleteHandler}
            />
          </li>
        ))}
      </ul>
      <p>
        {items.reduce<number>(
          (incompleteCount, currentItem) =>
            currentItem.completed ? incompleteCount : incompleteCount + 1,
          0
        )}{" "}
        items remaining
      </p>
    </>
  );
}
