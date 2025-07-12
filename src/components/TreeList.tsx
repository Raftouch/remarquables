import { useEffect, useState } from "react";
import type { Tree } from "../models/Tree";
import { API_URL } from "../utils/api";
import Pagination from "./Pagination";
import TreeCard from "./TreeCard";

export default function TreeList() {
  const [trees, setTrees] = useState<Tree[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const treesPerPage = 20;

  const fetchTrees = async () => {
    try {
      const results: Tree[] = [];
      for (let offset = 0; offset < 186; offset += 100) {
        const response = await fetch(`${API_URL}?limit=100&offset=${offset}`);
        const data = await response.json();
        //   const results = data.results;
        results.push(...data.results);
      }
      setTrees(results);
    } catch (error) {
      console.error("Error fetching trees", error);
    }
  };

  useEffect(() => {
    fetchTrees();
  }, []);

  const startIndex = (currentPage - 1) * treesPerPage;
  const endIndex = currentPage * treesPerPage;
  const currentTrees = trees.slice(startIndex, endIndex);

  console.log("currentTrees : ", currentTrees);

  const paginate = (pageNr: number) => setCurrentPage(pageNr);

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return (
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
  );
}
