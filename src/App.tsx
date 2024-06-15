
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './assets/styles/styles.scss';

import Root from "./pages/Root";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/Error";
import Project from "./pages/Project";

const router = createBrowserRouter ([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: 'board',
          element: <Project />
        }
      ]
    }
]);

function App() {

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App;
