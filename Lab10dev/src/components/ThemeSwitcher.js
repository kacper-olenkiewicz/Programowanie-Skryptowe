import { useTheme } from "./ThemeContext";
import "./ThemeSwitcher.css";

export default function ThemeSwitcher() {
  const { dark, toggleTheme } = useTheme();
  return (
    <div className={`theme-switcher ${dark ? "dark" : "light"}`}>
      <button onClick={toggleTheme}>Przełącz motyw</button>
    </div>
  );
}
