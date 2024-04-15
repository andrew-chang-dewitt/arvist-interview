import { FormEvent, useState } from "react";
import { TodoItem } from "./TodoList";

export type NewItemProps = {
  items: TodoItem[];
  setItemsHandler(items: TodoItem[]): void;
};

export function NewItem({ items, setItemsHandler }: NewItemProps) {
  let [desc, setDesc] = useState("");

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newItem = {
      completed: false,
      desc,
    };
    setItemsHandler([...items, newItem]);
    setDesc("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="desc"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
    </form>
  );
}
