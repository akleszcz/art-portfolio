import userEvent from '@testing-library/user-event';
import selectEvent from 'react-select-event';
import App from './App';
import { CONTENT_TEST_ID } from './consts';
import { DEFAULT_THEME_NAME } from './styles/consts';
import { themes } from './styles/themes';
import { render, screen, within } from './utils/tests';

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

  test('displays currently active NavLink with an underline and inactive ones without it', async () => {
    render (<App />);
    const PortfolioLink = screen.getByRole('link', { name: 'Portfolio' });
    const AboutLink = screen.getByRole('link', { name: 'About' });
    const ContactLink = screen.getByRole('link', { name: 'Contact' });
    const underlineStyle = 'text-decoration: underline;';
    const noUnderlineStyle = 'text-decoration: none;';

    expect(PortfolioLink).toHaveStyle(underlineStyle);
    expect(AboutLink).toHaveStyle(noUnderlineStyle);
    expect(ContactLink).toHaveStyle(noUnderlineStyle);

    userEvent.click(AboutLink);

    expect(PortfolioLink).toHaveStyle(noUnderlineStyle);
    expect(AboutLink).toHaveStyle(underlineStyle);
    expect(ContactLink).toHaveStyle(noUnderlineStyle);
  });
});
