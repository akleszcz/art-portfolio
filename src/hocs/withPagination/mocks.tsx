import { PaginatedComponent } from "./types";

export const MockComponent: PaginatedComponent = ({ data }) => <div>{data.map(dataItem => <div key={dataItem}>{dataItem}</div>)}</div>;

export const mockData = ['dataItem1', 'dataItem2', 'dataItem3'];

export const TOTAL_COUNT = 115;

export const mockFetchData = jest.fn().mockResolvedValue({ data: mockData, totalCount: TOTAL_COUNT });

