import ThemeToggle from "../ui/ThemeToggle";
import LanguageToggle from "../ui/LanguageToggle";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        backdrop-blur-md
        border-b
        border-white/10
        z-50
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          items-center
          justify-between
        "
      >
        <h1 className="text-xl font-bold">
          Adrian.dev
        </h1>

        <div className="flex items-center gap-8">

          <ul className="hidden md:flex gap-6">

            <li>
              <a href="#hero">{t("navHome")}</a>
            </li>

            <li>
              <a href="#about">{t("navAbout")}</a>
            </li>

            <li>
              <a href="#experience">{t("navExperience")}</a>
            </li>

            <li>
              <a href="#skills">{t("navSkills")}</a>
            </li>

            <li>
              <a href="#projects">{t("navProjects")}</a>
            </li>

            <li>
              <a href="#contact">{t("navContact")}</a>
            </li>

          </ul>

          <ThemeToggle />

          <LanguageToggle />

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
