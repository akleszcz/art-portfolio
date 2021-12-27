import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { FunctionComponent, ReactElement } from 'react';
import { UiContextProvider } from '../context/ui-context';

const AllTheProviders: FunctionComponent = ({ children }) => {
  return (
    <UiContextProvider>
      {children}
    </UiContextProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };


