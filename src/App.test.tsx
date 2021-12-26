import { render, screen } from '@testing-library/react';
import selectEvent from 'react-select-event';
import App from './App';
import { UiContextProvider } from './context/ui-context';
import { DEFAULT_THEME_NAME } from './styles/consts';
import { themes } from './styles/themes';

describe('App', () => {
  test('renders with default theme', () => {
    render(<App />);
    const navBar = screen.getByLabelText('Primary navigation');
    const sideMenu = screen.getByLabelText('Secondary navigation');
    const defaultColors = themes[DEFAULT_THEME_NAME].colors;

    expect(navBar).toHaveStyle(`background-color: ${defaultColors.navBar};`);
    expect(sideMenu).toHaveStyle(`background-color: ${defaultColors.sideMenu};`);
  });

  test('changes styles based on the selected theme', async () => {
    render(
      <UiContextProvider>
        <App />
      </UiContextProvider>);
    const themeSelect = screen.getByLabelText('Theme select');
    const navBar = screen.getByLabelText('Primary navigation');
    const sideMenu = screen.getByLabelText('Secondary navigation');
    const winterColors = themes.winter.colors;

    await selectEvent.select(themeSelect, 'winter');

    expect(navBar).toHaveStyle(`background-color: ${winterColors.navBar};`);
    expect(sideMenu).toHaveStyle(`background-color: ${winterColors.sideMenu};`);
  });
});
