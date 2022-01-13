import { FunctionComponent } from "react";

export type FetchData = ({ limit, offset }: {limit: number, offset: number}) => Promise<{ totalCount: number, data: string[] }>;

type WithPaginationParams = { fetchData: FetchData, limit: number };

export type PaginatedComponent = FunctionComponent<{ data: string[] }>;

export type WithPagination = (WrappedComponent: PaginatedComponent, { fetchData, limit }: WithPaginationParams ) => FunctionComponent;
