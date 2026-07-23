import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import siteConfig from "../../config/siteConfig";

function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <p
          className="
            mb-4
            text-sm
            uppercase
            tracking-[0.25em]
            opacity-70
          "
        >
          {t("heroSubtitle")}
        </p>

        <h1
          className="
            text-5xl
            md:text-7xl
            font-bold
            mb-6
            leading-tight
          "
        >
          {t("heroTitle")}
        </h1>

        <p
          className="
            text-lg
            md:text-xl
            opacity-80
            leading-relaxed
            mb-10
          "
        >
          {t("heroDescription")}
        </p>

        <div className="flex justify-center gap-4 flex-wrap">

          <a
            href="#projects"
            className="
              px-6
              py-3
              rounded-2xl
              bg-white
              text-black
              font-medium
              hover:scale-105
              transition
            "
          >
            {t("heroCtaProjects")}
          </a>

          <a
            href="#contact"
            className="
              px-6
              py-3
              rounded-2xl
              border
              border-white/10
              hover:bg-white/10
              transition
            "
          >
            {t("heroCtaContact")}
          </a>

          <a
            href={siteConfig.cv}
            download
            className="
              px-6
              py-3
              rounded-2xl
              border
              border-white/10
              hover:bg-white/10
              transition
            "
          >
            {t("heroCtaCv")}
          </a>

        </div>

      </motion.div>
    </section>
  );
}

export default Hero;
