import { useTheme } from "../../hooks/useTheme";

function ThemeToggle() {

  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        px-4
        py-2
        rounded-lg
        border
        border-white/10
        hover:bg-white/10
        transition
      "
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;