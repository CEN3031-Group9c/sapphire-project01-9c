import React from 'react';
import Logo from "../../assets/CodeSparks_logo.png";
import NavBar from "../../components/NavBar/NavBar";
import { useSettings } from "../../settingsContext"; // Import the settings context
import "../Help/Help.less";
import HomeJoin from "./HomeJoin";

const Home = () => {
  const { settings } = useSettings();

  const joinWrapperStyle = {
    fontFamily: settings.fontFamily,
    fontSize:
      settings.fontSize === "large" ||
      settings.fontSize === "medium" ||
      settings.fontSize === "small"
        ? settings.fontSize
        : '1.9em',
    fontStyle: settings.fontStyle === 'italic' ? 'italic' : 'normal',
    color: settings.fontColor, 
    fontWeight: settings.fontStyle === 'bold' ? 'bold' : 'normal',
  };

  const secondJoinWrapperStyle = {
    fontFamily: settings.fontFamily,
    fontSize:
      settings.fontSize === "large" ||
      settings.fontSize === "medium" ||
      settings.fontSize === "small"
        ? settings.fontSize
        : '0.9em',
    fontStyle: settings.fontStyle === 'italic' ? 'italic' : 'normal',
    color: settings.fontColor, 
    fontWeight: settings.fontStyle === 'bold' ? 'bold' : 'normal',
  };

  return (
    <div className='container nav-padding'>        
      <div style={joinWrapperStyle}>
      <NavBar />
      <div id='join-wrapper' style={secondJoinWrapperStyle}>
        <img src={Logo} id='CodeSparks-logo' alt='logo'/>
        <HomeJoin />
        </div>
      </div>
    </div>
  );
};

export default Home;
