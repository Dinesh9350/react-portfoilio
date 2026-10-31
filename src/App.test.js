import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './components/Home';
import { ThemeProvider } from './context/ThemeContext';

test('renders complete portfolio redesign with hero headline and positioning', () => {
  render(
    <ThemeProvider>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </ThemeProvider>
  );

  // Check branding
  const nameElements = screen.getAllByText(/Dinesh Singh/i);
  expect(nameElements.length).toBeGreaterThan(0);

  // Check headline
  const headline = screen.getByText((content, element) => {
    return element.tagName.toLowerCase() === 'h1' && /thoughtful interfaces/i.test(element.textContent);
  });
  expect(headline).toBeInTheDocument();

  // Check LinkedIn handle
  const linkedInMentions = screen.getAllByText(/dinesh-singh3/i);
  expect(linkedInMentions.length).toBeGreaterThan(0);

  // Check SecurePay production experience (appears in multiple sections)
  const securePayMentions = screen.getAllByText(/SecurePay/i);
  expect(securePayMentions.length).toBeGreaterThan(0);

  // Check interactive component previews
  const dashboardBadge = screen.getByText(/SecurePay Merchant Portal v2.4/i);
  expect(dashboardBadge).toBeInTheDocument();
});
