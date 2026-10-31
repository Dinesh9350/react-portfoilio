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
  const headline = screen.getByText(/Engineering thoughtful interfaces for complex products/i);
  expect(headline).toBeInTheDocument();

  // Check SecurePay production experience (appears in multiple sections)
  const securePayMentions = screen.getAllByText(/SecurePay/i);
  expect(securePayMentions.length).toBeGreaterThan(0);

  // Check interactive component previews
  const dashboardBadge = screen.getByText(/SecurePay Merchant Portal v2.4/i);
  expect(dashboardBadge).toBeInTheDocument();
});
