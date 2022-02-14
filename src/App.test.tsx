import userEvent from '@testing-library/user-event';
import App from './App';
import { render, screen, within } from './utils/tests';
import { useMediaQuery } from 'react-responsive';
import { useMediaQueryMock } from './types';

jest.mock('react-responsive', () => {
  return {
    useMediaQuery: jest.fn(() => true),
  };
});

describe('App component', () => {
  describe('on big screens', () => {
    test(`navigates to the 'About' section when 'About' is clicked in the navigation bar`, () => {
      render(<App />);
      const primaryNav = screen.getByLabelText('Primary navigation');

      userEvent.click(within(primaryNav).getByRole('link', { name: 'About', hidden: true }));
      const main = screen.getByRole('main');

      expect(within(main).getByText('About')).toBeInTheDocument();
    });
  });

  describe('on small screens', () => {
    beforeAll(() => (useMediaQuery as useMediaQueryMock).mockImplementation(() => false));
    afterAll(() => (useMediaQuery as useMediaQueryMock).mockImplementation(() => true));

    test('shows SideDrawer when menu button is clicked', () => {
      render(<App />);
      const sideDrawer = screen.getByLabelText('Sidebar navigation');

      expect(sideDrawer).toHaveStyle('transform: translateX(-100%)');

      userEvent.click(screen.getByLabelText('Navigation bar toggle'));
      expect(sideDrawer).toHaveStyle('transform: translateX(0)');
    });
  });

  test(`displays "Page not found" info for unknown routes`, async () => {
    window.history.pushState({}, '', '/unknown-url');
    render(<App />);

    expect(await screen.findByText('Page not found')).toBeInTheDocument();
  });
});
