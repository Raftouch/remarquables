import { useContext, useState } from "react";
import { TreesContext } from "../context/TreesContext";
import groupBy from "../utils/group";
import { Link } from "react-router-dom";
import type { Tree } from "../models/Tree";

export default function GroupedTrees() {
  const { trees } = useContext(TreesContext);

  const [isGroupeVisible, setIsGroupeVisible] = useState<
    Record<string, boolean>
  >({});

  const treesGroupedByName = groupBy(trees, "com_nom_usuel");
  console.log(treesGroupedByName);

  const treesGroupedByLetter = trees.reduce<Record<string, Tree[]>>(
    (acc, tree) => {
      const letter = tree.com_nom_usuel[0].toUpperCase();

      if (!acc[letter]) {
        acc[letter] = [];
      }

      acc[letter].push(tree);
      return acc;
    },
    {}
  );

  const handleClick = (treeName: string) => {
    setIsGroupeVisible((prev) => ({
      ...prev,
      [treeName]: !prev[treeName],
    }));
  };

  return (
    <>
      {Object.entries(treesGroupedByLetter).map(([letter, treesInGroup]) => (
        <div key={letter}>
          <h1>{letter}</h1>

          {Object.entries(groupBy(treesInGroup, "com_nom_usuel")).map(
            ([treeName, treesGrouped]) => (
              <div className="tree-list__grouped" key={treeName}>
                <div
                  className="tree-list__grouped-head"
                  onClick={() => handleClick(treeName)}
                >
                  <div className="tree-list__grouped-heading">
                    <h2>{treeName}</h2> <span>({treesGrouped.length})</span>
                  </div>
                  {isGroupeVisible[treeName] ? (
                    <span>➖</span>
                  ) : (
                    <span>➕</span>
                  )}
                </div>

                {isGroupeVisible[treeName] ? (
                  <>
                    {Object.entries(
                      groupBy(treesGrouped, "com_arrondissement")
                    ).map(([arrondissement, treesInArr]) => (
                      <div key={arrondissement}>
                        <h3>Arrondissement : {arrondissement}</h3>
                        <ul className="tree-list">
                          {treesInArr.map((tree) => (
                            <li className="tree-unit" key={tree.com_idarbre}>
                              <Link
                                className="tree-unit__link"
                                to={`/details/${tree.com_idarbre}`}
                              >
                                <p className="">{tree.com_nom_latin}</p>
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
                  </>
                ) : null}
              </div>
            )
          )}
        </div>
      ))}
    </>
  );
}
