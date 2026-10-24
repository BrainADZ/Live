"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faq as styles } from "./tailwind";

const questions = [
  {
    question: "How easy is it to set up BrainADZ ERP?",
    answer:
      "We start by understanding your departments, workflows and existing data. Modules, access and reporting are then planned and configured, with testing and implementation guidance according to the agreed scope.",
  },
  {
    question: "Does BrainADZ ERP support workflow automation?",
    answer:
      "Yes. Approval stages, task routing, responsibilities and notifications can be configured around your purchasing, sales and operational processes, based on your project requirements.",
  },
  {
    question: "Can I customize BrainADZ ERP to fit my business?",
    answer:
      "Yes. Modules, fields, workspaces, dashboards and role-based access can be planned around the way your business works. The required configuration and development are agreed during discovery.",
  },
  {
    question: "What kind of support is available?",
    answer:
      "Implementation guidance and handover are planned as part of your project. Ongoing maintenance, training and support arrangements can be discussed with the BrainADZ team and included in the agreed scope.",
  },
  {
    question: "Can I migrate from another ERP?",
    answer:
      "Yes. Migration can be planned from existing software, spreadsheets or databases. We assess the source format, data quality and mapping requirements before agreeing the migration scope.",
  },
];

export default function ERPFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(
    questions.length - 1,
  );

  return (
    <section
      className={styles.faq}
      id="erp-faq"
      aria-labelledby="erp-faq-heading"
    >
      <div className={styles.inner}>
        <h2 id="erp-faq-heading">Frequently Asked Questions</h2>

        <div className={styles.card}>
          {questions.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={styles.item}
                key={question}
              >
                <h3>
                  <button
                    type="button"
                    className={styles.question}
                    id={`erp-faq-question-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`erp-faq-answer-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{question}</span>
                    {isOpen ? (
                      <Minus
                        size={20}
                        aria-hidden="true"
                      />
                    ) : (
                      <Plus
                        size={20}
                        aria-hidden="true"
                      />
                    )}
                  </button>
                </h3>

                <div
                  className={styles.answer}
                  id={`erp-faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`erp-faq-question-${index}`}
                  hidden={!isOpen}
                >
                  <p>{answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
