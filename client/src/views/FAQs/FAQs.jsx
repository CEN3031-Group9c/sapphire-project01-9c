import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { useSettings } from "../../settingsContext"; // Import the settings context
import "../Help/Help.less";

const faqs = [
  {
    question: "1. Can I access CASMM from my handheld device (mobile/tablet)?",
    answer:
      "A- Yes, CASMM is accessible through different devices like tablets, 11.5-17 inch laptop screens.",
  },
  {
    question: "2. Can I work with CASSM without making an account?",
    answer: "A- Yes, users can have temporary access to our tools before they decide to register.",
  },
  {
    question: "3. Will unregistered users be allowed to save their work in the sandbox?",
    answer: "A- No.",
  },
  {
    question: "4. Does the site save cookies? If yes, how secure are the user accounts?",
    answer:
      "A- Yes, cookies enable the user to resume their work from a previous session.\n" +
      "The accounts are currently accessible using a secure student password.\n" +
      "However, additional security measures are being implemented.",
  },
  {
    question: "5. Is CASMM screen-reader friendly?",
    answer: "A- Yes, CASMM supports screen-reader software.",
  },
];

export default function FAQs() {
  const { settings } = useSettings();

  const answerStyle = {
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
  const titleStyle = {
    fontFamily: settings.fontFamily,
    fontSize: settings.fontSize,
    fontStyle: settings.fontStyle === 'italic' ? 'italic' : 'normal',
    color: settings.fontColor, 
  };


  return (
    <div className="container nav-padding">
      
      <div className="faq-section">
      
        <h1 id="title" className={`white-text ${settings.fontStyle}`} style={titleStyle}>
        <NavBar />
          <h1 id="title" className={`white-text ${settings.fontStyle}`} style={titleStyle}>FREQUENTLY ASKED QUESTIONS</h1>
        </h1>

        <div className="faq-box">
          <ul>
            {faqs.map((faq, index) => (
              <li key={index}>
                <strong style={answerStyle}>{faq.question}</strong>
                <p style={answerStyle}>{faq.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
