import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "For individuals and small conversations.",
    price: "Free",
    period: "",
    features: [
      "Up to 40-minute meetings",
      "HD video and audio",
      "Screen sharing",
      "Built-in chat",
    ],
    button: "Get started",
    featured: false,
  },
  {
    name: "Team",
    description: "For teams that want to work better together.",
    price: "$12",
    period: "/user/month",
    features: [
      "Unlimited meeting time",
      "HD video and audio",
      "Screen sharing",
      "AI meeting notes",
      "Meeting recordings",
      "Advanced collaboration",
    ],
    button: "Start free trial",
    featured: true,
  },
  {
    name: "Business",
    description: "For organizations that need more control.",
    price: "$24",
    period: "/user/month",
    features: [
      "Everything in Team",
      "Advanced security controls",
      "Admin dashboard",
      "Priority support",
      "Team analytics",
      "Custom meeting settings",
    ],
    button: "Contact sales",
    featured: false,
  },
];

function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-t border-white/[0.06] py-24 sm:py-32"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.045] blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 left-[-10%] h-72 w-72 rounded-full bg-indigo-500/[0.04] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
            Simple pricing
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
            Choose the way you work.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Start simple. Upgrade when your team needs more.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: plan.featured ? -6 : -4,
              }}
              className={`relative flex flex-col rounded-3xl border p-6 transition-colors duration-300 sm:p-7 ${
                plan.featured
                  ? "border-blue-400/25 bg-blue-500/[0.055] shadow-2xl shadow-blue-500/[0.08]"
                  : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.14] hover:bg-white/[0.035]"
              }`}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full border border-blue-400/20 bg-[#091423] px-3 py-1 text-[10px] font-semibold text-blue-300 shadow-lg">
                  <Sparkles size={11} />
                  Most popular
                </div>
              )}

              {/* Plan header */}
              <div>
                <h3 className="text-base font-semibold text-white">
                  {plan.name}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mt-7 flex items-end gap-1">
                <span className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  {plan.price}
                </span>

                {plan.period && (
                  <span className="mb-1 text-xs text-slate-600">
                    {plan.period}
                  </span>
                )}
              </div>

              {/* Button */}
              <motion.button
                type="button"
                whileTap={{ scale: 0.98 }}
                className={`mt-7 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                  plan.featured
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400"
                    : "border border-white/10 bg-white/[0.03] text-slate-200 hover:bg-white/[0.07]"
                }`}
              >
                {plan.button}

                {plan.featured && <ArrowRight size={15} />}
              </motion.button>

              {/* Divider */}
              <div className="my-7 h-px bg-white/[0.07]" />

              {/* Features */}
              <ul className="space-y-3.5">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{
                      opacity: 0,
                      x: -8,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: 0.2 + index * 0.08 + featureIndex * 0.04,
                    }}
                    className="flex items-start gap-2.5 text-sm text-slate-400"
                  >
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                      <Check size={10} strokeWidth={3} />
                    </span>

                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="relative mx-auto mt-24 max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/[0.09] via-white/[0.025] to-indigo-500/[0.06] px-6 py-14 text-center shadow-2xl shadow-black/20 sm:px-10 sm:py-16"
        >
          {/* CTA glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-[100px]" />

          <div className="relative">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/[0.07] text-blue-400">
              <Sparkles size={19} />
            </div>

            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
              Your next great conversation starts here.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              Bring your team together, make decisions faster, and leave every
              meeting knowing exactly what happens next.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-500/20 transition-colors hover:bg-blue-400"
              >
                Get started
                <ArrowRight size={16} />
              </motion.button>

              <motion.a
                href="#features"
                whileHover={{ y: -2 }}
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-slate-300 transition-colors hover:bg-white/[0.07] hover:text-white"
              >
                Explore features
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Pricing;