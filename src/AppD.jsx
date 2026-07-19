import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Landing, About, Contact, Classes } from "./pages";
import {
  AdultClasses,
  Booking,
  Galeries,
  KidsClasses,
  MemberShip,
  MusicClasses,
  Schedule,
  Teachers,
} from "./components";

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
        path: "classes",
        element: <Classes />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
      {
        path: "teachers",
        element: <Teachers />,
      },
      {
        path: "galeries",
        element: <Galeries />,
      },
      {
        path: "membership",
        element: <MemberShip />,
      },
      {
        path: "kids",
        element: <KidsClasses />,
      },
      {
        path: "adult",
        element: <AdultClasses />,
      },
      {
        path: "music",
        element: <MusicClasses />,
      },
      {
        path: "book",
        element: <Booking />,
      },
    ],
  },
]);

const AppD = () => {
  return <RouterProvider router={router} />;
};

export default AppD;
