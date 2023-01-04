import type { FunctionComponent, ChangeEvent } from "react";
import "./PunkAPIForm.scss";

interface IPunkAPIFormProps {
  pageNumber: string;
  setPageNumber: (value: string) => void;
  resultsPerPage: string;
  setResultsPerPage: (value: string) => void;
}

const PunkAPIForm: FunctionComponent<IPunkAPIFormProps> = ({
  pageNumber,
  setPageNumber,
  resultsPerPage,
  setResultsPerPage,
}) => {
  const handleChangePageNumber = (event: ChangeEvent<HTMLInputElement>) =>
    setPageNumber(event.currentTarget.value);
  const handleChangeResultsPerPage = (event: ChangeEvent<HTMLInputElement>) =>
    setResultsPerPage(event.currentTarget.value);

  return (
    <div className="form-container">
      <form>
        <label htmlFor="page-number-input">Page Number:</label>
        <input
          id="page-number-input"
          type="number"
          value={pageNumber}
          onChange={handleChangePageNumber}
        />
        <label htmlFor="results-per-page-input">Results Per Page:</label>
        <input
          is="results-per-page-input"
          type="number"
          value={resultsPerPage}
          onChange={handleChangeResultsPerPage}
        />
      </form>
    </div>
  );
};

export default PunkAPIForm;
