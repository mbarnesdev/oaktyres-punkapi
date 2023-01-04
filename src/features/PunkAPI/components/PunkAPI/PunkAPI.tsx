import { useState } from 'react';
import { PunkAPIForm, PunkAPIDisplay } from '@/features';

const PunkAPI = () => {
  const [pageNumber, setPageNumber] = useState('1');
  const [resultsPerPage, setResultsPerPage] = useState('10');

  const parsedURL = `/beers?page=${pageNumber}&per_page=${resultsPerPage}`;

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
