import { FunctionComponent } from "react";

export type FetchData<T = string> = ({ limit, offset }: {limit: number, offset: number}) => Promise<{ totalCount: number, data: T[] }>;

export type WithPaginationParams<T = string> = { fetchData: FetchData<T>, limit: number };

export type PaginatedComponent<T = string> = FunctionComponent<{ data: T[] }>;
