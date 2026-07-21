import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import {
  HomeLayout,
  Landing,
  About,
  Contact,
  Classes,
  StudioRental,
} from "./pages";
import {
  AdultClasses,
  Booking,
  Error,
  Galeries,
  KidsClasses,
  MemberShip,
  MembershipForm,
  MusicClasses,
  Schedule,
  Teachers,
} from "./components";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
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
      {
        path: "membersForm",
        element: <MembershipForm />,
      },
      {
        path: "rental",
        element: <StudioRental />,
      },
    ],
  },
]);

const AppD = () => {
  const scroolUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scroolUp();
  });
  return <RouterProvider router={router} />;
};

export default AppD;
