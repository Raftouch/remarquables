import { Link } from "react-router-dom";
import type { Tree } from "../models/Tree";

interface TreeCardProps {
  tree: Tree;
}

export default function TreeCard({ tree }: TreeCardProps) {
  return (
    <li className="tree-unit" key={tree.com_idarbre}>
      <Link className="tree-unit__link" to={`/details/${tree.com_idarbre}`}>
        <p>{tree.com_nom_usuel}</p>
        <img className="tree-unit__img" src={tree.com_url_photo1} />
      </Link>
    </li>
  );
}
