import { useEffect, useState } from "react";
import type { Tree } from "../models/Tree";
import { API_URL } from "../utils/api";

export default function TreeList() {
  const [trees, setTrees] = useState<Tree[]>([]);

  const fetchTrees = async () => {
    try {
      const response = await fetch(`${API_URL}?limit=20`);
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
      {trees.map((tree) => (
        <li key={tree.com_idarbre}>
          <p>{tree.com_nom_usuel}</p>
          <img className="img-tree" src={tree.com_url_photo1} />
        </li>
      ))}
    </ul>
  );
}
