import i18n from "i18next";

function LanguageToggle() {

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <div className="flex gap-2 justify-center mt-4">

      <button
        onClick={() => changeLanguage("es")}
        className="px-4 py-2 border rounded-lg"
      >
        ES
      </button>

      <button
        onClick={() => changeLanguage("en")}
        className="px-4 py-2 border rounded-lg"
      >
        EN
      </button>

    </div>
  );
}

export default LanguageToggle;