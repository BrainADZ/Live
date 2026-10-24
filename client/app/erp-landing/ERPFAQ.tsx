
"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

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
    questions.length - 1
  );

  return (
    <section
      id="erp-faq"
      aria-labelledby="erp-faq-heading"
      className="
        erp-faq-faq
        bg-[#fff3e0]
        pt-15 pb-12
        text-[#171a2d]
        max-[760px]:py-11
      "
    >
      <div
        className="
          erp-faq-inner
          mx-auto
          w-full
          max-w-[1134px]
          px-8
          max-[760px]:px-4
        "
      >
        <h2
          id="erp-faq-heading"
          className="
            mx-auto
            mt-0 mb-18
            text-center
            text-[clamp(32px,3vw,44px)]
            leading-[1.2]
            font-semibold
            tracking-[-1px]
            text-[#171a2d]
            max-[760px]:mb-9
            max-[760px]:text-[clamp(29px,6vw,36px)]
            max-[760px]:tracking-[-0.7px]
          "
        >
          Frequently Asked Questions
        </h2>

        <div
          className="
            erp-faq-card
            mx-auto
            max-w-220
            rounded-xl
            bg-white
            px-9 pt-3 pb-4.5
            max-[760px]:px-5.5
            max-[760px]:pt-1
            max-[760px]:pb-2
          "
        >
          {questions.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={question}
                className="
                  erp-faq-item
                  border-b
                  border-[#e2e2e2]
                  last:border-b-0
                "
              >
                <h3 className="m-0">
                  <button
                    type="button"
                    id={`erp-faq-question-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`erp-faq-answer-${index}`}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="
                      erp-faq-question
                      flex
                      w-full
                      min-h-23.5
                      items-center
                      justify-between
                      gap-6
                      border-0
                      bg-transparent
                      py-6.75
                      text-left
                      text-[clamp(21px,2vw,26px)]
                      leading-[1.4]
                      font-normal
                      font-[inherit]
                      text-[#080808]
                      cursor-pointer
                      transition-colors
                      hover:text-[#193175]
                      [&_svg]:shrink-0
                      [&_svg]:text-[#858585]
                      [&_svg]:stroke-[1.8]
                      max-[760px]:min-h-20.5
                      max-[760px]:gap-4
                      max-[760px]:py-5.5
                      max-[760px]:text-[19px]
                      max-[760px]:[&_svg]:size-4.5
                    "
                  >
                    <span>{question}</span>

                    {isOpen ? (
                      <Minus size={20} aria-hidden="true" />
                    ) : (
                      <Plus size={20} aria-hidden="true" />
                    )}
                  </button>
                </h3>

                <div
                  id={`erp-faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`erp-faq-question-${index}`}
                  hidden={!isOpen}
                  className="
                    erp-faq-answer
                    pr-10
                    pb-6.75
                    max-[760px]:pr-0
                    max-[760px]:pb-5.5
                  "
                >
                  <p
                    className="
                      -mt-3
                      mb-0
                      text-[17px]
                      leading-[1.65]
                      font-normal
                      text-[#151515]
                      max-[760px]:-mt-1.5
                      max-[760px]:text-[15px]
                    "
                  >
                    {answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
