import { useState } from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { profile } from "../data/profile";
import { hasLink } from "../utils";

const inputClass =
  "w-full border border-line bg-cream p-3 rounded-xl text-cocoa-900 placeholder:text-cocoa-300 focus:bg-white focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-100 transition";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Tanpa backend: membuka aplikasi email dengan pesan yang sudah terisi.
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = `Pesan dari ${form.name} (portfolio)`;
    const body = `${form.message}\n\n— ${form.name}\n${form.email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const items = [
    { icon: FaEnvelope, text: profile.email, href: `mailto:${profile.email}` },
    { icon: FaWhatsapp, text: profile.whatsapp, href: profile.whatsappLink },
    { icon: FaGithub, text: profile.github.label, href: profile.github.url },
    { icon: FaLinkedin, text: profile.linkedin.label, href: profile.linkedin.url },
    { icon: FaInstagram, text: profile.instagram.label, href: profile.instagram.url },
  ].filter((item) => item.href.startsWith("mailto:") || hasLink(item.href));

  return (
    <section id="contact" className="py-20 md:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionTitle eyebrow="Kontak">Contact Me</SectionTitle>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          {/* Informasi */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-cocoa-900 mb-5">
              Mari Terhubung
            </h3>

            <p className="text-cocoa-500 leading-8 mb-8">
              Terima kasih telah mengunjungi portfolio saya. Jika ingin bekerja sama
              atau memiliki pertanyaan, silakan hubungi saya melalui kontak berikut.
            </p>

            <ul className="space-y-3">
              {items.map(({ icon: Icon, text, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-white/70 p-4 hover:border-gold-400 hover:shadow-md hover:shadow-cocoa-900/5 transition"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-100 text-xl text-gold-600 group-hover:bg-cocoa-800 group-hover:text-gold-400 transition">
                      <Icon />
                    </span>
                    <span className="break-all text-cocoa-700">{text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="bg-white/80 p-6 sm:p-8 rounded-3xl border border-line shadow-xl shadow-cocoa-900/5"
          >
            <label className="block mb-5">
              <span className="block text-sm font-semibold text-cocoa-800 mb-2">Nama</span>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={onChange}
                placeholder="Nama"
                autoComplete="name"
                className={inputClass}
              />
            </label>

            <label className="block mb-5">
              <span className="block text-sm font-semibold text-cocoa-800 mb-2">Email</span>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={onChange}
                placeholder="Email"
                autoComplete="email"
                className={inputClass}
              />
            </label>

            <label className="block mb-6">
              <span className="block text-sm font-semibold text-cocoa-800 mb-2">Pesan</span>
              <textarea
                name="message"
                required
                rows="5"
                value={form.message}
                onChange={onChange}
                placeholder="Pesan"
                className={inputClass}
              />
            </label>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-cocoa-800 py-3.5 font-semibold text-cream hover:bg-cocoa-600 transition"
            >
              <FaPaperPlane />
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
