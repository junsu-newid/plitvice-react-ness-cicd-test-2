import { RouterProvider, createBrowserRouter } from 'react-router';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
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
                path: 'dashboard',
                element: <DashboardPage />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
