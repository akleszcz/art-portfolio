import userEvent from '@testing-library/user-event';
import selectEvent from 'react-select-event';
import withPagination from '.';
import { LIMIT } from '../../pages/PortfolioWithPagination/consts';
import { render, screen, wrapInTheme } from '../../utils/tests';
import { MockComponent, mockData, mockFetchData, TOTAL_COUNT } from './mocks';

const MockComponentWithPagination = withPagination(MockComponent, { limit: LIMIT, fetchData: mockFetchData });

describe('WithPagination component returned by withPagination HOC', () => {
  test('displays Pagination component', async () => {
    render(wrapInTheme(<MockComponentWithPagination/>));
    await screen.findByText('dataItem1');

    expect(screen.getByLabelText('Pagination')).toBeInTheDocument();
  });

  test('displays wrapped component with no data initially', async () => {
    render(wrapInTheme(<MockComponentWithPagination/>));

    expect(screen.getByText('No data')).toBeInTheDocument();

    /* wait for data to load before finishing the test to avoid the "not wrapped in act(...)" warning */
    await screen.findByText('dataItem1');
  });

  test('displays wrapped component with loaded data', async () => {
    render(wrapInTheme(<MockComponentWithPagination/>));
    await screen.findByText('dataItem1');

    expect(await screen.findByText(mockData[0])).toBeInTheDocument();
  });

  describe('Pagination component', () => {
    test('displays a link to the previous page', async () => {
      render(wrapInTheme(<MockComponentWithPagination/>));
      await screen.findByText('dataItem1');

      expect(screen.getByLabelText('Previous page')).toBeInTheDocument();
    });

    test('displays a link to the next page', async () => {
      render(wrapInTheme(<MockComponentWithPagination/>));
      await screen.findByText('dataItem1');

      expect(screen.getByLabelText('Next page')).toBeInTheDocument();
    });

    test('displays a select with all page numbers', async () => {
      const lastPageNumber = Math.ceil(TOTAL_COUNT / LIMIT);
      render(wrapInTheme(<MockComponentWithPagination/>));
      await screen.findByText('dataItem1');

      selectEvent.openMenu(screen.getByLabelText('Page select'));

      expect(screen.getByText(lastPageNumber)).toBeInTheDocument();
    });
  });

  test('correctly navigates to the next page', async () => {
    const dataItemFromPageTwo = 'dataItemFromPageTwo';
    render(wrapInTheme(<MockComponentWithPagination/>));
    await screen.findByText('dataItem1');
    mockFetchData.mockResolvedValueOnce({ data: [dataItemFromPageTwo], totalCount: TOTAL_COUNT });

    await userEvent.click(screen.getByLabelText('Next page'));

    expect(await screen.findByText(dataItemFromPageTwo)).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  test('correctly navigates to the previous page', async () => {
    const dataItemFromPageTwo = 'dataItemFromPageTwo';
    render(wrapInTheme(<MockComponentWithPagination/>));
    await screen.findByText('dataItem1');
    mockFetchData.mockResolvedValueOnce({ data: [dataItemFromPageTwo], totalCount: TOTAL_COUNT });

    await userEvent.click(screen.getByLabelText('Next page'));
    await screen.findByText(dataItemFromPageTwo);
    await userEvent.click(screen.getByLabelText('Previous page'));

    expect(await screen.findByText('1')).toBeInTheDocument();
    expect(screen.getByText('dataItem1')).toBeInTheDocument();
  });

  test('disables NavLink to the previous page on the first page', async () => {
    render(wrapInTheme(<MockComponentWithPagination/>));
    await screen.findByText('dataItem1');
    const linkToPreviousPage = screen.getByLabelText('Previous page');

    expect(screen.getByLabelText('Previous page')).toHaveStyle('pointer-events: none;');
    expect(linkToPreviousPage.classList.contains('disabled')).toBe(true);
  });

  test('disables NavLink to the next page on the last page', async () => {
    const lastPageNumber = Math.ceil(TOTAL_COUNT / LIMIT);
    window.history.pushState({}, '', `/mock-component?page=${lastPageNumber}`);
    const lastDataItem = 'lastDataItem';
    mockFetchData.mockResolvedValueOnce({ data: [lastDataItem], totalCount: TOTAL_COUNT });
    render(wrapInTheme(<MockComponentWithPagination/>));

    await screen.findByText('lastDataItem');
    const linkToNextPage = screen.getByLabelText('Next page');

    expect(linkToNextPage).toHaveStyle('pointer-events: none;');
    expect(linkToNextPage.classList.contains('disabled')).toBe(true);

  });
});
