import selectEvent from 'react-select-event';
import { CONTENT_TEST_ID } from '../../consts';
import { DEFAULT_THEME_NAME } from '../../styles/consts';
import { themes } from '../../styles/themes';
import { ThemeName } from '../../styles/types';
import { render, screen } from '../../utils/tests';
import Layout from './index';

describe('Layout component', () => {
  test('renders with default theme', async () => {
    render(<Layout/>);

    expect(screen.getByTestId(CONTENT_TEST_ID))
      .toHaveStyle(`color: ${themes[DEFAULT_THEME_NAME].colors.text};`);
  });
  
  test('changes styles based on the selected theme', async () => {
    render(<Layout />);
    const themeName: ThemeName = 'winter';
    await selectEvent.select(screen.getByLabelText('Theme select'), themeName);
  
    expect(screen.getByTestId(CONTENT_TEST_ID))
      .toHaveStyle(`color: ${themes[themeName].colors.text};`);
  });
  
});
