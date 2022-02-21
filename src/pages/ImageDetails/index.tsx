import { FunctionComponent, useState } from "react";
import { useParams } from "react-router-dom";
import * as Styled from './styles';

const ImageDetails: FunctionComponent = () => {
  const { id } = useParams();
  const [error, setError] = useState('');

  const handleError = (): void => {
    setError('Failed to load image');
  };

  if (error) {
    return <div>{error}</div>;
  }

  return <Styled.Img
    src={`/assets/images/placeholder-image-${id}.png`}
    alt="Placeholder"
    onError={handleError}
  />;
};

export default ImageDetails;
