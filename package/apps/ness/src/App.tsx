import { RouterProvider, createBrowserRouter } from 'react-router';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Layout from './components/Layout';
import './App.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'about',
                element: <AboutPage />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
