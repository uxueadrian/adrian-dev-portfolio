import { useTranslation } from "react-i18next";
import siteConfig from "../../config/siteConfig";

function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
      "
    >
      <div className="max-w-3xl text-center">

        <h2 className="text-4xl font-bold mb-6">
          {t("contactTitle")}
        </h2>

        <p className="text-lg opacity-80 mb-8">
          {t("contactDescription")}
        </p>

        <div className="flex flex-col gap-4">

          <a
            href={`mailto:${siteConfig.email}`}
            className="
              px-6
              py-3
              rounded-xl
              border
              border-white/10
              hover:bg-white/10
              transition
            "
          >
            {siteConfig.email}
          </a>

          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="
              px-6
              py-3
              rounded-xl
              border
              border-white/10
              hover:bg-white/10
              transition
            "
          >
            {t("contactGithub")}
          </a>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className="
              px-6
              py-3
              rounded-xl
              border
              border-white/10
              hover:bg-white/10
              transition
            "
          >
            {t("contactLinkedin")}
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;
