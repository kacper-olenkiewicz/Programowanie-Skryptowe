import React, { useContext, useRef, useLayoutEffect } from 'react';
import { CVContext } from '../context/CVContext';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const PreviewComponent = () => {
  const { state } = useContext(CVContext);
  const previewRef = useRef(null);

  const exportPDF = () => {
    html2canvas(previewRef.current).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save("cv.pdf");
    });
  };

  useLayoutEffect(() => {
    if (previewRef.current) {
      // Animacja pojawiania się
      previewRef.current.style.opacity = 1;
    }
  }, [state]);

  return (
    <div ref={previewRef} className={`preview ${state.theme}`}>
      <h1>{state.personal.name}</h1>
      <button onClick={exportPDF}>Eksportuj do PDF</button>
    </div>
  );
};

export default PreviewComponent;
