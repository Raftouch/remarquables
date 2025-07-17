import { useContext } from "react";
import { TreesContext } from "../context/TreesContext";
import groupBy from "../utils/group";
import { Link } from "react-router-dom";

export default function GroupedTrees() {
  const { trees } = useContext(TreesContext);

  const treesGroupedByName = groupBy(trees, "com_nom_usuel");
  console.log(treesGroupedByName);

  return (
    <div>
      {Object.entries(treesGroupedByName).map(([treeName, treesGrouped]) => (
        <div className="tree-list__grouped" key={treeName}>
          <h2>{treeName}</h2>
          <ul className="tree-list">
            {treesGrouped.map((tree) => (
              <li className="tree-unit" key={tree.com_idarbre}>
                <Link
                  className="tree-unit__link"
                  to={`/details/${tree.com_idarbre}`}
                >
                  <p className="tree-unit__name">{tree.com_arrondissement}</p>
                  <img
                    className="tree-unit__img"
                    src={tree.com_url_photo1}
                    alt={`Photo de ${tree.com_nom_usuel}`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
