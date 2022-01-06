import { FunctionComponent } from "react";

type LoadData = ({ limit, offset }: {limit: number, offset: number}) => string[];
type WithPaginationParams = { loadData: LoadData, limit: number };

export type PaginatedComponent = FunctionComponent<{ data: string[] }>;
export type WithPagination = (WrappedComponent: PaginatedComponent, { loadData, limit }: WithPaginationParams ) => FunctionComponent;
