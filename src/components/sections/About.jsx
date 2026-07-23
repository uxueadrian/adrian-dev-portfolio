import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
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
            {t("aboutTitle")}
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
            {t("aboutDescription")}
          </p>

        </div>

        <div
          className="
            grid
            md:grid-cols-3
            gap-6
          "
        >

          <div
            className="
              rounded-3xl
              border
              border-white/10
              p-6
              bg-white/5
            "
          >
            <h3 className="text-xl font-semibold mb-4">
              {t("aboutCard1Title")}
            </h3>

            <p className="opacity-80">
              {t("aboutCard1Description")}
            </p>
          </div>

          <div
            className="
              rounded-3xl
              border
              border-white/10
              p-6
              bg-white/5
            "
          >
            <h3 className="text-xl font-semibold mb-4">
              {t("aboutCard2Title")}
            </h3>

            <p className="opacity-80">
              {t("aboutCard2Description")}
            </p>
          </div>

          <div
            className="
              rounded-3xl
              border
              border-white/10
              p-6
              bg-white/5
            "
          >
            <h3 className="text-xl font-semibold mb-4">
              {t("aboutCard3Title")}
            </h3>

            <p className="opacity-80">
              {t("aboutCard3Description")}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
