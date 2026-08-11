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
        lazy: async () => {
          const { default: About } = await import("./pages/About");
          return { Component: About };
        },
      },

      {
        path: "classes",
        lazy: async () => {
          const { default: Classes } = await import("./pages/Classes");
          return { Component: Classes };
        },
      },

      {
        path: "contact",
        lazy: async () => {
          const { default: Contact } = await import("./pages/Contact");
          return { Component: Contact };
        },
      },

      {
        path: "schedule",
        lazy: async () => {
          const { default: Schedule } = await import("./components/Schedule");

          return { Component: Schedule };
        },
      },

      {
        path: "teachers",
        lazy: async () => {
          const { default: Teachers } = await import("./components/Teachers");

          return { Component: Teachers };
        },
      },

      {
        path: "gallery",
        lazy: async () => {
          const { default: Galeries } = await import("./components/Galeries");

          return { Component: Galeries };
        },
      },

      {
        path: "membership",
        lazy: async () => {
          const { default: MemberShip } =
            await import("./components/MemberShip");

          return { Component: MemberShip };
        },
      },

      {
        path: "kids",
        lazy: async () => {
          const { default: KidsClasses } =
            await import("./components/KidsClasses");

          return { Component: KidsClasses };
        },
      },

      {
        path: "adult",
        lazy: async () => {
          const { default: AdultClasses } =
            await import("./components/AdultClasses");

          return { Component: AdultClasses };
        },
      },

      {
        path: "music",
        lazy: async () => {
          const { default: MusicClasses } =
            await import("./components/MusicClasses");

          return { Component: MusicClasses };
        },
      },

      {
        path: "book",
        lazy: async () => {
          const { default: Booking } = await import("./components/Booking");

          return { Component: Booking };
        },
      },

      {
        path: "reviews",
        lazy: async () => {
          const { default: Testimonials } =
            await import("./components/Testimonials");

          return { Component: Testimonials };
        },
      },

      {
        path: "independent",
        lazy: async () => {
          const { default: IndependentClasses } =
            await import("./components/IndependentClasses");

          return { Component: IndependentClasses };
        },
      },
    ],
  },
]);

export default function AppD() {
  return <RouterProvider router={router} />;
}
