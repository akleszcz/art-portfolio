import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { FunctionComponent, ReactElement } from 'react';
import { UiContextProvider } from '../context/ui-context';
import { BrowserRouter } from 'react-router-dom';
import { DEFAULT_THEME_NAME } from '../styles/consts';
import { themes } from '../styles/themes';
import { ThemeProvider } from 'styled-components';


const AllTheProviders: FunctionComponent = ({ children }) => {
  return (
    <UiContextProvider>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </UiContextProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options });

const wrapInTheme = (ui: ReactElement, theme = themes[DEFAULT_THEME_NAME]): JSX.Element => {
  return <ThemeProvider theme={theme}>{ui}</ThemeProvider>;
};

export * from '@testing-library/react';
export { customRender as render, wrapInTheme };


