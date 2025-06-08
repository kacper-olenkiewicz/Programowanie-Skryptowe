import React from 'react';

function Form({ cvData, setCvData }) {
  const handleChange = (e) => {
    setCvData({ ...cvData, [e.target.name]: e.target.value });
  };

  const handleExperienceChange = (e, index) => {
    const newExperience = [...cvData.experience];
    newExperience[index][e.target.name] = e.target.value;
    setCvData({ ...cvData, experience: newExperience });
  };

  const addExperience = () => {
    setCvData({
      ...cvData,
      experience: [...cvData.experience, { position: '', company: '' }]
    });
  };

  const removeExperience = (index) => {
    const newExperience = cvData.experience.filter((_, i) => i !== index);
    setCvData({ ...cvData, experience: newExperience });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCvData(prev => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Jezyki programowania
  const handleLanguageChange = (e, index) => {
    const newLanguages = [...cvData.languages];
    newLanguages[index][e.target.name] = e.target.value;
    setCvData({ ...cvData, languages: newLanguages });
  };

  const addLanguage = () => {
    setCvData({
      ...cvData,
      languages: [...cvData.languages, { name: '', level: '' }]
    });
  };

  const removeLanguage = (index) => {
    const newLanguages = cvData.languages.filter((_, i) => i !== index);
    setCvData({ ...cvData, languages: newLanguages });
  };

  return (
    <div>
      <h2>Dane osobowe</h2>
      <input type="file" accept="image/*" onChange={handlePhotoChange} />
      <input
        name="name"
        value={cvData.name}
        onChange={handleChange}
        placeholder="Imie i nazwisko"
      />
      <input
        name="email"
        value={cvData.email}
        onChange={handleChange}
        placeholder="E-mail"
      />

      <h2>Doswiadczenie</h2>
      {cvData.experience.map((exp, index) => (
        <div key={index} className="experience-item">
          <input
            name="position"
            value={exp.position}
            onChange={(e) => handleExperienceChange(e, index)}
            placeholder="Stanowisko"
          />
          <input
            name="company"
            value={exp.company}
            onChange={(e) => handleExperienceChange(e, index)}
            placeholder="Firma"
          />
          <button
            onClick={() => removeExperience(index)}
            className="remove-btn"
          >
            Usun
          </button>
        </div>
      ))}
      <button onClick={addExperience}>Dodaj doswiadczenie</button>

      <h2>Jezyki programowania</h2>
      {cvData.languages.map((lang, index) => (
        <div key={index} className="experience-item">
          <input
            name="name"
            value={lang.name}
            onChange={(e) => handleLanguageChange(e, index)}
            placeholder="Jezyk programowania (np. JavaScript)"
          />
          <select
            name="level"
            value={lang.level}
            onChange={(e) => handleLanguageChange(e, index)}
          >
            <option value="">Wybierz poziom</option>
            <option value="Poczatkujacy">Poczatkujacy</option>
            <option value="Sredniozaawansowany">Sredniozaawansowany</option>
            <option value="Zaawansowany">Zaawansowany</option>
            <option value="Ekspert">Ekspert</option>
          </select>
          <button
            onClick={() => removeLanguage(index)}
            className="remove-btn"
          >
            Usun
          </button>
        </div>
      ))}
      <button onClick={addLanguage}>Dodaj jezyk programowania</button>
    </div>
  );
}

export default Form;
