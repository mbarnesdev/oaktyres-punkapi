import { useFetch } from "@/hooks";
import { Spinner } from "@/components";
import { PunkAPICard } from "@/features/PunkAPI";
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

  if (error) return <p>Oops...</p>;

  return (
    <div>
      {data?.map(
        ({
          id,
          name,
          tagline,
          image_url,
        }: Pick<PunkAPIResponse, "id" | "name" | "tagline" | "image_url">) => (
          <PunkAPICard
            key={id}
            name={name}
            tagline={tagline}
            image_url={image_url}
          />
        )
      )}
    </div>
  );
};

export default PunkAPIDisplay;
