import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './components/Home';

test('renders portfolio branding and hero headline', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );

  const brandElements = screen.getAllByText(/Dinesh Singh/i);
  expect(brandElements.length).toBeGreaterThan(0);

  const headline = screen.getByText(/Building polished, scalable web experiences/i);
  expect(headline).toBeInTheDocument();

  const eyebrow = screen.getByText(/Frontend Developer · 2\+ Years of Experience/i);
  expect(eyebrow).toBeInTheDocument();
});
