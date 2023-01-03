import type { FunctionComponent } from "react";
import "./PunkAPICard.scss";

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
    <div className="punk-api-card-container">
      <h5 className="punk-api-card-container__name">{name}</h5>
      <p className="punk-api-card-container__tagline">{tagline}</p>
      <img className="punk-api-card-container__image" src={image_url} />
    </div>
  );
};

export default PunkAPICard;
