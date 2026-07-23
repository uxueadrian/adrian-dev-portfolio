import { useTranslation } from "react-i18next";

function ProjectCard({ project }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const title = typeof project.title === "object" ? project.title[lang] || project.title.es : project.title;
  const description = typeof project.description === "object" ? project.description[lang] || project.description.es : project.description;

  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        p-6
        bg-white/5
        backdrop-blur-md
        hover:scale-[1.02]
        hover:border-white/20
        transition-all
        duration-300
      "
    >
      {project.image && (
        <div
          className="
            w-full
            h-48
            rounded-xl
            mb-4
            bg-white/5
            overflow-hidden
          "
        >
          <img
            src={project.image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {!project.image && (
        <div
          className="
            w-full
            h-48
            rounded-xl
            mb-4
            bg-gradient-to-br
            from-white/10
            to-white/5
            flex
            items-center
            justify-center
            text-4xl
            opacity-30
          "
        >
          {project.technologies[0]}
        </div>
      )}

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p
        className="
          opacity-80
          leading-relaxed
          mb-4
          text-sm
        "
      >
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="
              px-3
              py-1
              rounded-full
              text-xs
              border
              border-white/10
            "
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-6">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-70 transition text-sm"
        >
          {t("projectsGithub")}
        </a>

        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-70 transition text-sm"
        >
          {t("projectsDemo")}
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
