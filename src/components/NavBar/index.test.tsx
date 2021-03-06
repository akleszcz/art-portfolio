import userEvent from "@testing-library/user-event";
import { useMediaQuery } from "react-responsive";
import { useMediaQueryMock } from "../../types";
import { render, screen, wrapInTheme } from "../../utils/tests";
import NavBar from './index';

jest.mock('react-responsive', () => {
  return {
    useMediaQuery: jest.fn(() => true),
  };
});

describe('NavBar component', () => {
  describe('on big screens', () => {
    test('displays currently active NavLink with an underline and inactive ones without it', async () => {
      const user = userEvent.setup();
      render(wrapInTheme(<NavBar/>));
      const HomeLink = screen.getByRole('link', { name: 'Home' });
      const PortfolioLink = screen.getByRole('link', { name: 'Portfolio' });
      const AboutLink = screen.getByRole('link', { name: 'About' });
      const ContactLink = screen.getByRole('link', { name: 'Contact' });
      const underlineStyle = 'text-decoration: underline;';
      const noUnderlineStyle = 'text-decoration: none;';

      expect(HomeLink).toHaveStyle(underlineStyle);
      expect(PortfolioLink).toHaveStyle(noUnderlineStyle);
      expect(AboutLink).toHaveStyle(noUnderlineStyle);
      expect(ContactLink).toHaveStyle(noUnderlineStyle);

      await user.click(AboutLink);

      expect(HomeLink).toHaveStyle(noUnderlineStyle);
      expect(PortfolioLink).toHaveStyle(noUnderlineStyle);
      expect(AboutLink).toHaveStyle(underlineStyle);
      expect(ContactLink).toHaveStyle(noUnderlineStyle);
    });
  });


  describe('on small screens', () => {
    test('displays menu button', () => {
      (useMediaQuery as useMediaQueryMock).mockImplementation(() => false);
      render(wrapInTheme(<NavBar isLargerScreen={false}/>));

      expect(screen.getByLabelText('Navigation bar toggle')).toBeInTheDocument();

    });
  });

});
