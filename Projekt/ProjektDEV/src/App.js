import React, { useState } from 'react';
import Form from './Form';
import Preview from './Preview';
import DownloadPDF from './DownloadPDF';

function App() {
  const [cvData, setCvData] = useState({
    name: '',
    email: '',
    experience: [{ position: '', company: '' }],
    photo: '',
    languages: [{ name: '', level: '' }],
  });

  return (
    <div className="cv-app">
      <h1>Generator CV</h1>
      <div className="cv-container">
        <div className="form-container">
          <Form cvData={cvData} setCvData={setCvData} />
        </div>
        <div className="preview-container">
          <Preview cvData={cvData} />
          <DownloadPDF cvData={cvData} />
        </div>
      </div>
    </div>
  );
}

export default App;
