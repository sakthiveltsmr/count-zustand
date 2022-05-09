import { useAppStore } from "./Store";

export const Count = () => {
  const count = useAppStore((state) => state.count);
  return <div>count:{count}</div>;
};
