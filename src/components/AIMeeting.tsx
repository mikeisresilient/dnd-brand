import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Check,
  Circle,
  Clock3,
  FileText,
  Sparkles,
  UserRound,
} from "lucide-react";

const actionItems = [
  {
    person: "Alex",
    task: "Finalize the onboarding flow",
    color: "bg-blue-500",
    initials: "AM",
  },
  {
    person: "Jordan",
    task: "Share updated product metrics",
    color: "bg-indigo-500",
    initials: "JL",
  },
  {
    person: "Maya",
    task: "Schedule customer interviews",
    color: "bg-violet-500",
    initials: "MC",
  },
];

function AIMeeting() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] py-24 sm:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-10%] top-1/3 h-[500px] w-[500px] rounded-full bg-blue-500/[0.045] blur-[130px]" />

      <div className="pointer-events-none absolute right-[-10%] bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-500/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* AI Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative order-2 lg:order-1"
          >
            <div className="pointer-events-none absolute -inset-8 rounded-[40px] bg-blue-500/[0.04] blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#091423] p-2 shadow-2xl shadow-black/40">
              {/* Dashboard header */}
              <div className="flex items-center justify-between px-3 py-3 sm:px-5 sm:py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Bot size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      AI Meeting Assistant
                    </p>
                    <p className="mt-0.5 text-[9px] text-slate-600">
                      Product strategy · 42 min
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-green-400/10 bg-green-400/[0.05] px-2.5 py-1">
                  <motion.span
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-green-400"
                  />

                  <span className="text-[8px] font-medium text-green-400">
                    Ready
                  </span>
                </div>
              </div>

              {/* Summary */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
                className="mx-2 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 sm:mx-3 sm:p-5"
              >
                <div className="flex items-center gap-2">
                  <Sparkles size={13} className="text-blue-400" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-blue-400">
                    Meeting summary
                  </span>
                </div>

                <div className="mt-4 space-y-2.5">
                  <div className="h-2 w-full rounded-full bg-white/[0.07]" />
                  <div className="h-2 w-[92%] rounded-full bg-white/[0.07]" />
                  <div className="h-2 w-[78%] rounded-full bg-white/[0.07]" />
                </div>

                <p className="mt-4 text-[10px] leading-5 text-slate-500 sm:text-xs sm:leading-6">
                  The team aligned on the Q4 product roadmap, agreed on the
                  onboarding priorities, and identified the next steps for
                  customer research.
                </p>
              </motion.div>

              {/* Action items */}
              <div className="px-2 pb-2 pt-3 sm:px-3 sm:pt-4">
                <div className="flex items-center justify-between px-2">
                  <div className="flex items-center gap-2">
                    <Check size={13} className="text-blue-400" />

                    <span className="text-[10px] font-semibold text-white">
                      Action items
                    </span>
                  </div>

                  <span className="text-[8px] text-slate-600">
                    3 tasks detected
                  </span>
                </div>

                <div className="mt-3 space-y-2">
                  {actionItems.map((item, index) => (
                    <motion.div
                      key={item.task}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: 0.35 + index * 0.1,
                      }}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.015] px-3 py-3"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] text-slate-500">
                        <Circle size={12} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[9px] font-medium text-slate-300 sm:text-[10px]">
                          {item.task}
                        </p>

                        <div className="mt-1 flex items-center gap-1.5">
                          <UserRound size={8} className="text-slate-600" />

                          <span className="text-[8px] text-slate-600">
                            Assigned to {item.person}
                          </span>
                        </div>
                      </div>

                      <div
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${item.color} text-[7px] font-semibold text-white`}
                      >
                        {item.initials}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-2 flex items-center justify-between border-t border-white/[0.06] px-3 py-3 sm:px-5">
                <div className="flex items-center gap-2">
                  <FileText size={11} className="text-slate-600" />

                  <span className="text-[8px] text-slate-600">
                    Notes automatically saved
                  </span>
                </div>

                <span className="text-[8px] text-blue-400">
                  View full notes
                </span>
              </div>
            </div>

            {/* Floating AI card */}
            <motion.div
              initial={{ opacity: 0, y: 15, x: 15 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.55,
                delay: 0.65,
              }}
              className="absolute -bottom-5 -right-3 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#0b1728]/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:flex lg:-right-7"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-400/10 text-blue-400">
                <Sparkles size={16} />
              </div>

              <div>
                <p className="text-[10px] font-semibold text-white">
                  3 action items found
                </p>

                <p className="mt-0.5 text-[8px] text-slate-600">
                  Ready to review
                </p>
              </div>
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
            className="order-1 max-w-xl lg:order-2"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              Intelligence built in
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              Your meetings,
              <span className="block">made smarter.</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Stop losing important details the moment the meeting ends. DND
              BRAND's AI assistant turns conversations into useful summaries,
              decisions, and action items automatically.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/10 bg-blue-400/[0.06] text-blue-400">
                  <Sparkles size={17} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Automatic summaries
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Get the important points without having to take notes while
                    you talk.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/10 bg-blue-400/[0.06] text-blue-400">
                  <Check size={17} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Action items that don't get lost
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Turn decisions into clear tasks and assign them before
                    everyone leaves.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/10 bg-blue-400/[0.06] text-blue-400">
                  <Clock3 size={17} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    More time back
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Spend less time documenting meetings and more time acting
                    on them.
                  </p>
                </div>
              </div>
            </div>

            <motion.a
              href="#pricing"
              whileHover={{ x: 3 }}
              className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Explore AI meetings
              <ArrowRight
                size={16}
                className="text-blue-400 transition-transform duration-200 group-hover:translate-x-1"
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AIMeeting;