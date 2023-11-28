import React from "react"
import NSF from "../../assets/nsf_logo.png"
import TAMU from "../../assets/tamu_logo.png"
import UF from "../../assets/uf_logo.png"
import NavBar from "../../components/NavBar/NavBar"
import { useSettings } from '../../settingsContext';
import './Help.less';

export default function About(props) {
  const { settings } = useSettings();

const titleStyle = {
  fontSize:
  settings.fontSize === "large" ||
  settings.fontSize === "medium" ||
  settings.fontSize === "small"
    ? settings.fontSize
    : '1.9em',
  fontWeight: settings.fontStyle === 'bold' ? 'bold' : 'normal', 
  fontFamily: settings.fontFamily,
  fontStyle: settings.fontStyle === 'italic' ? 'italic' : 'normal',
  color: settings.fontColor || 'white', 
};
const secondTitleStyle = {
  fontSize:
  settings.fontSize === "large" ||
  settings.fontSize === "medium" ||
  settings.fontSize === "small"
    ? settings.fontSize
    : '0.9em',
  fontWeight: settings.fontStyle === 'bold' ? 'bold' : 'normal', 
  fontFamily: settings.fontFamily,
  fontStyle: settings.fontStyle === 'italic' ? 'italic' : 'normal',
  color: settings.fontColor || 'white', 
};

return (
  <div className="container nav-padding" style={settings}>
    <h1 id="title" style={titleStyle}>
      <NavBar />
      <h1 id="title" className={`white-text ${settings.fontStyle}`} style={titleStyle}> HELP CENTER </h1>
      <h3 id="title" className={`white-text ${settings.fontStyle}`} style={secondTitleStyle}>Please refer to the FAQs section for commonly asked questions.</h3>
      <h3 id="title" className={`white-text ${settings.fontStyle}`} style={secondTitleStyle}>If your question persists, contact us at:</h3>
      <h3 id="title" className={`white-text ${settings.fontStyle}`} style={secondTitleStyle}>Dr. Christina Gardner-McCune - gmccune@ufl.edu</h3>
      <h3 id="title" className={`white-text ${settings.fontStyle}`} style={secondTitleStyle}>David A. Magda - magdad@ufl.edu</h3>
    </h1>
  </div>
);
}
