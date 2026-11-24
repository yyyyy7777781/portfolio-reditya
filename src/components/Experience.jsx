import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { experiences } from "../data/profile";

function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-sand/60">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <SectionTitle eyebrow="Perjalanan">Experience</SectionTitle>

        <ol className="relative ml-3 md:ml-0 border-l-2 border-line md:border-l-0 space-y-6">
          {/* Garis tengah untuk desktop */}
          <span
            className="hidden md:block absolute left-[11rem] top-2 bottom-2 w-0.5 bg-line"
            aria-hidden="true"
          />

          {experiences.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative pl-7 md:pl-0 md:grid md:grid-cols-[11rem_1fr] md:gap-0"
            >
              {/* Tanggal (desktop) */}
              <p className="hidden md:block pr-8 pt-6 text-right text-sm font-semibold text-gold-600">
                {item.year}
              </p>

              {/* Titik */}
              <span className="absolute -left-[9px] md:left-[11rem] md:-ml-[7px] top-7 h-4 w-4 rounded-full bg-gold-500 ring-4 ring-cream" />

              <div className="md:ml-8 bg-cream border border-line p-6 rounded-2xl hover:shadow-lg hover:shadow-cocoa-900/5 transition">
                <span className="md:hidden inline-block rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-600">
                  {item.year}
                </span>

                <h3 className="text-lg sm:text-xl font-semibold text-cocoa-900 mt-3 md:mt-0">
                  {item.title}
                </h3>

                <p className="text-cocoa-500 mt-3 leading-7">{item.description}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
