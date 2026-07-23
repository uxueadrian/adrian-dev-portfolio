import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

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
        Adrian.dev — Software Engineering Student
      </p>

      <p className="text-sm">
        © {new Date().getFullYear()} {t("footerRights")}
      </p>
    </footer>
  );
}

export default Footer;
