import React from "react";
import { useAppStore } from "./Store";

export const Addcount = () => {
  const increment = useAppStore((state) => state.increasePopulation);
  const decrement = useAppStore((state) => state.DecreasePopulation);
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
