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

  return (
    <div id="google_translate_element"></div>
  );
};
