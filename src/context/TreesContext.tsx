import { createContext, useEffect, useState } from "react";
import type { Tree } from "../models/Tree";
import { API_URL } from "../utils/api";

interface TreesContextType {
  trees: Tree[];
}

export const TreesContext = createContext<TreesContextType>({
  trees: [],
});

interface ContextProps {
  children: React.ReactNode;
}

export function TreesProvider({ children }: ContextProps) {
  const [trees, setTrees] = useState<Tree[]>([]);

  useEffect(() => {
    const fetchTrees = async () => {
      try {
        const results: Tree[] = [];

        for (let offset = 0; offset <= 186; offset += 100) {
          const response = await fetch(`${API_URL}?limit=100&offset=${offset}`);
          const data = await response.json();
          results.push(...data.results);
        }
        setTrees(results);
      } catch (error) {
        console.error("Error fetching trees", error);
      }
    };
    fetchTrees();
  }, []);

  return (
    <TreesContext.Provider value={{ trees }}>{children}</TreesContext.Provider>
  );
}
