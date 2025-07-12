import type { Tree } from "../models/Tree";

interface TreeCardProps {
  tree: Tree;
}

export default function TreeCard({ tree }: TreeCardProps) {
  return (
    <li className="tree-unit" key={tree.com_idarbre}>
      <p>{tree.com_nom_usuel}</p>
      <img className="tree-img" src={tree.com_url_photo1} />
    </li>
  );
}
