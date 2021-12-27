import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { FunctionComponent, ReactElement } from 'react';
import { UiContextProvider } from '../context/ui-context';
import { MemoryRouter } from 'react-router-dom';


const AllTheProviders: FunctionComponent = ({ children }) => {
  return (
    <UiContextProvider>
      <MemoryRouter>
        {children}
      </MemoryRouter>
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


