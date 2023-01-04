import { useState } from 'react';
import { PunkAPIForm, PunkAPIDisplay } from '@/features';
import './PunkAPI.scss';

const PunkAPI = () => {
  const [pageNumber, setPageNumber] = useState('1');
  const [resultsPerPage, setResultsPerPage] = useState('10');

  const parsedURL = `/beers?page=${pageNumber}&per_page=${resultsPerPage}`;

  return (
    <div className="punk-api-container">
      <PunkAPIForm
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        resultsPerPage={resultsPerPage}
        setResultsPerPage={setResultsPerPage}
      />
      <div className="punk-api-container__display">
        <PunkAPIDisplay parsedURL={parsedURL} />
      </div>
    </div>
  );
};

export default PunkAPI;
