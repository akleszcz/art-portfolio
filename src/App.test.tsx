import { render, screen, within } from './utils/tests';
import selectEvent from 'react-select-event';
import App from './App';
import { CONTENT_TEST_ID } from './consts';
import { DEFAULT_THEME_NAME } from './styles/consts';
import { themes } from './styles/themes';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  test('renders with default theme', () => {
    render(<App />);
    const content = screen.getByTestId(CONTENT_TEST_ID);
    const defaultColors = themes[DEFAULT_THEME_NAME].colors;

    expect(content).toHaveStyle(`color: ${defaultColors.text};`);
  });

  test('changes styles based on the selected theme', async () => {
    render(<App />);
    const themeSelect = screen.getByLabelText('Theme select');
    const content = screen.getByTestId(CONTENT_TEST_ID);
    const winterColors = themes.winter.colors;

    await selectEvent.select(themeSelect, 'winter');

    expect(content).toHaveStyle(`color: ${winterColors.text};`);
  });

  test(`navigates to the 'About' section when 'About' is clicked in the navigation bar`, () => {
    render(<App />);
    userEvent.click(screen.getByRole('link', { name: 'About' }));
    const main = screen.getByRole('main');

    expect(within(main).getByText('About')).toBeInTheDocument();
  });
});
