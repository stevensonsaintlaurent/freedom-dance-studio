import { useNavigate } from "react-router-dom";
import { specialOffers } from "../data/specialOffers";

const standardPlans = [
  {
    id: 0,
    name: "Drop-In",
    price: "$15",
    period: "/class",
    description: "Perfect for trying a class.",
    features: ["1 Group Class", "Professional Instructor", "No Commitment"],
    button: "Book Class",
    popular: false,
  },
  {
    id: 1,
    name: "Monthly",
    price: "$49",
    period: "/month",
    description: "Our membership.",
    features: ["1 class/week", "4 classes/month", "Free ladies styling"],
    button: "Get Started",
    popular: false,
  },
  {
    id: 2,
    name: "Monthly",
    price: "$69",
    period: "/month",
    description: "Our popular membership.",
    features: [
      "Day pass or group of 8 classes",
      "All the classes that day",
      "Free ladies styling",
    ],
    button: "Get Started",
    popular: true,
  },
  {
    id: 3,
    name: "Monthly",
    price: "$99",
    period: "/month",
    description: "Our most popular membership.",
    features: [
      "Unlimited Group Classes",
      "Social Dance Nights",
      "Free ladies styling",
    ],
    button: "Get Started",
    popular: false,
  },
  {
    id: 5,
    name: "Private Lessons",
    price: "$85",
    period: "/session",
    description: "One-on-one personalized coaching.",
    features: [
      "Private Instructor",
      "Customized Training",
      "Flexible Schedule",
      "Progress Tracking",
    ],
    button: "Schedule Now",
    popular: false,
  },
  {
    id: 6,
    name: "Couples Private Lessons",
    price: "$125",
    period: "/hour",
    description: "Personalized dance lessons for two people.",
    features: [
      "Private Instructor",
      "Designed for Couples",
      "Customized Training",
      "Lead & Follow Techniques",
      "Flexible Schedule",
      "Progress Tracking",
    ],
    button: "Book Couples Lesson",
    popular: false,
  },
];

const plans = [...specialOffers, ...standardPlans];

export default function Pricing() {
  const navigate = useNavigate();
  const handlePricing = (plan) =>
    navigate("/membersForm", {
      state: plan.special ? { ...plan, bookingType: "special-package" } : plan,
    });

  return (
    <section id="pricing" className="bg-base-200 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <h2 className="text-5xl font-extrabold">Pricing</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base-content/70">
            Whether you're just getting started or ready to dance every week,
            there's a plan for you.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`card relative border bg-base-100 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.special
                  ? "border-2 border-warning"
                  : plan.popular
                    ? "border-2 border-primary"
                    : "border-base-300"
              }`}
            >
              {(plan.special || plan.popular) && (
                <span
                  className={`badge badge-lg absolute right-4 top-4 ${plan.special ? "badge-warning" : "badge-primary"}`}
                >
                  {plan.special ? plan.badge : "MOST POPULAR"}
                </span>
              )}
              <div className="card-body pt-14">
                <h3 className="card-title text-2xl">{plan.name}</h3>
                <p className="text-base-content/70">{plan.description}</p>
                <div className="py-6">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="ml-1 text-base-content/60">
                    {plan.period}
                  </span>
                </div>
                <ul className="flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 text-success">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="card-actions mt-8">
                  <button
                    type="button"
                    className={`btn w-full ${plan.special ? "btn-warning" : plan.popular ? "btn-primary" : "btn-outline btn-primary"}`}
                    onClick={() => handlePricing(plan)}
                  >
                    {plan.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-base-content/60">
          Need a custom package for weddings, events, or private groups? Contact
          us for personalized pricing.
        </p>
      </div>
    </section>
  );
}
