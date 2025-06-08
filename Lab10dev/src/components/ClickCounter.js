import { useRef } from "react";
import "./ClickCounter.css";

export default function ClickCounter() {
  const clickCount = useRef(0);
  const handleClick = () => {
    clickCount.current++;
    console.log("Kliknięć:", clickCount.current);
  };
  return (
    <div className="click-counter">
      <button onClick={handleClick}>Kliknij mnie</button>
      <p>Sprawdź konsolę, aby zobaczyć liczbę kliknięć!</p>
    </div>
  );
}
