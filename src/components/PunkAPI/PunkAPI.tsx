import { useState } from "react";
import { useFetch } from "@/hooks";
import { PunkAPIForm } from "@/components";

const PunkAPI = () => {
  const [pageNumber, setPageNumber] = useState("1");
  const [resultsPerPage, setResultsPerPage] = useState("10");
  const parsedURL = `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=${resultsPerPage}`;

  return (
    <>
      <PunkAPIForm
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        resultsPerPage={resultsPerPage}
        setResultsPerPage={setResultsPerPage}
      />
      <PunkAPIDisplay parsedURL={parsedURL} />
    </>
  );
};

export default PunkAPI;
