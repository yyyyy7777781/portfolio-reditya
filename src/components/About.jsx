import { useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaUsers, FaMapMarkerAlt } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { profile, aboutCards } from "../data/profile";
import { assetUrl } from "../utils";

const icons = {
  Pendidikan: FaGraduationCap,
  Pengalaman: FaBriefcase,
  Organisasi: FaUsers,
  Domisili: FaMapMarkerAlt,
};

const photoSize = "w-60 h-72 sm:w-72 sm:h-80";

function About() {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section id="about" className="py-20 md:py-28 bg-sand/60">
      <motion.div
        className="max-w-6xl mx-auto px-5 sm:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.15 }}
      >
        <SectionTitle eyebrow="Profil">Tentang Saya</SectionTitle>

        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-16 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div
                className={`absolute ${photoSize} -translate-x-3 translate-y-3 rounded-3xl bg-gold-100`}
                aria-hidden="true"
              />
              {photoError ? (
                <div
                  role="img"
                  aria-label={profile.fullName}
                  className={`relative ${photoSize} rounded-3xl bg-gradient-to-br from-cocoa-600 to-cocoa-800 flex items-center justify-center font-serif text-7xl font-semibold text-gold-400 shadow-xl`}
                >
                  RN
                </div>
              ) : (
                <img
                  src={assetUrl(profile.photo)}
                  alt={profile.fullName}
                  loading="lazy"
                  onError={() => setPhotoError(true)}
                  className={`relative ${photoSize} object-cover rounded-3xl shadow-xl`}
                />
              )}
            </div>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-cocoa-900 mb-5">
              Halo, senang berkenalan.
            </h3>

            <p className="text-cocoa-500 leading-8 mb-8">{profile.about}</p>

            <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-4">
              {aboutCards.map((card) => {
                const Icon = icons[card.title];
                return (
                  <div
                    key={card.title}
                    className="flex gap-4 bg-cream border border-line rounded-2xl p-5 hover:shadow-lg hover:shadow-cocoa-900/5 hover:-translate-y-1 transition duration-300"
                  >
                    {Icon && (
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold-100 text-gold-600">
                        <Icon />
                      </span>
                    )}
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gold-600">
                        {card.title}
                      </h4>
                      <p className="mt-1 font-semibold text-cocoa-900">{card.value}</p>
                      {card.note && (
                        <p className="text-sm text-cocoa-500">{card.note}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
