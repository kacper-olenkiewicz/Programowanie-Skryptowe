import React, { useContext } from 'react';
import { CVContext } from '../context/CVContext';

const ThemeToggle = () => {
  const { state, dispatch } = useContext(CVContext);

  const toggleTheme = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    dispatch({ type: 'CHANGE_THEME', payload: newTheme });
  };

  return (
    <button onClick={toggleTheme}>
      {state.theme === 'light' ? '🌙 Ciemny' : '☀️ Jasny'}
    </button>
  );
};

export default ThemeToggle;
