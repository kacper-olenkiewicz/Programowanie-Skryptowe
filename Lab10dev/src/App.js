import ClickCounter from "./components/ClickCounter";
import PrimeCalculator from "./components/PrimeCalculator";
import FormReducer from "./components/FormReducer";
import ThemeSwitcher from "./components/ThemeSwitcher";
import LayoutEffectExample from "./components/LayoutEffectExample";
import { ThemeProvider } from "./components/ThemeContext";
import "./App.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <h1>Laboratorium 10</h1>
        <ThemeSwitcher />
        <ClickCounter />
        <PrimeCalculator />
        <FormReducer />
        <LayoutEffectExample />
      </div>
    </ThemeProvider>
  );
}
