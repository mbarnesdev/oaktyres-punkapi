import { useState, useEffect } from "react";
import { useFetch } from "@/hooks";
import type { TPunkResponse } from "@/types";
import type { ChangeEvent } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const App = () => {
  const [pageNumber, setPageNumber] = useState("1");
  const [resultsPerPage, setResultsPerPage] = useState("10");

  const handlePageNumberChange = (event: ChangeEvent<HTMLInputElement>) =>
    setPageNumber(event.currentTarget.value);
  const handleResultsPerPageChange = (event: ChangeEvent<HTMLInputElement>) =>
    setResultsPerPage(event.currentTarget.value);

  const URL = `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=${resultsPerPage}`;

  const { data, error, isLoading } = useFetch<any>(URL);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return (
    <div>
      <label htmlFor="page-number-input">Page Number</label>
      <input
        id="page-number-input"
        type="number"
        value={pageNumber}
        onChange={handlePageNumberChange}
      />
      <label htmlFor="results-per-page-input">Results Per Page</label>
      <input
        id="results-per-page-input"
        type="number"
        value={resultsPerPage}
        onChange={handleResultsPerPageChange}
      />
      <code>{URL}</code>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;
