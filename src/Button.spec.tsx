import { useState } from "react";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import { Button } from "$/Button";

describe("button component", () => {
  type TestProps = { initialState: number };

  function Test({ initialState }: TestProps) {
    let [count, setCount] = useState(initialState);

    return (
      <Button count={count} onClick={() => setCount((count) => count + 1)} />
    );
  }

  test("keeps the correct count", async () => {
    render(<Test initialState={0} />);

    expect(screen.getByRole("button")).toHaveTextContent("count is 0");

    for (let i = 1; i < 100; i++) {
      await userEvent.click(screen.getByRole("button"));

      expect(screen.getByRole("button")).toHaveTextContent(`count is ${i}`);
    }
  });
});
