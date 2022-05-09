import create from "zustand";

type State = {
  count: number;
  increasePopulation: () => void;
  DecreasePopulation: () => void;
};

export const useAppStore = create<State>((set) => ({
  count: 0,
  increasePopulation: () => set((state) => ({ count: state.count + 1 })),
  DecreasePopulation: () => set((state) => ({ count: state.count - 1 })),
}));
