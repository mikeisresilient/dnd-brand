import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Mic,
  MoreHorizontal,
  MonitorUp,
  PhoneOff,
  Video,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const meetingMembers = [
  {
    name: "Jordan Lee",
    initials: "JL",
    position: "top-4 left-4",
  },
  {
    name: "Alex Morgan",
    initials: "AM",
    position: "top-4 right-4",
  },
  {
    name: "Sam Wilson",
    initials: "SW",
    position: "bottom-4 left-4",
  },
  {
    name: "Mia Chen",
    initials: "MC",
    position: "bottom-4 right-4",
  },
];

function Hero() {
  const handleJoinMeeting = () => {
    const meetingId = window.prompt("Enter the meeting ID");

    if (meetingId?.trim()) {
      window.location.href = `/meeting?id=${encodeURIComponent(
        meetingId.trim(),
      )}`;
    }
  };

  return (
    <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-44">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[120px]" />

        <div className="absolute left-[10%] top-[35%] h-40 w-40 rounded-full bg-blue-600/[0.06] blur-[80px]" />

        <div className="absolute right-[5%] top-[25%] h-52 w-52 rounded-full bg-purple-500/[0.05] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Hero Copy */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="mb-6 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-400/[0.06] px-3.5 py-1.5 text-xs font-medium text-blue-300"
            >
              The future of virtual meetings
            </motion.div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Meet without
              <span className="block bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                the friction.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              DND BRAND brings crystal-clear video, effortless collaboration,
              and intelligent meeting tools together in one beautifully simple
              workspace.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {/* Start a meeting */}
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/meeting"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-500/20 transition-colors hover:bg-blue-400 sm:w-auto"
                >
                  Start a meeting

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>

              {/* Join a meeting */}
              <motion.button
                type="button"
                onClick={handleJoinMeeting}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/[0.07]"
              >
                Join a meeting
              </motion.button>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {["No downloads", "HD video", "Secure by design"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs text-slate-500"
                  >
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                      <Check size={10} strokeWidth={3} />
                    </span>

                    {item}
                  </div>
                ),
              )}
            </div>
          </motion.div>

          {/* Meeting Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-2xl"
          >
            <div className="pointer-events-none absolute -inset-8 rounded-[40px] bg-blue-500/[0.08] blur-3xl" />

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a1424] p-1.5 shadow-2xl shadow-black/40 sm:p-2"
            >
              {/* Top bar */}
              <div className="flex h-9 items-center justify-between px-2.5 sm:h-10 sm:px-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-400/70 sm:h-2.5 sm:w-2.5" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/70 sm:h-2.5 sm:w-2.5" />
                  <span className="h-2 w-2 rounded-full bg-green-400/70 sm:h-2.5 sm:w-2.5" />
                </div>

                <div className="text-[9px] font-medium tracking-wide text-slate-500 sm:text-[10px]">
                  DND MEETING
                </div>

                <MoreHorizontal
                  size={16}
                  className="text-slate-600 sm:h-[17px] sm:w-[17px]"
                />
              </div>

              {/* Main meeting area */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#111c2c] sm:aspect-[16/10]">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-700/30 via-[#18263a] to-[#0c1728]">
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
                      className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-blue-500 to-indigo-600 text-xl font-semibold text-white shadow-2xl shadow-blue-500/20 sm:h-28 sm:w-28 sm:text-2xl"
                    >
                      AM
                    </motion.div>

                    <div className="mt-3 rounded-lg border border-white/10 bg-black/25 px-2.5 py-1.5 text-[9px] font-medium text-white backdrop-blur-md sm:mt-4 sm:px-3 sm:text-xs">
                      Alex Morgan
                    </div>
                  </div>
                </div>

                {/* Desktop participant cards */}
                {meetingMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.55 + index * 0.08,
                    }}
                    className={`absolute ${member.position} hidden rounded-xl border border-white/10 bg-black/25 p-1.5 shadow-lg backdrop-blur-md sm:block`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-slate-600 to-slate-800 text-[9px] font-semibold text-white">
                      {member.initials}
                    </div>
                  </motion.div>
                ))}

                {/* Mobile participant strip */}
                <div className="absolute bottom-3 left-3 right-3 grid grid-cols-4 gap-1.5 sm:hidden">
                  {meetingMembers.map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: 0.45 + index * 0.06,
                      }}
                      className={`flex h-10 items-center justify-center rounded-lg border ${
                        index === 0
                          ? "border-blue-400/30 bg-blue-500/[0.08]"
                          : "border-white/10 bg-black/20"
                      } backdrop-blur-md`}
                    >
                      <span className="text-[8px] font-semibold text-slate-300">
                        {member.initials}
                      </span>
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
                  <Mic size={13} className="sm:hidden" />
                  <Mic size={15} className="hidden sm:block" />
                </button>

                <button
                  type="button"
                  aria-label="Turn off camera"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 transition hover:bg-white/[0.08] hover:text-white sm:h-9 sm:w-9 sm:rounded-xl"
                >
                  <Video size={13} className="sm:hidden" />
                  <Video size={15} className="hidden sm:block" />
                </button>

                <button
                  type="button"
                  aria-label="Share screen"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 transition hover:bg-white/[0.08] hover:text-white sm:h-9 sm:w-9 sm:rounded-xl"
                >
                  <MonitorUp size={13} className="sm:hidden" />
                  <MonitorUp size={15} className="hidden sm:block" />
                </button>

                <button
                  type="button"
                  aria-label="More options"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 transition hover:bg-white/[0.08] hover:text-white sm:h-9 sm:w-9 sm:rounded-xl"
                >
                  <MoreHorizontal size={13} className="sm:hidden" />
                  <MoreHorizontal
                    size={15}
                    className="hidden sm:block"
                  />
                </button>

                <button
                  type="button"
                  aria-label="Leave meeting"
                  className="flex h-8 w-10 items-center justify-center rounded-lg bg-red-500/90 text-white transition hover:bg-red-500 sm:h-9 sm:w-12 sm:rounded-xl"
                >
                  <PhoneOff size={13} className="sm:hidden" />
                  <PhoneOff
                    size={15}
                    className="hidden sm:block"
                  />
                </button>
              </div>
            </motion.div>

            {/* Floating status card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.8,
                ease: "easeOut",
              }}
              className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#0b1728]/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:flex lg:-left-8"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
                <Check size={17} />
              </div>

              <div>
                <p className="text-xs font-semibold text-white">
                  Meeting is ready
                </p>

                <p className="mt-0.5 text-[10px] text-slate-500">
                  Everyone can join now
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="h-20 sm:h-32 lg:h-40" />
      </div>
    </section>
  );
}

export default Hero;