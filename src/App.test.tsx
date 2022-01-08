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
});
