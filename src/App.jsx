import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Main pages
import { HomeLayout, Landing, About, Contact, Classes, Events } from "./pages";

// Shared components and pages
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
  StudioRentals,
  PrivacyPolicy,
  TermsConditions,
} from "./components";

// Rental pages
import RentalBooking from "./components/RequestAvailable";
import RentalPrices from "./components/RentalPrices";
import FreedomStudioAgreement from "./components/FreedomStudioAgreement";

// Additional classes
import KarolActingClasses from "./components/KarolActingClasses";

// Event booking pages (lazy loaded)
const BachataWeekenderBooking = lazy(
  () => import("./components/BachataWeekenderBooking"),
);

const FreedomLiveBandBooking = lazy(
  () => import("./components/FreedomLiveBandBooking"),
);

// Loading component
function PageLoader() {
  return (
    <div
      className="flex min-h-[60vh] items-center justify-center bg-base-100"
      role="status"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-spinner loading-lg text-primary" />
        <p className="text-sm font-medium text-base-content/70">
          Loading Freedom Dance Studio...
        </p>
      </div>
    </div>
  );
}

// Lazy page wrapper
function LazyPage({ children }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
}

// Public routes
const mainRoutes = [
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
    path: "reviews",
    element: <Testimonials />,
  },
];

// Dance class routes
const classRoutes = [
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
    path: "independent",
    element: <IndependentClasses />,
  },
  {
    path: "acting",
    element: <KarolActingClasses />,
  },
];

// Membership and booking routes
const bookingRoutes = [
  {
    path: "membership",
    element: <MemberShip />,
  },
  {
    path: "membersForm",
    element: <MembershipForm />,
  },
  {
    path: "book",
    element: <Booking />,
  },
];

// Studio rental routes
const rentalRoutes = [
  {
    path: "pricing",
    element: <RentalPrices />,
  },
  {
    path: "rentalStudio",
    element: <StudioRentalConfirmation />,
  },
  {
    path: "rental",
    element: <StudioRentals />,
  },
  {
    path: "request",
    element: <RentalBooking />,
  },
  {
    path: "confirmation",
    element: <FreedomStudioAgreement />,
  },
];

// Event routes
const eventRoutes = [
  {
    path: "events",
    element: <Events />,
  },
  {
    path: "weekend",
    element: (
      <LazyPage>
        <BachataWeekenderBooking />
      </LazyPage>
    ),
  },
  {
    path: "band",
    element: (
      <LazyPage>
        <FreedomLiveBandBooking />
      </LazyPage>
    ),
  },
];

// Information and legal routes
const informationRoutes = [
  {
    path: "info",
    element: <InfoContent />,
  },
  {
    path: "policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "conditions",
    element: <TermsConditions />,
  },
];

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      ...mainRoutes,
      ...classRoutes,
      ...bookingRoutes,
      ...rentalRoutes,
      ...eventRoutes,
      ...informationRoutes,
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
