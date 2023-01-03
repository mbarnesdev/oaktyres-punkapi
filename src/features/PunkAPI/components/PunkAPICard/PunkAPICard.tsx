import { FunctionComponent } from "react";

interface IPunkAPICardProps {
  name: string;
  tagline: string;
  image_url: string;
}

const PunkAPICard: FunctionComponent<IPunkAPICardProps> = ({
  name,
  tagline,
  image_url,
}) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>{tagline}</p>
      <img src={image_url} />
    </div>
  );
};

export default PunkAPICard;
