import userEvent from '@testing-library/user-event';
import App from './App';
import { act, fireEvent, render, screen, within } from './utils/tests';

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

      expect(within(screen.getByRole('main')).getByText('About')).toBeInTheDocument();
    });
  });

  test(`displays "Page not found" for unknown routes`, async () => {
    window.history.pushState({}, '', '/unknown-url');
    render(<App />);

    expect(await screen.findByText('Page not found')).toBeInTheDocument();
  });

  test(`displays a page with a single image`, async () => {
    window.history.pushState({}, '', '/portfolio/1');
    render(<App />);

    expect(await within(screen.getByRole('main')).findAllByRole('img')).toHaveLength(1);
  });

  test(`displays "Failed to load image" for unknown image urls`, async () => {
    window.history.pushState({}, '', '/portfolio/-2');
    render(<App />);

    fireEvent(await within(screen.getByRole('main')).findByRole('img'), new Event('error'));

    expect(await screen.findByText('Failed to load image')).toBeInTheDocument();
  });
});
