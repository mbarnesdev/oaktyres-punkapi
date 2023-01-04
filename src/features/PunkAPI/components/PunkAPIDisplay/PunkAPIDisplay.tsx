import { useFetch } from '@/hooks';
import { Spinner } from '@/components';
import { PunkAPICard } from '@/features/PunkAPI';
import type { PunkAPIResponse } from '@/features/PunkAPI/types';
import type { FunctionComponent } from 'react';
import './PunkAPIDisplay.scss';

interface IPunkAPIDisplayProps {
  parsedURL: string;
}

const PunkAPIDisplay: FunctionComponent<IPunkAPIDisplayProps> = ({
  parsedURL,
}) => {
  const { data, error, isLoading } = useFetch<PunkAPIResponse[]>(parsedURL);

  if (isLoading)
    return (
      <div className="spinner">
        <Spinner />;
      </div>
    );

  if (error)
    return (
      <div className="error">
        <h1>Oops!</h1>
        <p>Something went wrong! Please check your search parameters.</p>
      </div>
    );

  return (
    <div className="display-container">
      {data?.map(
        ({
          id,
          name,
          tagline,
          image_url,
        }: Pick<PunkAPIResponse, 'id' | 'name' | 'tagline' | 'image_url'>) => (
          <PunkAPICard
            key={id}
            name={name}
            tagline={tagline}
            image_url={image_url}
          />
        ),
      )}
    </div>
  );
};

export default PunkAPIDisplay;
