"use client";

import { useState } from "react";

export const ExampleCounter = () => {
  const [counter, setCounter] = useState<number>(0);

  const incrementCounter = () => setCounter((prev) => prev - 1);
  const decrementCounter = () => setCounter((prev) => prev + 1);
  return (
    <div>
      <button type="button" onClick={decrementCounter}>
        -
      </button>
      {counter}
      <button type="button" onClick={incrementCounter}>
        +
      </button>
    </div>
  );
};
