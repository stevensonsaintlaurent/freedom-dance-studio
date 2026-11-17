import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const plans = [
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
      "day pass or group of 8 classes  ",
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
      " free ladies styling",
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

  {
    id: 7,
    name: "From Zero to Hero — Couples",
    price: "$650",
    period: "/3 months",
    description:
      "Start from zero and learn to dance together! No experience required. Build confidence, connection, and partner dancing skills.",
    features: [
      "3-Month Couples Dance Program",
      "No Experience Needed",
      "Unlimited Group Classes",
      "Perfect for Complete Beginners",
      "Step-by-Step Dance Training",
      "Lead & Follow Techniques",
      "Confidence & Partner Connection",
      "Personalized Progress Tracking",
    ],
    button: "Start Our Dance Journey",
    popular: false,
    special: true,
    badge: "COUPLES SPECIAL",
  },
  {
    id: 8,
    name: "Thanksgiving & Christmas Special",
    price: "$150",
    period: "/month",
    description:
      "Celebrate the holidays with unlimited dancing and personalized private lessons!",
    features: [
      "Unlimited Group Classes",
      "1 Hour Private Lesson Every Week",
      "Participating Available Instructor",
      "All Dance Levels Welcome",
      "Salsa, Bachata, Kizomba & More",
      "Perfect Holiday Gift",
    ],
    button: "Claim Holiday Special",
    popular: false,
    special: true,
    badge: "HOLIDAY SPECIAL",
  },
];

export default function Pricing() {
  const navigate = useNavigate();

  const handlePricing = (id) => {
    const findPrices = plans.find((plan) => plan.id === id);
    navigate("/membersForm", { state: findPrices });
  };
  return (
    <section id="pricing" className="bg-base-200 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-extrabold">Pricing</h2>

          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
            Whether you're just getting started or ready to dance every week,
            there's a plan for you.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`card relative bg-base-100 shadow-xl border
      transition-all duration-300
      hover:-translate-y-2 hover:shadow-2xl
      ${
        plan.special
          ? "border-warning border-2"
          : plan.popular
            ? "border-primary border-2"
            : "border-base-300"
      }`}
            >
              {plan.special && (
                <div className="absolute -top-3 right-4 z-10">
                  <span className="badge badge-warning font-bold p-4 shadow-md">
                    {plan.badge}
                  </span>
                </div>
              )}

              {plan.popular && !plan.special && (
                <div className="absolute -top-3 right-4 z-10">
                  <span className="badge badge-primary font-bold p-4">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="card-body">
                <h3 className="card-title text-2xl font-bold">{plan.name}</h3>

                <p className="text-base-content/70">{plan.description}</p>

                <div className="py-6">
                  <span className="text-5xl font-black">{plan.price}</span>

                  <span className="text-base-content/60 ml-1">
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="text-success font-bold">✓</span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="card-actions mt-8">
                  <button
                    type="button"
                    className={`btn w-full ${
                      plan.special
                        ? "btn-warning"
                        : plan.popular
                          ? "btn-primary"
                          : "btn-outline btn-primary"
                    }`}
                    onClick={() => handlePricing(plan.id)}
                  >
                    {plan.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-base-content/60">
          Need a custom package for weddings, events, or private groups? Contact
          us for personalized pricing.
        </div>
      </div>
    </section>
  );
}
