import { useState } from "react";
import { useFetch } from "@/hooks";
import { PunkAPI, PunkAPIForm, PunkAPICard } from "@/components";
import type { PunkAPIResponse } from "@/types";
import type { ChangeEvent } from "react";

const App = () => <PunkAPI />;
// const App = () => {
//   const [pageNumber, setPageNumber] = useState("1");
//   const [resultsPerPage, setResultsPerPage] = useState("10");

//   const handlePageNumberChange = (event: ChangeEvent<HTMLInputElement>) =>
//     setPageNumber(event.currentTarget.value);
//   const handleResultsPerPageChange = (event: ChangeEvent<HTMLInputElement>) =>
//     setResultsPerPage(event.currentTarget.value);

//   const URL = `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=${resultsPerPage}`;

//   const { data, error, isLoading } = useFetch<PunkAPIResponse[]>(URL);

//   if (isLoading) return <p>Loading...</p>;

//   if (error) return <p>Error: {JSON.stringify(error)}</p>;

//   return (
//     <div>
//       <label htmlFor="page-number-input">Page Number</label>
//       <input
//         id="page-number-input"
//         type="number"
//         value={pageNumber}
//         onChange={handlePageNumberChange}
//       />
//       <label htmlFor="results-per-page-input">Results Per Page</label>
//       <input
//         id="results-per-page-input"
//         type="number"
//         value={resultsPerPage}
//         onChange={handleResultsPerPageChange}
//       />
//       <code>{URL}</code>
//       {data?.map(
//         ({
//           name,
//           tagline,
//           image_url,
//         }: Pick<PunkAPIResponse, "name" | "tagline" | "image_url">) => (
//           <PunkAPICard name={name} tagline={tagline} image_url={image_url} />
//         )
//       )}
//     </div>
//   );
// };

export default App;
