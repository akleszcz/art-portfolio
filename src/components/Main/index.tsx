import { FunctionComponent } from "react";
import * as Styled from './styles';

const integers = Array(30).fill(0).map((_,index)=>index);

const Main: FunctionComponent = () => {
  return <Styled.Main>
    {integers.map(integer => <img
      src={`https://picsum.photos/200?random=${integer}`}
      key={integer}
      height="200"
      width="200"
      alt={`Placeholder ${integer}`}
    /> )}
  </Styled.Main>;
};

export default Main;
