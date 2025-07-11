interface PaginationProps {
  resultsPerPage: number;
  totalResults: number;
  paginate: (pageNr: number) => void;
}
export default function Pagination({
  resultsPerPage,
  totalResults,
  paginate,
}: PaginationProps) {
  const pages = [];

  for (let page = 1; page <= totalResults / resultsPerPage; page++) {
    pages.push(page);
  }

  return (
    <ul className="pagination">
      {pages.map((pageNr) => (
        <li key={pageNr} onClick={() => paginate(pageNr)}>
          {pageNr}
        </li>
      ))}
    </ul>
  );
}
