import React from "react"
import NSF from "../../assets/nsf_logo.png"
import TAMU from "../../assets/tamu_logo.png"
import UF from "../../assets/uf_logo.png"
import NavBar from "../../components/NavBar/NavBar"
import "./FAQs.less"

const faqs = [
  {
    question: "1. Can I access CASMM from my handheld device (mobile/tablet)?",
    answer: "A- Yes, CASMM is accessible through different devices like tablets, 11.5-17 inch laptop screens.",
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
    answer: "A- Yes, cookies enable the user to resume their work from a previous session.\n" +
    "The accounts are currently accessible using a secure student password.\n" +
    "However, additional security measures are being implemented."
  },
  {
    question: "5. Is CASMM screen-reader friendly?",
    answer: "A- Yes, CASMM supports screen-reader software.",
  },
];

export default function FAQs() {
  return (
    <div className="container nav-padding">
      <NavBar />
      <div className="faq-section">
      <h1 id="title" class="white-text">FREQUENTLY ASKED QUESTIONS</h1>

        <div className="faq-box">
          <ul>
            {faqs.map((faq, index) => (
              <li key={index}>
                <strong>{faq.question}</strong>
                <p>{faq.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}