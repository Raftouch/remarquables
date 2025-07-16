import { useContext } from "react";
import { TreesContext } from "../context/TreesContext";
import type { Tree } from "../models/Tree";

export default function GroupedTrees() {
  const { trees } = useContext(TreesContext);
  const groupedTrees = trees.reduce<Record<string, Tree[]>>((acc, tree) => {
    const name = tree.com_nom_usuel;

    if (!acc[name]) {
      acc[name] = [];
    }

    acc[name].push(tree);
    console.log("acc : ", acc);
    return acc;
  }, {});

  return <div></div>;
}
