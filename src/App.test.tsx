import { render, screen } from '@testing-library/react';
import selectEvent from 'react-select-event';
import App from './App';
import { CONTENT_TEST_ID } from './consts';
import { UiContextProvider } from './context/ui-context';
import { DEFAULT_THEME_NAME } from './styles/consts';
import { themes } from './styles/themes';

describe('App', () => {
  test('renders with default theme', () => {
    render(<App />);
    const content = screen.getByTestId(CONTENT_TEST_ID);
    const defaultColors = themes[DEFAULT_THEME_NAME].colors;

    expect(content).toHaveStyle(`color: ${defaultColors.text};`);
  });

  test('changes styles based on the selected theme', async () => {
    render(
      <UiContextProvider>
        <App />
      </UiContextProvider>);
    const themeSelect = screen.getByLabelText('Theme select');
    const content = screen.getByTestId(CONTENT_TEST_ID);
    const winterColors = themes.winter.colors;

    await selectEvent.select(themeSelect, 'winter');

    expect(content).toHaveStyle(`color: ${winterColors.text};`);
  });
});
