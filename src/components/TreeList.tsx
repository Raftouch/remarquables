import { useEffect, useState } from "react";
import type { Tree } from "../models/Tree";

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
              <p>{tree.com_nom_usuel}</p>
              <img className="img-tree" src={tree.com_url_photo1} />
            </li>
          ))
        : null}
    </ul>
  );
}
