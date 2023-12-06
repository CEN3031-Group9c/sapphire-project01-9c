import React, { useEffect } from 'react';
import './Translation.less';

export default function Translation() {
  useEffect(() => {
    let addScript = document.createElement('script');
    addScript.setAttribute(
        'src',
        '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'en',
      },
      'google_translate_element'
    );
  };
  
  const storeLanguage = () => {
    localStorage.setItem("lang", document.getElementsByClassName('goog-te-combo')[0].value);
  }

  const changeNavBar = () => {
    let selectedLanguage = localStorage.getItem("lang")
  
    if (selectedLanguage != "") {
      document.getElementById('navBar').style.marginTop = '40px';
    }
    else {
      document.getElementById('navBar').style.marginTop = '0px';
    }
  };

  window.setInterval(function() { // Dynamically changes webpage based on if translation is active
    if (window.location.pathname == "/settings") {
      storeLanguage();
    }
    else {
      if (document.body.style.top == '0px') {
        document.getElementById('navBar').style.marginTop = '0px';
      }
    }
    
    if (document.body.style.top == '0px') {
      document.getElementById('navBar').style.marginTop = '0px';
    }
    else {
      changeNavBar();
    }
  }, 500);

  return (
    <div id="google_translate_element">Translation:</div>
  );
};
