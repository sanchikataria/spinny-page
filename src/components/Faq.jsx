import React, { useState } from 'react';
import '../styles/Faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questionsAnswers = [
    {
      question: "How is my loan eligibility determined?",
      answer: "Your eligibility for a car loan from Spinny is determined on the basis of parameters such as:\n- Income\n- Type of residence ownership\n- Past credit and banking history\n- Credit score maintained by an accredited credit rating agency"
    },
    {
      question: "What factors impact my pre-owned car loan interest rate?",
      answer: "The interest rate for your pre-owned car loan can be influenced by factors such as your credit score, loan amount, loan tenure, and your past credit history."
    },
    {
      question: "How much of the car’s price can I finance?",
      answer: "You can typically finance up to 80-90% of the car’s price, depending on your eligibility and the lender’s policies."
    },
    {
      question: "I have not decided on a car, can I get a pre-approved loan?",
      answer: "Yes, you can get a pre-approved loan based on your eligibility. This can help you know your loan amount in advance and make a better decision while choosing a car."
    },
    {
      question: "What if I take a loan and return my car back in the 5-day guarantee period?",
      answer: "If you return the car within the 5-day guarantee period, the loan process will be canceled, and you will not be liable for any payments."
    },
    {
      question: "What are the tenure options available for used car loans?",
      answer: "The tenure options for used car loans typically range from 1 to 7 years, depending on the lender’s policies and your eligibility."
    },
    {
      question: "Are there any tax benefits on car loans?",
      answer: "Yes, there are certain tax benefits available on car loans. For example, self-employed individuals can claim tax deductions on the interest paid on a car loan."
    }
  ];

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      {questionsAnswers.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            {item.question}
          </div>
          {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default Faq;
