import React from 'react';

function Preview({ cvData }) {
  return (
    <div>
      <h2>Podglad CV</h2>
      {cvData.photo && (
        <img
          src={cvData.photo}
          alt="Zdjecie"
          style={{
            width: '150px',
            height: 'auto',
            borderRadius: '8px',
            marginBottom: '10px'
          }}
        />
      )}
      <p>
        <strong>Imie i nazwisko:</strong> {cvData.name}
      </p>
      <p>
        <strong>E-mail:</strong> {cvData.email}
      </p>
      <h3>Doswiadczenie</h3>
      {cvData.experience.map((exp, index) => (
        <div key={index} className="experience-item">
          <p>
            <strong>Stanowisko:</strong> {exp.position}
          </p>
          <p>
            <strong>Firma:</strong> {exp.company}
          </p>
        </div>
      ))}

      <h3>Jezyki programowania</h3>
      {cvData.languages.map((lang, index) => (
        <div key={index} className="experience-item">
          <p>
            <strong>Jezyk:</strong> {lang.name}
          </p>
          <p>
            <strong>Poziom:</strong> {lang.level}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Preview;
