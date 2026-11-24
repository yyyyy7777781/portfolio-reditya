import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaImage } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/profile";
import { assetUrl, hasLink } from "../utils";

function ProjectImage({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="aspect-[16/10] w-full bg-gradient-to-br from-cocoa-600 to-cocoa-700 flex items-center justify-center text-gold-400/60 text-5xl"
      >
        <FaImage />
      </div>
    );
  }

  return (
    <img
      src={assetUrl(src)}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="aspect-[16/10] w-full object-cover object-top group-hover:scale-105 transition duration-500"
    />
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionTitle eyebrow="Karya">My Projects</SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col bg-cocoa-800 text-cream rounded-3xl shadow-xl shadow-cocoa-900/10 overflow-hidden"
            >
              <div className="overflow-hidden">
                <ProjectImage src={project.image} alt={project.title} />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">{project.title}</h3>

                <p className="text-cream/70 leading-7">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-gold-400/15 border border-gold-400/30 px-3 py-1 text-sm font-medium text-gold-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {hasLink(project.github) && (
                  <div className="mt-auto pt-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-5 py-2.5 font-semibold text-cocoa-900 hover:bg-gold-100 transition"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
