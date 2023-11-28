import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    fontStyle: 'Font Style',  // Default font style
    fontSize: 'Font Size',  // Default font size
    fontColor: 'Font Color',  // Default font color
    font: 'Font',  // Default font
  });

  const updateSettings = (newSettings) => {
    setSettings({ ...settings, ...newSettings });
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  return useContext(SettingsContext);
};
