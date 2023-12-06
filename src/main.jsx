import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Root from './routes/root';
// import ErrorPage from './error-page';
// import App from './App.jsx';
// import './index.css';

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Root />,
//         errorElement: <ErrorPage />,
//     },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <RouterProvider router={router} />
//     </React.StrictMode>
// );
