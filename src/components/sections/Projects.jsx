import { useState } from "react";
import projects from "../../data/projects";
import ProjectCard from "../projects/ProjectCard";
import { useTranslation } from "react-i18next";

const ITEMS_PER_PAGE = 3;

function Projects() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section
      id="projects"
      className="
        min-h-screen
        px-6
        py-24
      "
    >
      <div className="max-w-6xl mx-auto">

        <h2
          className="
            text-4xl
            font-bold
            mb-12
            text-center
          "
        >
          {t("projectsTitle")}
        </h2>

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
          {currentProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div
            className="
              flex
              items-center
              justify-center
              gap-6
              mt-12
            "
          >
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="
                px-5
                py-2
                rounded-xl
                border
                border-white/10
                bg-white/5
                hover:bg-white/10
                transition
                text-sm
                disabled:opacity-30
                disabled:cursor-not-allowed
              "
            >
              {t("projectsPagePrev")}
            </button>

            <span className="text-sm opacity-70">
              {currentPage} {t("projectsPageOf")} {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="
                px-5
                py-2
                rounded-xl
                border
                border-white/10
                bg-white/5
                hover:bg-white/10
                transition
                text-sm
                disabled:opacity-30
                disabled:cursor-not-allowed
              "
            >
              {t("projectsPageNext")}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

export default Projects;
