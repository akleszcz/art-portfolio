export type PortfolioImageData = {
  id: string;
  thumbnailUrl: string;
  altText: string;
};

export type PortfolioProps = {
  data: PortfolioImageData[]
};
