import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const listStore = (set) => ({
  list: [],
  loader: false,
  error: null,

  fetchList: async () => {
    set({ loader: true, error: null }); // Reset error state before fetching
    try {
      const response = await fetch(
        "https://mocki.io/v1/82bef744-a558-4611-b248-02c06cd5b11c"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      set({ list: data });
    } catch (error) {
      console.log("ERROR", error);
      set({ error: error.message });
    } finally {
      set({ loader: false });
    }
  },
});

const useListStore = create(
  devtools(
    persist(listStore, {
      name: "list",
    })
  )
);

export default useListStore;
