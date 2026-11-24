import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { navItems, profile } from "../data/profile";
import { assetUrl } from "../utils";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tutup menu dengan tombol Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkProps = {
    smooth: true,
    duration: 500,
    spy: true,
    offset: -90,
    activeClass: "!text-cocoa-900 !bg-gold-100",
    className:
      "cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-cocoa-600 " +
      "hover:text-cocoa-900 hover:bg-sand transition-colors",
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-3">
      <nav
        aria-label="Navigasi utama"
        className={`max-w-6xl mx-auto rounded-3xl md:rounded-full border backdrop-blur-xl transition-all duration-300 ${
          scrolled || open
            ? "bg-cream/90 border-line shadow-lg shadow-cocoa-900/5"
            : "bg-cream/60 border-transparent"
        }`}
      >
        <div className="h-14 md:h-16 pl-5 pr-2 md:pr-3 flex justify-between items-center">
          <Link
            to="home"
            smooth
            duration={500}
            className="cursor-pointer font-serif text-2xl font-semibold text-cocoa-900"
          >
            {profile.name}
            <span className="text-gold-500">.</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.id} to={item.id} {...linkProps}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <a
              href={assetUrl(profile.cv)}
              download={profile.cvFileName}
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-cocoa-800 px-5 py-2.5 text-sm font-semibold text-cream hover:bg-cocoa-600 transition-colors"
            >
              <FaDownload className="text-xs" />
              CV
            </a>

            <button
              type="button"
              className="md:hidden p-3 text-xl text-cocoa-800"
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-4 pb-4 pt-1 flex flex-col gap-1 border-t border-line">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.id}
                    smooth
                    duration={500}
                    spy
                    offset={-80}
                    onClick={() => setOpen(false)}
                    activeClass="!text-cocoa-900 !bg-gold-100"
                    className="cursor-pointer rounded-2xl px-4 py-3 font-medium text-cocoa-700"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={assetUrl(profile.cv)}
                  download={profile.cvFileName}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-cocoa-800 px-5 py-3 font-semibold text-cream"
                >
                  <FaDownload className="text-sm" />
                  Download CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Navbar;
