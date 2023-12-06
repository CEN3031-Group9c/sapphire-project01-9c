import React from "react";
import './Footer.less';

import { Link, useNavigate } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import { removeUserSession } from '../../Utils/AuthRequests';
import { useGlobalState } from '../../Utils/userState';
import { Select } from 'antd'; 
import { useSettings } from '../../settingsContext';


import { ImGithub } from "react-icons/im";
import uf_logo from "../../assets/uf_logo.png";
import CodeSparks_logo from "../../assets/CodeSparks_logo.png";





const Footer = () => {
  return (
    <div id = "Footer">
      <div className= "grid-layout">
        <div id="logo_container">
          <img id="uf_logo" src={uf_logo} alt="uf" />
          <img id="code_sparks" src={CodeSparks_logo} alt="uf" />
          <a href="https://github.com/CEN3031-Group9c/sapphire-project01-9c">
            <ImGithub className="github" size={75} />
          </a>
        </div>
        <div>
          <h2 className="contact_title">Contact Us</h2>
          <div className="contact_content">
            <p>
              University of Florida <br />
              Gainesville, FL 32611
            </p>
            <p>Phone: 000-000-0000</p>
            <p>e-mail: placeholder@gmail.com</p>
          </div>
        </div>
        {/* <div>
          <h2 className="profile_title">Profile</h2>
          <div className="content_container">
            <p className="profile_content">
              <span className="text-lg">
                <BsPersonFill />
              </span>
              My Profile
            </p>
            <p className="help_content">
              <span className="text-lg">
              <i className='fa fa-question-circle' />
              </span>
              Help & support
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;