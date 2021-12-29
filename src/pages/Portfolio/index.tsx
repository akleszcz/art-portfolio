import { FunctionComponent } from "react";

const integers = Array(30).fill(0).map((_,index)=>index);

const Portfolio: FunctionComponent = () => {
  return <>
    {integers.map(integer => <img
      src={`https://picsum.photos/200?random=${integer}`}
      key={integer}
      height="200"
      width="200"
      alt={`Placeholder ${integer}`}
    /> )}
  </>;
};

export default Portfolio;