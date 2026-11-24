import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { navItems, profile } from "../data/profile";
import { hasLink } from "../utils";

const socials = [
  { icon: FaGithub, label: "GitHub", url: profile.github.url },
  { icon: FaLinkedin, label: "LinkedIn", url: profile.linkedin.url },
  { icon: FaInstagram, label: "Instagram", url: profile.instagram.url },
].filter((s) => hasLink(s.url));

function Footer() {
  return (
    <footer className="bg-cocoa-900 text-cream/70 pt-14 pb-8 px-5 text-center">
      <h2 className="font-serif text-3xl font-semibold text-cream">
        {profile.name}
        <span className="text-gold-400">.</span>
      </h2>
      <p className="mt-2 text-sm">UI/UX Designer & Frontend Developer</p>

      <nav aria-label="Navigasi footer" className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            smooth
            duration={500}
            offset={-80}
            className="cursor-pointer hover:text-gold-400 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex justify-center gap-3 mt-7 text-lg">
        {socials.map(({ icon: Icon, label, url }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="grid h-10 w-10 place-items-center rounded-full bg-cocoa-800 hover:bg-gold-400 hover:text-cocoa-900 transition"
          >
            <Icon />
          </a>
        ))}
      </div>

      <p className="mt-9 pt-6 border-t border-cocoa-700 text-xs">
        © {new Date().getFullYear()} {profile.fullName}. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
