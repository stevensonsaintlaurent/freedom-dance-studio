import { Link, useRouteError } from "react-router-dom";
import { ArrowLeft, Home, Music2, Sparkles } from "lucide-react";

const Error = () => {
  const error = useRouteError();

  const is404 = error?.status === 404;

  return (
    <main className="min-h-screen bg-base-100 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-3xl text-center">
        {/* Decorative Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />

            <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 border border-primary/20">
              <Music2 className="w-10 h-10 text-primary" />
            </div>

            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            </div>
          </div>
        </div>

        {/* Error Number */}
        <p className="text-8xl md:text-9xl font-black tracking-tight text-primary leading-none">
          {is404 ? "404" : "Oops"}
        </p>

        {/* Heading */}
        <h1 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight">
          {is404 ? "Looks Like You Took a Wrong Step" : "Something Went Wrong"}
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-base-content/60 leading-relaxed">
          {is404
            ? "The page you're looking for doesn't seem to be here. Maybe it took a different dance step. Let's get you back to the Freedom Dance Studio."
            : "Something unexpected happened while loading this page. Don't worry — let's get you back to the studio."}
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/"
            className="btn btn-primary btn-lg gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn btn-outline btn-lg gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Studio Message */}
        <div className="mt-16 pt-8 border-t border-base-content/10">
          <p className="text-sm uppercase tracking-[0.25em] text-base-content/40">
            Freedom Dance Studio
          </p>

          <p className="mt-3 text-sm text-base-content/50">
            Support • Love • Respect • Growth
          </p>
        </div>
      </div>
    </main>
  );
};

export default Error;
