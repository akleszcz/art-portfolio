import { FunctionComponent } from "react";
import * as Styled from './styles';

const SideMenu: FunctionComponent = () => {
  return <Styled.Nav aria-label="Secondary navigation">
    <ul>
      <li>Portrait</li>
      <li>Animal portrait</li>
      <li>Landscape</li>
      <li>Illustration</li>
      <li>Animation</li>
    </ul>
  </Styled.Nav>;
};

export default SideMenu;
