import { useEffect, useState } from "react";

interface Tree {
  com_idarbre: number;
  com_nom_latin: string;
}

export default function TreeList() {
  const [trees, setTrees] = useState<Tree[] | null>([]);

  const fetchTrees = async () => {
    try {
      const response = await fetch(
        "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/arbresremarquablesparis2011/records?limit=20"
      );
      const data = await response.json();
      const results = data.results;
      console.log("data : ", results);
      setTrees(results);
    } catch (error) {
      console.error("Error fetching trees", error);
    }
  };

  useEffect(() => {
    fetchTrees();
  }, []);

  return (
    <ul>
      {trees
        ? trees.map((tree) => (
            <li key={tree.com_idarbre}>
              <p>{tree.com_nom_latin}</p>
            </li>
          ))
        : null}
    </ul>
  );
}
