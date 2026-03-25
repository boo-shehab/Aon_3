import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import MainRoute from './routes/MainRoute';

function App() {

  const router = createBrowserRouter( [
    {
      path: "/",
      element: <MainRoute />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/about',
          element: <AboutPage />,
        },
        {
          path: '*',
          element: <div>page not found</div>
        }
      ]
    },
  ]
);

  return (
  <RouterProvider router={router} >
  </RouterProvider>
  )
}

export default App
