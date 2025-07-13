import { createContext, useEffect, useState } from "react";
import type { Tree } from "../models/Tree";
import { API_URL } from "../utils/api";

interface TreesContextType {
  trees: Tree[];
  loading: boolean;
  error: string | null;
}

export const TreesContext = createContext<TreesContextType>({
  trees: [],
  loading: false,
  error: null,
});

interface ContextProps {
  children: React.ReactNode;
}

export function TreesProvider({ children }: ContextProps) {
  const [trees, setTrees] = useState<Tree[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrees = async () => {
      try {
        setLoading(true);
        setError(null);

        const results: Tree[] = [];

        for (let offset = 0; offset <= 186; offset += 100) {
          const response = await fetch(`${API_URL}?limit=100&offset=${offset}`);
          const data = await response.json();
          results.push(...data.results);
        }
        setTrees(results);
      } catch (error) {
        setError("Une erreur est survenue");
        console.error("Error fetching trees", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrees();
  }, []);

  return (
    <TreesContext.Provider value={{ trees, loading, error }}>
      {children}
    </TreesContext.Provider>
  );
}
