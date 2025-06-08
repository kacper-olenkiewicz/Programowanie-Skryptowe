import React from 'react';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import MyDocument from './MyDocument';

const DownloadPDF = ({ cvData }) => {
  const handleDownload = async () => {
    const blob = await pdf(<MyDocument cvData={cvData} />).toBlob();
    saveAs(blob, 'cv.pdf');
  };

  return (
    <button onClick={handleDownload} style={{ marginTop: 20 }}>
      Pobierz CV w PDF
    </button>
  );
};

export default DownloadPDF;
