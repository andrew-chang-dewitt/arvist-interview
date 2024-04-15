import { useState } from "react";
import { TodoItem, TodoItemProps } from "./TodoItem";
import { NewItem } from "./NewItem";

export function List() {
  let [items, setItems] = useState<TodoItemProps[]>([]);

  return (
    <ul>
      <li>
        <NewItem items={items} setItemsHandler={setItems} />
      </li>
      {items.map((item) => (
        <li>
          <TodoItem {...item} />
        </li>
      ))}
    </ul>
  );
}
