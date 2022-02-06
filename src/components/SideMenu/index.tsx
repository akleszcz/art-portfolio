import { FunctionComponent } from "react";
import * as Styled from './styles';

const SideMenu: FunctionComponent = () => {
  return <Styled.Nav aria-label="Secondary navigation">
    <Styled.Ul>
      <li>Portraits</li>
      <li>Animals</li>
      <li>Landscapes</li>
      <li>Illustrations</li>
      <li>Animations</li>
    </Styled.Ul>
  </Styled.Nav>;
};

export default SideMenu;
