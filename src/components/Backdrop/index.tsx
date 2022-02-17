import { FunctionComponent } from "react";
import * as Styled from './styles';

const Backdrop: FunctionComponent<{
  isVisible: boolean,
  onClick?: () => void
}> = ({ isVisible, onClick }) => {
  return isVisible ? <Styled.Div
    data-testid="backdrop"
    onClick={onClick}
  ></Styled.Div> : null;
};

export default Backdrop;
