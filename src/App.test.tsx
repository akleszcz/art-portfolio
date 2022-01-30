import userEvent from '@testing-library/user-event';
import App from './App';
import { render, screen, within } from './utils/tests';

describe('App component', () => {
  test(`navigates to the 'About' section when 'About' is clicked in the navigation bar`, () => {
    render(<App />);
    userEvent.click(screen.getByRole('link', { name: 'About' }));
    const main = screen.getByRole('main');

    expect(within(main).getByText('About')).toBeInTheDocument();
  });

  test(`displays "Page not found" info for unknown routes`, async () => {
    window.history.pushState({}, '', '/unknown-url');
    render(<App />);

    expect(await screen.findByText('Page not found')).toBeInTheDocument();
  });
});
