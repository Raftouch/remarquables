import { useEffect, useState } from "react";
import type { Tree } from "../models/Tree";
import { API_URL } from "../utils/api";
import Pagination from "./Pagination";

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
          <li className="tree-unit" key={tree.com_idarbre}>
            <p>{tree.com_nom_usuel}</p>
            <img className="tree-img" src={tree.com_url_photo1} />
          </li>
        ))}
      </ul>
      <div className="pagination__buttons">
        <button
          className="btn--prev"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Prev
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
          disabled={currentPage === trees.length / treesPerPage}
        >
          Next
        </button>
      </div>
    </>
  );
}
