import { useTranslation } from "react-i18next";
import siteConfig from "../../config/siteConfig";

function Footer() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const role = siteConfig.role[lang] || siteConfig.role.es;

  return (
    <footer
      className="
        border-t
        border-white/10
        mt-20
        py-10
        px-6
        text-center
        opacity-80
      "
    >
      <p className="mb-2">
        Adrian.dev — {role}
      </p>

      <p className="text-sm">
        © {new Date().getFullYear()} {t("footerRights")}
      </p>
    </footer>
  );
}

export default Footer;
