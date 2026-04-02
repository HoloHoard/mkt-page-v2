import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { FAQ } from './pages/FAQ';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'features', Component: Features },
      { path: 'faq', Component: FAQ },
    ],
  },
]);
