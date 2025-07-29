import { useContext, useEffect, useState } from "react";
import Pagination from "./Pagination";
import TreeCard from "./TreeCard";
import { TreesContext } from "../context/TreesContext";

export default function TreeList() {
  const { trees, loading, error } = useContext(TreesContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");

  const treesPerPage = 20;

  const filteredTrees = trees.filter((tree) =>
    tree.com_nom_usuel.toLowerCase().includes(query.toLowerCase())
  );

  const startIndex = (currentPage - 1) * treesPerPage;
  const endIndex = currentPage * treesPerPage;
  const currentTrees = filteredTrees.slice(startIndex, endIndex);

  const paginate = (pageNr: number) => setCurrentPage(pageNr);

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  return (
    <>
      <input
        value={query}
        onChange={handleChange}
        type="search"
        placeholder="Rechercher un arbre..."
        className="search"
      />

      {loading ? (
        <p className="loading">Chargement en cours...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <>
          {filteredTrees.length === 0 ? (
            <p>Aucun arbre trouvé</p>
          ) : (
            <>
              <ul className="tree-list">
                {currentTrees.map((tree) => (
                  <TreeCard key={tree.com_idarbre} tree={tree} />
                ))}
              </ul>
              <div className="pagination__buttons">
                <button
                  className="btn--prev"
                  onClick={prevPage}
                  disabled={currentPage === 1}
                >
                  ⏮
                </button>

                <Pagination
                  resultsPerPage={treesPerPage}
                  totalResults={filteredTrees.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
                <button
                  className="btn--next"
                  onClick={nextPage}
                  disabled={
                    currentPage ===
                    Math.ceil(filteredTrees.length / treesPerPage)
                  }
                >
                  ⏭
                </button>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
