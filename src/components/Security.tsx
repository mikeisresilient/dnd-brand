import { motion } from "framer-motion";
import {
  Check,
  Eye,
  KeyRound,
  Lock,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const securityItems = [
  {
    icon: Lock,
    title: "Encrypted conversations",
    description:
      "Your meeting data is protected while it's moving between participants.",
  },
  {
    icon: UserCheck,
    title: "Control who joins",
    description:
      "Manage participants and keep private meetings limited to the right people.",
  },
  {
    icon: Eye,
    title: "Privacy by default",
    description:
      "Your conversations stay focused on your team, not advertising or unnecessary tracking.",
  },
];

function Security() {
  return (
    <section
      id="security"
      className="relative overflow-hidden border-t border-white/[0.06] py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Shield visual */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative flex items-center justify-center"
          >
            {/* Outer rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-72 w-72 rounded-full border border-dashed border-blue-400/[0.08] sm:h-96 sm:w-96"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-60 w-60 rounded-full border border-dashed border-white/[0.05] sm:h-80 sm:w-80"
            />

            {/* Glow */}
            <div className="absolute h-56 w-56 rounded-full bg-blue-500/[0.08] blur-3xl sm:h-72 sm:w-72" />

            {/* Shield */}
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex h-44 w-44 items-center justify-center rounded-[40px] border border-blue-400/15 bg-[#0b1728] shadow-2xl shadow-blue-500/10 sm:h-56 sm:w-56"
            >
              {/* Inner glow */}
              <div className="absolute inset-5 rounded-[32px] bg-blue-500/[0.04]" />

              <ShieldCheck
                size={82}
                strokeWidth={1.2}
                className="relative text-blue-400 sm:h-24 sm:w-24"
              />

              {/* Status */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.45,
                }}
                className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-xl border border-green-400/20 bg-[#0b1728] text-green-400 shadow-xl"
              >
                <Check size={17} />
              </motion.div>
            </motion.div>

            {/* Floating encryption card */}
            <motion.div
              initial={{ opacity: 0, x: -15, y: 15 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.6,
              }}
              className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-2.5 rounded-xl border border-white/10 bg-[#0b1728]/95 px-3 py-2 shadow-2xl backdrop-blur-xl sm:bottom-3 sm:px-4 sm:py-2.5"
            >
              <Lock size={12} className="text-blue-400" />

              <span className="whitespace-nowrap text-[9px] font-medium text-slate-400 sm:text-[10px]">
                Connection protected
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            </motion.div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="max-w-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              Security & privacy
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              Your conversations
              <span className="block">stay yours.</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Great conversations need a safe place to happen. DND BRAND is
              designed around privacy, access control, and protecting the
              conversations that matter to your team.
            </p>

            {/* Security items */}
            <div className="mt-9 space-y-6">
              {securityItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + index * 0.1,
                    }}
                    className="group flex gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] text-slate-400 transition-colors duration-300 group-hover:border-blue-400/15 group-hover:bg-blue-400/[0.06] group-hover:text-blue-400">
                      <Icon size={17} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Security note */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.55,
              }}
              className="mt-9 flex items-center gap-3 rounded-2xl border border-blue-400/10 bg-blue-400/[0.04] px-4 py-3.5"
            >
              <KeyRound size={16} className="shrink-0 text-blue-400" />

              <p className="text-xs leading-5 text-slate-400">
                Security isn't an add-on. It's part of how DND BRAND is built.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Security;