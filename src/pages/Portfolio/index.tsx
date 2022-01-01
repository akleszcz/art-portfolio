import { FunctionComponent } from "react";

const integers = Array(30).fill(0).map((_,index)=>index);

const Portfolio: FunctionComponent = () => {
  return <>
    {integers.map(integer => <img
      src={`${process.env.PUBLIC_URL}/assets/placeholder.png`}
      key={integer}
      height="200"
      width="200"
      alt={`Placeholder ${integer}`}
    /> )}
  </>;
};

export default Portfolio;
