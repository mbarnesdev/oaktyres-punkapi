import { useFetch } from "@/hooks";
import { Spinner } from "@/components";
import type { PunkAPIResponse } from "@/types";
import type { FunctionComponent } from "react";

interface IPunkAPIDisplayProps {
  parsedURL: string;
}

const PunkAPIDisplay: FunctionComponent<IPunkAPIDisplayProps> = ({
  parsedURL,
}) => {
  const { data, error, isLoading } = useFetch<PunkAPIResponse[]>(parsedURL);

  if (isLoading) return <Spinner />;
  return null;
};

export default PunkAPIDisplay;
