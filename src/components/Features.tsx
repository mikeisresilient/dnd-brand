import { motion } from "framer-motion";
import {
  MessageSquare,
  Mic,
  MonitorUp,
  MoreHorizontal,
  NotebookPen,
  PhoneOff,
  Video,
} from "lucide-react";

const features = [
  {
    icon: Video,
    title: "HD video & audio",
    description:
      "Crystal-clear conversations that feel natural, wherever your team is.",
  },
  {
    icon: MonitorUp,
    title: "Share your screen",
    description:
      "Present ideas, walk through work, and collaborate without friction.",
  },
  {
    icon: MessageSquare,
    title: "Built-in chat",
    description:
      "Keep conversations, links, and important context right beside the call.",
  },
  {
    icon: NotebookPen,
    title: "AI meeting notes",
    description:
      "Automatically capture summaries, decisions, and action items.",
  },
];

const participants = [
  { name: "Jordan", initials: "JL" },
  { name: "Maya", initials: "MC" },
  { name: "Sam", initials: "SW" },
  { name: "Alex", initials: "AM" },
];

function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.045] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
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
            Built for better meetings
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
            Everything you need to make every conversation count.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            A focused meeting experience with the tools your team actually
            needs — nothing getting in the way.
          </p>
        </motion.div>

        {/* Meeting dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="relative mt-14"
        >
          <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-blue-500/[0.045] blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#091423] p-1.5 shadow-2xl shadow-black/30 sm:p-2">
            {/* Dashboard top bar */}
            <div className="flex h-11 items-center justify-between px-2.5 sm:h-12 sm:px-5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500 text-[10px] font-bold text-white">
                  D
                </div>

                <span className="hidden text-xs font-medium text-slate-400 sm:block">
                  Product sync
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden text-[10px] text-slate-600 sm:block">
                  42 min
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-green-400 sm:h-2 sm:w-2" />

                <span className="text-[9px] font-medium text-green-400 sm:text-[10px]">
                  Live
                </span>
              </div>
            </div>

            {/* Meeting area */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#101c2d] sm:aspect-[16/8.5]">
              {/* Main speaker */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-700/20 via-[#17263a] to-[#0b1626]">
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(59,130,246,0)",
                        "0 0 0 8px rgba(59,130,246,0.05)",
                        "0 0 0 0 rgba(59,130,246,0)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-blue-500 to-indigo-600 text-xl font-semibold text-white shadow-2xl shadow-blue-500/20 sm:h-32 sm:w-32 sm:text-3xl"
                  >
                    AM
                  </motion.div>

                  <div className="mt-3 flex items-center gap-2 rounded-lg border border-white/10 bg-black/20 px-2.5 py-1.5 backdrop-blur-md sm:mt-4 sm:px-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400" />

                    <span className="text-[9px] text-white sm:text-xs">
                      Alex Morgan
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile participant strip */}
              <div className="absolute bottom-3 left-3 right-3 grid grid-cols-4 gap-1.5 sm:hidden">
                {participants.map((participant, index) => (
                  <motion.div
                    key={participant.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.07,
                    }}
                    className={`flex h-11 items-center justify-center rounded-lg border ${
                      index === 0
                        ? "border-blue-400/30 bg-blue-500/[0.08]"
                        : "border-white/10 bg-black/20"
                    } backdrop-blur-md`}
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-700 text-[7px] font-semibold text-slate-300">
                      {participant.initials}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Desktop participant strip */}
              <div className="absolute bottom-4 left-4 right-4 hidden gap-3 sm:flex">
                {participants.map((participant, index) => (
                  <motion.div
                    key={participant.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.08,
                    }}
                    className={`relative flex h-20 flex-1 items-end overflow-hidden rounded-xl border ${
                      index === 0
                        ? "border-blue-400/40"
                        : "border-white/10"
                    } bg-slate-800/80`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-600/20 to-slate-900/40" />

                    <div className="relative flex w-full items-center gap-2.5 p-2.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-slate-500 to-slate-700 text-[8px] font-semibold text-white">
                        {participant.initials}
                      </div>

                      <span className="truncate text-[10px] text-slate-300">
                        {participant.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Speaking indicator */}
              <div className="absolute left-1/2 top-3 -translate-x-1/2 rounded-md border border-blue-400/20 bg-blue-500/10 px-2 py-1 text-[8px] font-medium text-blue-300 backdrop-blur-md sm:bottom-4 sm:top-auto sm:px-3 sm:py-1.5 sm:text-[10px]">
                Sam is speaking
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-1.5 px-1.5 py-3 sm:gap-3 sm:px-2 sm:py-4">
              <button
                type="button"
                aria-label="Mute microphone"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 transition hover:bg-white/[0.08] hover:text-white sm:h-9 sm:w-9 sm:rounded-xl"
              >
                <Mic size={13} />
              </button>

              <button
                type="button"
                aria-label="Turn off camera"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 transition hover:bg-white/[0.08] hover:text-white sm:h-9 sm:w-9 sm:rounded-xl"
              >
                <Video size={13} />
              </button>

              <button
                type="button"
                aria-label="Share screen"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 transition hover:bg-white/[0.08] hover:text-white sm:h-9 sm:w-9 sm:rounded-xl"
              >
                <MonitorUp size={13} />
              </button>

              <button
                type="button"
                aria-label="Open chat"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 transition hover:bg-white/[0.08] hover:text-white sm:h-9 sm:w-9 sm:rounded-xl"
              >
                <MessageSquare size={13} />
              </button>

              <button
                type="button"
                aria-label="More options"
                className="hidden h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition hover:bg-white/[0.08] hover:text-white sm:flex"
              >
                <MoreHorizontal size={15} />
              </button>

              <button
                type="button"
                aria-label="Leave meeting"
                className="flex h-8 w-10 items-center justify-center rounded-lg bg-red-500/90 text-white transition hover:bg-red-500 sm:h-9 sm:w-12 sm:rounded-xl"
              >
                <PhoneOff size={13} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Feature cards */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/[0.14] hover:bg-white/[0.04]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/10 bg-blue-400/[0.07] text-blue-400 transition-colors duration-300 group-hover:bg-blue-400/10">
                  <Icon size={18} />
                </div>

                <h3 className="mt-5 text-sm font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-12 grid overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] sm:grid-cols-3">
          {[
            {
              value: "4K",
              label: "Video quality",
            },
            {
              value: "99.9%",
              label: "Platform uptime",
            },
            {
              value: "1 click",
              label: "To join a meeting",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className={`px-6 py-7 text-center ${
                index !== 2
                  ? "border-b border-white/[0.08] sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >
              <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {stat.value}
              </p>

              <p className="mt-1 text-xs text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;