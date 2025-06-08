import React, { createContext, useReducer, useMemo } from 'react';

const initialState = {
  theme: 'light',
  personal: { name: '', email: '', phone: '' },
  experience: [],
  education: [],
  skills: [],
  template: 'basic'
};

const cvReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PERSONAL':
      return { ...state, personal: { ...state.personal, ...action.payload } };
    case 'ADD_EXPERIENCE':
      return { ...state, experience: [...state.experience, action.payload] };
    case 'CHANGE_THEME':
      return { ...state, theme: action.payload };
    case 'CHANGE_TEMPLATE':
      return { ...state, template: action.payload };
    default:
      return state;
  }
};

export const CVContext = createContext();

export const CVProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cvReducer, initialState);
  
  const value = useMemo(() => ({ state, dispatch }), [state]);
  
  return <CVContext.Provider value={value}>{children}</CVContext.Provider>;
};
