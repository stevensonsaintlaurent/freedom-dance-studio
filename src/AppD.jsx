import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Landing, About, Schedule, Contact } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <h2>there is an error</h2>,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const AppD = () => {
  return <RouterProvider router={router} />;
};

export default AppD;
