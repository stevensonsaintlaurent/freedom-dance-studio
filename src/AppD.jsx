import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  HomeLayout,
  Landing,
  About,
  Contact,
  Classes,
  StudioRental,
  Events,
} from "./pages";

import {
  AdultClasses,
  Booking,
  Error,
  Galeries,
  InfoContent,
  KidsClasses,
  MemberShip,
  MembershipForm,
  MusicClasses,
  Schedule,
  StudioRentalConfirmation,
  Teachers,
  Testimonials,
  IndependentClasses,
} from "./components";

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
        path: "gallery",
        element: <Galeries />,
      },

      {
        path: "membership",
        element: <MemberShip />,
      },

      {
        path: "membersForm",
        element: <MembershipForm />,
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
        path: "rental",
        element: <StudioRental />,
      },

      {
        path: "rentalStudio",
        element: <StudioRentalConfirmation />,
      },

      {
        path: "info",
        element: <InfoContent />,
      },

      {
        path: "reviews",
        element: <Testimonials />,
      },

      {
        path: "independent",
        element: <IndependentClasses />,
      },

      {
        path: "events",
        element: <Events />,
      },
    ],
  },
]);

export default function AppD() {
  return <RouterProvider router={router} />;
}
