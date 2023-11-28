import React, { useState } from 'react';
import { useSettings } from '../../settingsContext';
import { Link } from 'react-router-dom';
import Translation from '../../components/Translation/Translation'

const HighVisibilityFont = ({ children }) => (
  <span style={{ padding: '10px', fontSize: '12pt', fontWeight: 'bold', color: '#000', marginRight: '20em', marginTop: '25em', backgroundColor: 'rgb(164, 152, 175)'}}>
    {children}
  </span>
);

const SettingsPage = () => {
  const { settings, updateSettings } = useSettings();
  const [newSettings, setNewSettings] = useState({});

  const handleSaveSettings = () => {
    updateSettings(newSettings);
  };

  const fontOptions = [
    'Arial, sans-serif',
    'Arial Black, sans-serif',
    'Arial Narrow, sans-serif',
    'Courier New, monospace',
    'Georgia, serif',
    'Impact, sans-serif',
    'Lucida Console, monospace',
    'Lucida Sans Unicode, sans-serif',
    'Palatino Linotype, serif',
    'Tahoma, sans-serif',
    'Times New Roman, serif',
    'Trebuchet MS, sans-serif',
    'Verdana, sans-serif',
    'Symbol, sans-serif',
    'Webdings, sans-serif',
    'Wingdings, sans-serif',
    'MS Sans Serif, sans-serif',
    'MS Serif, sans-serif',
    'Comic Sans MS, cursive',
    'Courier, monospace',
    'Garamond, serif',
    'Monotype Corsiva, cursive',
    'Brush Script MT, cursive',
  ];

  return (
    <div className="container nav-padding">
      <span id='navBar'>
      <Link to="/" style={{ textDecoration: 'none', color: '#000', fontSize: '12pt', marginLeft: '40px' }}>
        Home
      </Link>
      <Link to="/about" style={{ textDecoration: 'none', color: '#000', fontSize: '12pt', marginLeft: '40px' }}>
        About
      </Link>
      <Link to="/help" style={{ textDecoration: 'none', color: '#000', fontSize: '12pt', marginLeft: '40px' }}>
        Help
      </Link>
      <Link to="/faqs" style={{ textDecoration: 'none', color: '#000', fontSize: '12pt', marginLeft: '40px' }}>
        FAQs
      </Link>
      <HighVisibilityFont>
      <label>
        Font Style:
        <select
          value={newSettings.fontStyle || settings.fontStyle}
          onChange={(e) => setNewSettings({ ...newSettings, fontStyle: e.target.value })}
        >
          <option value="normal">Normal</option>
          <option value="italic">Italic</option>
          <option value="bold">Bold</option>
        </select>
      </label>

      <label>
        Font:
        <select
          value={newSettings.font || settings.font}
          onChange={(e) => setNewSettings({ ...newSettings, font: e.target.value })}
        >
          {fontOptions.map((font, index) => (
            <option key={index} value={font}>
              {font}
            </option>
          ))}
        </select>
      </label>
      
      <label>
        Font Size:
        <select
          value={newSettings.fontSize || settings.fontSize}
          onChange={(e) => setNewSettings({ ...newSettings, fontSize: e.target.value })}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>
      <label>
        Font Color:
        <input
          type="color"
          value={newSettings.fontColor || settings.fontColor}
          onChange={(e) => setNewSettings({ ...newSettings, fontColor: e.target.value })}
        />
      </label>
      <div id='translation-menu'>
        <Translation/>
      </div>

      <button onClick={handleSaveSettings}>Save Settings</button>
      </HighVisibilityFont>
    </span>
    </div>
  );
};

export default SettingsPage;
