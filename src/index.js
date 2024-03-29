import React from 'react';
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import ErrorPage from './components/ErrorPage';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

// const Home = lazy(() => import('./components/Home'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: (
          // <Suspense>
          <Home />
          // </Suspense>
        ),
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/skills',
        element: <Skills />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
