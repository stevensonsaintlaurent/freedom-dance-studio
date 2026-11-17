import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { plans } from "../data/plans";

const categories = [
  { id: "all", label: "All Plans" },
  { id: "group", label: "Group Classes" },
  { id: "private", label: "Individual Private Lessons" },
  { id: "couples", label: "Couples Private Lessons" },
];
export default function Pricing() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPlans = useMemo(() => {
    if (activeCategory === "all") return plans;

    return plans.filter((plan) => plan.category === activeCategory);
  }, [activeCategory]);

  const handlePricing = (plan) => {
    navigate("/membersForm", {
      state: plan,
    });
  };

  return (
    <section id="pricing" className="bg-base-200 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="badge badge-primary badge-outline mb-4 p-4 font-semibold">
            FREEDOM DANCE STUDIO
          </span>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Find Your Perfect
            <span className="text-primary"> Dance Plan</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base-content/70">
            From your first dance steps to personalized private coaching, we
            have a program for you. Explore group classes, private lessons, and
            exclusive couples experiences.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`btn rounded-full px-6 ${
                activeCategory === category.id
                  ? "btn-primary"
                  : "btn-outline border-base-300 bg-base-100"
              }`}
              aria-pressed={activeCategory === category.id}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        {filteredPlans.length > 0 ? (
          <div className="grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPlans.map((plan) => (
              <article
                key={plan.id}
                className={`card relative h-full border bg-base-100 shadow-lg
                  transition-all duration-300
                  hover:-translate-y-2 hover:shadow-2xl
                  ${
                    plan.special
                      ? "border-2 border-warning"
                      : plan.popular
                        ? "border-2 border-primary"
                        : "border-base-300"
                  }`}
              >
                {/* Badge */}
                {plan.special && (
                  <div className="absolute -top-3 right-4 z-10">
                    <span className="badge badge-warning p-4 text-xs font-bold shadow-md">
                      {plan.badge || "SPECIAL OFFER"}
                    </span>
                  </div>
                )}

                {plan.popular && !plan.special && (
                  <div className="absolute -top-3 right-4 z-10">
                    <span className="badge badge-primary p-4 text-xs font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="card-body flex flex-col">
                  {/* Plan Category */}
                  <div className="mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      {plan.category === "group"
                        ? "Group Classes"
                        : plan.category === "private"
                          ? "Private Coaching"
                          : "Couples Experience"}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="card-title text-2xl font-bold">{plan.name}</h3>

                  {/* Description */}
                  <p className="mt-2 min-h-16 text-sm leading-relaxed text-base-content/70">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="my-5 border-b border-base-300 pb-6">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-4xl font-black sm:text-5xl">
                        {plan.price}
                      </span>

                      <span className="text-sm text-base-content/60">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="mb-8 flex-1 space-y-3">
                    {plan.features.map((feature, index) => (
                      <li
                        key={`${plan.id}-${index}`}
                        className="flex items-start gap-3 text-sm"
                      >
                        <span
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/10 text-success"
                          aria-hidden="true"
                        >
                          ✓
                        </span>

                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Booking Button */}
                  <div className="card-actions mt-auto">
                    <button
                      type="button"
                      onClick={() => handlePricing(plan)}
                      className={`btn w-full ${
                        plan.special
                          ? "btn-warning"
                          : plan.popular
                            ? "btn-primary"
                            : "btn-outline btn-primary"
                      }`}
                    >
                      {plan.button || "Get Started"}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <h3 className="text-xl font-semibold">No plans available</h3>
            <p className="mt-2 text-base-content/60">
              Please select another category.
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold">
            Need Something More Personalized?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-base-content/70">
            Planning a wedding, special event, or private group session? Freedom
            Dance Studio offers customized dance experiences.
          </p>

          <button
            type="button"
            onClick={() => navigate("/contact")}
            className="btn btn-outline btn-primary mt-6"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
