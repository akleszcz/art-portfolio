import { FunctionComponent } from "react";
import * as Styled from './styles';

const Backdrop: FunctionComponent<{ isVisible: boolean }> = ({ isVisible }) => {
  return isVisible ? <Styled.Div data-testid="backdrop"></Styled.Div> : null;
};

export default Backdrop;
