interface PaginationProps {
  resultsPerPage: number;
  totalResults: number;
  currentPage: number;
  paginate: (pageNr: number) => void;
}
export default function Pagination({
  resultsPerPage,
  totalResults,
  currentPage,
  paginate,
}: PaginationProps) {
  const pages = [];

  for (let page = 1; page <= Math.ceil(totalResults / resultsPerPage); page++) {
    pages.push(page);
  }

  return (
    <ul className="pagination">
      {pages.map((pageNr) => (
        <li
          className={currentPage === pageNr ? "btn--active" : ""}
          key={pageNr}
        >
          <button onClick={() => paginate(pageNr)}>{pageNr}</button>
        </li>
      ))}
    </ul>
  );
}
