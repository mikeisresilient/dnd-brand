import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  FileText,
  MessageCircle,
  Play,
} from "lucide-react";

const collaborationPoints = [
  "Present ideas without leaving the meeting",
  "Keep conversations and files in context",
  "Turn discussions into clear next steps",
];

function Collaboration() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden border-t border-white/[0.06] py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-[-10%] top-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500/[0.05] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="max-w-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
              Collaboration, naturally
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              Show, don't just tell.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Bring your work into the conversation. Present, discuss, share,
              and make decisions without jumping between different tools.
            </p>

            <div className="mt-8 space-y-4">
              {collaborationPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.15 + index * 0.08,
                  }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                    <Check size={12} strokeWidth={3} />
                  </span>

                  <span className="text-sm leading-6 text-slate-300">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#features"
              whileHover={{ x: 3 }}
              className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Explore collaboration
              <ArrowUpRight
                size={16}
                className="text-blue-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>
          </motion.div>

          {/* Product presentation */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-2xl"
          >
            <div className="pointer-events-none absolute -inset-8 rounded-[40px] bg-blue-500/[0.045] blur-3xl" />

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#091423] p-1.5 shadow-2xl shadow-black/40 sm:p-2"
            >
              {/* Browser / workspace bar */}
              <div className="flex h-10 items-center justify-between px-2.5 sm:h-11 sm:px-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-400/60 sm:h-2.5 sm:w-2.5" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/60 sm:h-2.5 sm:w-2.5" />
                  <span className="h-2 w-2 rounded-full bg-green-400/60 sm:h-2.5 sm:w-2.5" />
                </div>

                {/* Desktop address */}
                <div className="hidden rounded-lg border border-white/[0.06] bg-white/[0.02] px-8 py-1.5 text-[9px] text-slate-600 sm:block">
                  dndbrand.com/workspace
                </div>

                {/* Mobile title */}
                <div className="text-[9px] font-medium text-slate-500 sm:hidden">
                  DND WORKSPACE
                </div>

                <div className="h-5 w-5 rounded-lg bg-white/[0.03] sm:h-6 sm:w-6" />
              </div>

              {/* Workspace */}
              <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0d1929]">
                {/* Workspace header */}
                <div className="flex items-center justify-between border-b border-white/[0.06] px-3 py-3 sm:px-5">
                  <div>
                    <p className="text-[9px] font-semibold text-white sm:text-xs">
                      Product Roadmap
                    </p>

                    <p className="mt-0.5 text-[7px] text-slate-600 sm:text-[9px]">
                      Q4 planning session
                    </p>
                  </div>

                  <div className="flex -space-x-1.5 sm:-space-x-2">
                    {["AM", "JL", "MC"].map((initials) => (
                      <div
                        key={initials}
                        className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#0d1929] bg-slate-700 text-[6px] font-semibold text-slate-200 sm:h-6 sm:w-6 sm:text-[7px]"
                      >
                        {initials}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Presentation area */}
                <div className="relative p-2.5 sm:p-4">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-br from-[#17273b] to-[#0c1727] sm:aspect-[16/9]">
                    {/* Presentation content */}
                    <div className="absolute inset-0 p-4 sm:p-7">
                      <div className="max-w-[60%]">
                        <div className="h-1.5 w-12 rounded-full bg-blue-400/50 sm:h-2 sm:w-20" />

                        <div className="mt-2.5 h-3.5 w-full max-w-40 rounded bg-white/10 sm:mt-3 sm:h-5 sm:max-w-48" />

                        <div className="mt-1.5 h-1.5 w-24 rounded bg-white/[0.06] sm:mt-2 sm:h-2 sm:w-32" />

                        <div className="mt-5 space-y-1.5 sm:mt-6 sm:space-y-2">
                          <div className="h-1.5 w-full rounded bg-white/[0.05] sm:h-2" />
                          <div className="h-1.5 w-4/5 rounded bg-white/[0.05] sm:h-2" />
                          <div className="h-1.5 w-3/5 rounded bg-white/[0.05] sm:h-2" />
                        </div>
                      </div>

                      {/* Chart */}
                      <div className="absolute bottom-4 right-4 flex h-16 w-[38%] items-end gap-1 sm:bottom-7 sm:right-7 sm:h-28 sm:gap-2">
                        {[35, 55, 42, 70, 60, 88].map((height, index) => (
                          <motion.div
                            key={index}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.7,
                              delay: 0.35 + index * 0.07,
                              ease: "easeOut",
                            }}
                            className="flex-1 rounded-t-md bg-blue-400/30"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Presentation label */}
                    <div className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/30 px-2 py-1 backdrop-blur-md sm:bottom-3 sm:left-3 sm:gap-2 sm:px-2.5 sm:py-1.5">
                      <Play
                        size={7}
                        className="fill-blue-400 text-blue-400 sm:h-[9px] sm:w-[9px]"
                      />

                      <span className="text-[7px] font-medium text-slate-300 sm:text-[8px]">
                        Alex is presenting
                      </span>
                    </div>
                  </div>

                  {/* Desktop chat panel */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.45,
                    }}
                    className="absolute bottom-7 right-1 hidden w-[42%] rounded-2xl border border-white/10 bg-[#101d2e]/95 p-3 shadow-2xl backdrop-blur-xl sm:block sm:bottom-9 sm:right-3 sm:p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MessageCircle
                          size={11}
                          className="text-blue-400"
                        />

                        <span className="text-[9px] font-semibold text-white sm:text-[10px]">
                          Team chat
                        </span>
                      </div>

                      <span className="text-[7px] text-slate-600">
                        3 online
                      </span>
                    </div>

                    <div className="mt-3 space-y-2.5">
                      <div className="flex gap-2">
                        <div className="h-5 w-5 shrink-0 rounded-full bg-blue-500/30" />

                        <div className="min-w-0">
                          <p className="text-[7px] font-medium text-slate-300">
                            Maya
                          </p>

                          <div className="mt-1 h-2 w-24 rounded bg-white/[0.06]" />
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="h-5 w-5 shrink-0 rounded-full bg-indigo-500/30" />

                        <div className="min-w-0">
                          <p className="text-[7px] font-medium text-slate-300">
                            Jordan
                          </p>

                          <div className="mt-1 h-2 w-20 rounded bg-white/[0.06]" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-2 py-1.5">
                      <span className="flex-1 text-[7px] text-slate-600">
                        Write a message...
                      </span>

                      <ArrowUpRight size={9} className="text-slate-600" />
                    </div>
                  </motion.div>

                  {/* Mobile collaboration summary */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: 0.45,
                    }}
                    className="mt-2.5 grid grid-cols-2 gap-2 sm:hidden"
                  >
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5">
                      <div className="flex items-center gap-2">
                        <MessageCircle
                          size={11}
                          className="text-blue-400"
                        />

                        <span className="text-[8px] font-semibold text-white">
                          Team chat
                        </span>
                      </div>

                      <div className="mt-2 flex -space-x-1.5">
                        <span className="h-5 w-5 rounded-full border-2 border-[#0d1929] bg-blue-500/50" />
                        <span className="h-5 w-5 rounded-full border-2 border-[#0d1929] bg-indigo-500/50" />
                        <span className="h-5 w-5 rounded-full border-2 border-[#0d1929] bg-violet-500/50" />
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5">
                      <div className="flex items-center gap-2">
                        <FileText size={11} className="text-blue-400" />

                        <span className="text-[8px] font-semibold text-white">
                          Shared files
                        </span>
                      </div>

                      <p className="mt-2 text-[8px] text-slate-600">
                        4 files shared
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom toolbar */}
                <div className="flex items-center justify-between border-t border-white/[0.06] px-3 py-2.5 sm:px-4 sm:py-3">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 sm:h-2 sm:w-2" />

                    <span className="text-[7px] text-slate-600 sm:text-[8px]">
                      Everyone is connected
                    </span>
                  </div>

                  <div className="hidden items-center gap-2 sm:flex">
                    <FileText size={11} className="text-slate-600" />

                    <span className="text-[8px] text-slate-600">
                      4 files shared
                    </span>
                  </div>

                  <span className="text-[7px] text-slate-600 sm:hidden">
                    Live workspace
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating file card — desktop/tablet */}
            <motion.div
              initial={{ opacity: 0, y: 15, x: -10 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.55,
                delay: 0.65,
              }}
              className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#0b1728]/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:flex"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-400/10 text-blue-400">
                <FileText size={16} />
              </div>

              <div>
                <p className="text-[10px] font-semibold text-white">
                  Roadmap.pdf
                </p>

                <p className="mt-0.5 text-[8px] text-slate-600">
                  Shared just now
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Collaboration;