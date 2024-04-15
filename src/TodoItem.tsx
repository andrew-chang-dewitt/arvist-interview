export type TodoItemProps = {
  desc: string;
  completed: boolean;
};

export function TodoItem({ desc, completed }: TodoItemProps) {
  return (
    <li>
      {desc}, {completed}
    </li>
  );
}
