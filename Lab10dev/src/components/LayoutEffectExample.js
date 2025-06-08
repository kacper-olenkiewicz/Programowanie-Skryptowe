import { useLayoutEffect, useRef, useState } from "react";
import "./LayoutEffectExample.css";

export default function LayoutEffectExample() {
  const boxRef = useRef(null);
  const [height, setHeight] = useState(0);
  useLayoutEffect(() => {
    if (boxRef.current) {
      setHeight(boxRef.current.getBoundingClientRect().height);
    }
  }, []);
  return (
    <div className="layout-effect">
      <div ref={boxRef} className="box">
        Mierzę swoją wysokość!
      </div>
      <p>Wysokość: {height}px</p>
    </div>
  );
}
