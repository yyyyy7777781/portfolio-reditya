import { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload, FaArrowRight } from "react-icons/fa";
import { profile } from "../data/profile";
import { assetUrl, hasLink } from "../utils";

const socials = [
  { icon: FaGithub, label: "GitHub", ...profile.github },
  { icon: FaLinkedin, label: "LinkedIn", ...profile.linkedin },
  { icon: FaInstagram, label: "Instagram", ...profile.instagram },
].filter((s) => hasLink(s.url));

const sizes = "w-60 h-72 sm:w-72 sm:h-[22rem] lg:w-[24rem] lg:h-[29rem]";

function Hero() {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] pt-28 pb-16 flex items-center overflow-hidden bg-cream"
    >
      <div className="absolute inset-0 bg-grain" aria-hidden="true" />
      <div
        className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-gold-100 blur-3xl opacity-80"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-sand blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 w-full grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-12 lg:gap-16">
        {/* Teks */}
        <motion.div
          className="order-2 lg:order-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-line px-4 py-1.5 text-sm font-medium text-cocoa-600">
            <span className="h-2 w-2 rounded-full bg-gold-500" aria-hidden="true" />
            Halo, saya
          </p>

          <h1 className="mt-5 text-5xl sm:text-6xl xl:text-7xl font-semibold leading-[1.05] text-cocoa-900">
            {profile.firstName}
            <span className="block text-gold-600">{profile.lastName}</span>
          </h1>

          <h2 className="mt-5 text-xl sm:text-2xl font-sans font-semibold text-cocoa-700 min-h-[2.25rem] tracking-normal">
            <Typewriter
              words={profile.roles}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="mt-6 text-base sm:text-lg text-cocoa-500 leading-8 max-w-xl mx-auto lg:mx-0">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cocoa-800 px-8 py-3.5 font-semibold text-cream shadow-lg shadow-cocoa-900/20 hover:bg-cocoa-600 hover:-translate-y-0.5 transition duration-300"
            >
              Lihat Project
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={assetUrl(profile.cv)}
              download={profile.cvFileName}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cocoa-800 px-8 py-3.5 font-semibold text-cocoa-800 hover:bg-cocoa-800 hover:text-cream transition duration-300"
            >
              <FaDownload className="text-sm" />
              Download CV
            </a>
          </div>

          <div className="flex justify-center lg:justify-start gap-3 mt-10">
            {socials.map(({ icon: Icon, label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white/70 text-lg text-cocoa-600 hover:bg-cocoa-800 hover:text-cream hover:-translate-y-0.5 transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Foto */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="relative">
            {/* Bingkai offset berwarna emas */}
            <div
              className={`absolute ${sizes} translate-x-4 translate-y-4 rounded-t-[999px] rounded-b-[2rem] border-2 border-gold-400`}
              aria-hidden="true"
            />
            {photoError ? (
              <div
                role="img"
                aria-label={profile.fullName}
                className={`relative ${sizes} rounded-t-[999px] rounded-b-[2rem] bg-gradient-to-b from-cocoa-600 to-cocoa-800 flex items-center justify-center font-serif text-7xl lg:text-8xl font-semibold text-gold-400 shadow-2xl shadow-cocoa-900/20`}
              >
                RN
              </div>
            ) : (
              <img
                src={assetUrl(profile.photo)}
                alt={profile.fullName}
                onError={() => setPhotoError(true)}
                className={`relative ${sizes} object-cover rounded-t-[999px] rounded-b-[2rem] shadow-2xl shadow-cocoa-900/20`}
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
