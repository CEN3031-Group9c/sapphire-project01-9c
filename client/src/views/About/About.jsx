import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { useSettings } from "../../settingsContext";
import UF from "../../assets/uf_logo.png";
import NSF from "../../assets/nsf_logo.png";
import TAMU from "../../assets/tamu_logo.png";
import "../Help/Help.less";

export default function About(props) {
  const { settings } = useSettings();

  const titleStyle = {
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

  const secondaryTitleStyle = {
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

  const dividerStyle = {
    width: '100%',
    height: 0,
    margin: '0 0',
    opacity: '0%',
  };

  const paragraphStyle = {
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

  return (
    <div className="container nav-padding">
    
      <div id="about-content-container">
      
        <h1 id="title" style={titleStyle}>
        <NavBar />
        About CASMM
        </h1>
        <div id="logos" className="flex space-between">
          <img src={UF} alt="uf" />
          <img src={NSF} alt="nsf" />
          <img src={TAMU} alt="tamu" />
        </div>
        <p style={paragraphStyle}>
          CASMM is developed by the University of Florida and Texas A&M University with support from the National Science Foundation.
        </p>
        <p style={paragraphStyle}>
          CASMM, or Computation and Science Modeling through Making, is a
          cloud-based programming interface designed for fifth and sixth-grade
          students to support them in building computational physical models for
          science experiments in the classroom.
        </p>
        <div id="divider" style={dividerStyle} />
        <h1 id="secondary-title" style={secondaryTitleStyle}>
          How it Works
        </h1>
        <p style={paragraphStyle}>
          CASMM makes use of Google's{" "}
          <a
            href="https://developers.google.com/blockly"
            style={{ color: "#3d5c82", fontWeight: "600" }}
          >
            Blockly
          </a>{" "}
          JavaScript library to build a block-based visual programming editor
          within our user interface. Programs created through the visual
          programming editor can be compiled into Arduino executable code and
          uploaded directly onto a student's Arduino. These programs, once
          uploaded to the student's Arduino, provide support in performing a
          corresponding science project in the classroom.
        </p>
        <div id="divider" style={dividerStyle} />
        <h1 id="secondary-title" style={secondaryTitleStyle}>
          Our Team
        </h1>
        <p style={paragraphStyle}>
          The following team members from the University of Florida have
          contributed to the design, development, and evaluation of the CASMM
          application:
          <br />
          <br />
          Dr. Sharon Chu
          <br />
          Dr. Christina Gardner-McCune
          <br />
          Pedro Feijóo-García
          <br />
          Sarah Brown
          <br />
          Nicholas Ionata
          <br />
          Dakota Rennemann
          <br />
          Megha Nagarmunoli
          <br />
          Adam Tamargo
          <br />
          Gus Segovia
          <br />
          Lily Hinkeldey
          <br />
          Siyu Chen
          <br />
          Anna Le
          <br />
          Yerika Jimenez
          <br />
          Siyu Chen
          <br />
          Michael Pascuzzi
          <br />
          David Magda
        </p>
      </div>
    </div>
  );
}
