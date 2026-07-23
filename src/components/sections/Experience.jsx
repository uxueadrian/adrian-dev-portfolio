import { useTranslation } from "react-i18next";
import experience from "../../data/experience";

function Experience() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <section
      id="experience"
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        py-24
      "
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold mb-6">
            {t("experienceTitle")}
          </h2>

          <p
            className="
              text-lg
              leading-relaxed
              opacity-80
              max-w-3xl
              mx-auto
            "
          >
            {t("experienceDescription")}
          </p>

        </div>

        <div className="relative">

          <div
            className="
              absolute
              left-4
              md:left-1/2
              transform
              md:-translate-x-px
              top-0
              bottom-0
              w-0.5
              bg-white/10
            "
          />

          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className={`
                relative
                mb-12
                flex
                flex-col
                md:flex-row
                ${index % 2 === 0 ? "md:flex-row-reverse" : ""}
              `}
            >
              <div
                className="
                  absolute
                  left-4
                  md:left-1/2
                  transform
                  md:-translate-x-1/2
                  w-4
                  h-4
                  rounded-full
                  bg-white
                  border-2
                  border-white/20
                  top-6
                "
              />

              <div
                className={`
                  ml-12
                  md:ml-0
                  md:w-5/12
                  ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}
                `}
              >
                <div
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    p-6
                    bg-white/5
                    backdrop-blur-md
                  "
                >
                  <span className="text-sm opacity-60 block mb-2">
                    {exp.period}
                  </span>

                  <h3 className="text-xl font-semibold mb-1">
                    {exp.role[lang] || exp.role.es}
                  </h3>

                  <p className="text-sm opacity-70 mb-4">
                    {exp.company}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {(exp.description[lang] || exp.description.es).map((item, i) => (
                      <li
                        key={i}
                        className="
                          text-sm
                          opacity-80
                          leading-relaxed
                          pl-4
                          border-l-2
                          border-white/10
                        "
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-3
                          py-1
                          rounded-full
                          text-xs
                          border
                          border-white/10
                          opacity-70
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;
