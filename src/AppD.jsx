import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Landing } from "./pages";

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
    ],
  },
]);

const AppD = () => {
  return <RouterProvider router={router} />;
};

export default AppD;
