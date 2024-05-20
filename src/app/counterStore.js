import create from "zustand";
import { devtools, persist } from "zustand/middleware";
const counterStore = (set) => ({
  count: 0,
  increment: () => {
    set((state) => ({
      count: state.count + 1,
    }));
  },
  decrement: () => {
    set((state) => ({
      count: state.count - 1,
    }));
  },
});
export default counterStore;
