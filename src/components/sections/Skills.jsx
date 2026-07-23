import { useState } from "react";
import { useTranslation } from "react-i18next";
import skills from "../../data/skills";

function Skills() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [selected, setSelected] = useState(null);
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="min-h-screen px-6 py-24">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-6">
            {t("skillsTitle")}
          </h2>

          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            {t("skillsDescription")}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {skills.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`
                px-5
                py-2
                rounded-full
                border
                text-sm
                font-medium
                transition-all
                ${activeCategory === index
                  ? "bg-white text-black border-white"
                  : "border-white/10 bg-white/5 hover:bg-white/10"
                }
              `}
            >
              {cat.category[lang] || cat.category.es}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills[activeCategory].items.map((skill) => (
            <button
              key={skill.name}
              onClick={() => setSelected(skill)}
              className="
                px-4
                py-2
                rounded-full
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                hover:scale-105
                transition
                text-sm
              "
            >
              {skill.name}
            </button>
          ))}
        </div>

        {selected && (
          <div
            className="
              fixed
              inset-0
              flex
              items-center
              justify-center
              bg-black/60
              backdrop-blur-md
              p-6
              z-50
            "
            onClick={() => setSelected(null)}
          >
            <div
              className="
                max-w-md
                w-full
                p-8
                rounded-2xl
                border
                border-white/10
                bg-white/10
                text-white
                shadow-2xl
              "
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">
                {selected.name}
              </h3>

              <p className="opacity-90 mb-6 leading-relaxed">
                {selected.description[lang] || selected.description.es}
              </p>

              <button
                onClick={() => setSelected(null)}
                className="
                  px-4
                  py-2
                  rounded-xl
                  bg-white
                  text-black
                  font-medium
                  hover:scale-105
                  transition
                "
              >
                {t("close")}
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Skills;
