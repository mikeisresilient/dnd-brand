import { motion } from "framer-motion";

const companies = ["NORTHSTAR", "VERTEX", "LUMEN", "ARC", "NOVA"];

function TrustedBy() {
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.015]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-7 py-8 sm:py-10 lg:flex-row lg:justify-between lg:gap-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5 }}
            className="shrink-0 text-center text-xs font-medium uppercase tracking-[0.16em] text-slate-600 lg:text-left"
          >
            Trusted by teams building what's next
          </motion.p>

          <div className="flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:gap-x-12 lg:justify-end lg:gap-x-14">
            {companies.map((company, index) => (
              <motion.span
                key={company}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                }}
                className="text-sm font-semibold tracking-[0.08em] text-slate-600 transition-colors duration-300 hover:text-slate-400 sm:text-base"
              >
                {company}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;