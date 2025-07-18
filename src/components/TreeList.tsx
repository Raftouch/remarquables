import { useContext, useState } from "react";
import Pagination from "./Pagination";
import TreeCard from "./TreeCard";
import { TreesContext } from "../context/TreesContext";

export default function TreeList() {
  const { trees, loading, error } = useContext(TreesContext);
  const [currentPage, setCurrentPage] = useState(1);

  const treesPerPage = 20;

  const startIndex = (currentPage - 1) * treesPerPage;
  const endIndex = currentPage * treesPerPage;
  const currentTrees = trees.slice(startIndex, endIndex);

  const paginate = (pageNr: number) => setCurrentPage(pageNr);

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <>
      {loading ? (
        <p className="loading">Chargement en cours...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <>
          <ul className="tree-list">
            {currentTrees.map((tree) => (
              <TreeCard tree={tree} />
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
              totalResults={trees.length}
              paginate={paginate}
              currentPage={currentPage}
            />
            <button
              className="btn--next"
              onClick={nextPage}
              disabled={currentPage === Math.ceil(trees.length / treesPerPage)}
            >
              ⏭
            </button>
          </div>
        </>
      )}
    </>
  );
}
