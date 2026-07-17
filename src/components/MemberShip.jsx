const plans = [
  {
    name: "Drop-In",
    price: "$15",
    period: "/class",
    description: "Perfect for trying a class.",
    features: [
      "1 Group Class",
      "Professional Instructor",
      "No Commitment",
      "Free Parking",
    ],
    button: "Book Class",
    popular: false,
  },
  {
    name: "Monthly",
    price: "$99",
    period: "/month",
    description: "Our most popular membership.",
    features: [
      "Unlimited Group Classes",
      "Social Dance Nights",
      "Priority Booking",
      "Member Discounts",
      "Community Events",
    ],
    button: "Get Started",
    popular: true,
  },
  {
    name: "Monthly",
    price: "$99",
    period: "/month",
    description: "Our most popular membership.",
    features: [
      "Unlimited Group Classes",
      "Social Dance Nights",
      "Priority Booking",
      "Member Discounts",
      "Community Events",
    ],
    button: "Get Started",
    popular: true,
  },
  {
    name: "Monthly",
    price: "$99",
    period: "/month",
    description: "Our most popular membership.",
    features: [
      "Unlimited Group Classes",
      "Social Dance Nights",
      "Priority Booking",
      "Member Discounts",
      "Community Events",
    ],
    button: "Get Started",
    popular: true,
  },
  {
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
];

export default function Pricing() {
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
              key={plan.name}
              className={`card bg-base-100 shadow-xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular ? "border-primary scale-105" : "border-base-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute right-5 top-5 badge badge-primary badge-lg">
                  MOST POPULAR
                </div>
              )}

              <div className="card-body">
                <h3 className="card-title text-3xl">{plan.name}</h3>

                <p className="text-base-content/70">{plan.description}</p>

                <div className="py-6">
                  <span className="text-5xl font-black">{plan.price}</span>

                  <span className="text-base-content/60">{plan.period}</span>
                </div>

                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="badge badge-success badge-sm"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="card-actions mt-8">
                  <button
                    className={`btn w-full ${
                      plan.popular ? "btn-primary" : "btn-outline btn-primary"
                    }`}
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
