import React, { useContext, useRef } from 'react';
import { CVContext } from '../context/CVContext';

const FormComponent = () => {
  const { dispatch } = useContext(CVContext);
  const formRef = useRef(null);

  const handlePersonalChange = (e) => {
    dispatch({
      type: 'UPDATE_PERSONAL',
      payload: { [e.target.name]: e.target.value }
    });
  };

  return (
    <div ref={formRef} className="form-section">
      <h2>Dane osobowe</h2>
      <input name="name" placeholder="Imię i nazwisko" onChange={handlePersonalChange} />
      <input name="email" placeholder="Email" onChange={handlePersonalChange} />
      <input name="phone" placeholder="Telefon" onChange={handlePersonalChange} />
    </div>
  );
};

export default FormComponent;
