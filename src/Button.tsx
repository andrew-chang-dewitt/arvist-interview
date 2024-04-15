import styles from "$/Button.module.css";

type ButtonProps = {
  count: number;
  onClick: () => void;
};

export function Button({ count, onClick }: ButtonProps) {
  return (
    <button className={styles.red} onClick={onClick}>
      count is {count}
    </button>
  );
}
