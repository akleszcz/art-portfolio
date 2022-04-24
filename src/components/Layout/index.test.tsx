import userEvent from '@testing-library/user-event';
import { useMediaQuery } from 'react-responsive';
import selectEvent from 'react-select-event';
import { CONTENT_TEST_ID } from '../../consts';
import { DEFAULT_THEME_NAME } from '../../styles/consts';
import { themes } from '../../styles/themes';
import { ThemeName } from '../../styles/types';
import { useMediaQueryMock } from '../../types';
import { render, screen } from '../../utils/tests';
import Layout from './index';

jest.mock('react-responsive', () => {
  return {
    useMediaQuery: jest.fn(() => true),
  };
});

const sideDrawerOpenStyle = 'transform: translateX(0)';
const sideDrawerClosedStyle = 'transform: translateX(-100%)';
const backdropTestId = 'backdrop';
const menuButtonLabel = 'Navigation bar toggle';
const sideDrawerLabel = 'Sidebar navigation';

describe('Layout component', () => {
  test('renders with default theme', async () => {
    render(<Layout/>);

    expect(screen.getByTestId(CONTENT_TEST_ID))
      .toHaveStyle(`color: ${themes[DEFAULT_THEME_NAME].colors.text};`);
  });

  test('changes styles based on the selected theme', async () => {
    render(<Layout />);
    const themeName: ThemeName = 'dark';
    const themeSelect = screen.getByLabelText('Theme select');

    selectEvent.openMenu(themeSelect);
    await selectEvent.select(themeSelect, themeName);

    expect(screen.getByTestId(CONTENT_TEST_ID))
      .toHaveStyle(`color: ${themes[themeName].colors.text};`);
  });

  describe('on small screens', () => {
    beforeAll(() => (useMediaQuery as useMediaQueryMock).mockImplementation(() => false));
    afterAll(() => (useMediaQuery as useMediaQueryMock).mockImplementation(() => true));

    test('shows SideDrawer when menu button is clicked', async () => {
      const user = userEvent.setup();
      render(<Layout />);
      const sideDrawer = screen.getByLabelText(sideDrawerLabel);

      expect(sideDrawer).toHaveStyle(sideDrawerClosedStyle);

      await user.click(screen.getByLabelText(menuButtonLabel));
      expect(sideDrawer).toHaveStyle(sideDrawerOpenStyle);
    });

    test('shows Backdrop when menu button is clicked', async () => {
      const user = userEvent.setup();
      render(<Layout />);
      expect(screen.queryByTestId(backdropTestId)).not.toBeInTheDocument();

      await user.click(screen.getByLabelText(menuButtonLabel));
      expect(screen.getByTestId(backdropTestId)).toBeInTheDocument();
    });

    test('hides SideDrawer when Backdrop is clicked', async () => {
      const user = userEvent.setup();
      render(<Layout />);
      const sideDrawer = screen.getByLabelText(sideDrawerLabel);
      expect(sideDrawer).toHaveStyle(sideDrawerClosedStyle);

      await user.click(screen.getByLabelText(menuButtonLabel));
      expect(sideDrawer).toHaveStyle(sideDrawerOpenStyle);

      await user.click(screen.getByTestId(backdropTestId));
      expect(sideDrawer).toHaveStyle(sideDrawerClosedStyle);
    });
  });
});
