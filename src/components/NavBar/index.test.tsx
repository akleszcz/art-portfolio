import userEvent from "@testing-library/user-event";
import { render, screen, wrapInTheme } from "../../utils/tests";
import NavBar from './index';

describe('NavBar component', () => {
  test('displays currently active NavLink with an underline and inactive ones without it', async () => {
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
  
    userEvent.click(AboutLink);
  
    expect(HomeLink).toHaveStyle(noUnderlineStyle);
    expect(PortfolioLink).toHaveStyle(noUnderlineStyle);
    expect(AboutLink).toHaveStyle(underlineStyle);
    expect(ContactLink).toHaveStyle(noUnderlineStyle);
  });
  
});
