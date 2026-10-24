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
    questions.length - 1,
  );

  return (
    <section
      className="bg-[#fff3e0] py-11 text-[#171a2d] md:pt-15 md:pb-12"
      id="erp-faq"
      aria-labelledby="erp-faq-heading"
    >
      <div className="mx-auto w-full max-w-283.5 px-4 md:px-8">
        <h2
          className="mx-auto mb-9 text-center text-[clamp(29px,6vw,36px)] leading-[1.2] font-semibold tracking-[-0.7px] md:mb-18 md:text-[clamp(32px,3vw,44px)] md:tracking-[-1px]"
          id="erp-faq-heading"
        >
          Frequently Asked Questions
        </h2>

        <div className="mx-auto max-w-220 rounded-xl bg-white px-5.5 pt-1 pb-2 md:px-9 md:pt-3 md:pb-4.5">
          {questions.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className="border-b border-[#e2e2e2] last:border-b-0"
                key={question}
              >
                <h3 className="m-0">
                  <button
                    type="button"
                    className="group flex min-h-20.5 w-full items-center justify-between gap-4 bg-transparent py-5.5 text-left text-[19px] leading-[1.4] font-normal text-[#080808] md:min-h-23.5 md:gap-6 md:py-6.75 md:text-[clamp(21px,2vw,26px)]"
                    id={`erp-faq-question-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`erp-faq-answer-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="group-hover:text-[#193175]">
                      {question}
                    </span>
                    {isOpen ? (
                      <Minus
                        className="size-4.5 shrink-0 stroke-[1.8] text-[#858585] md:size-5"
                        size={20}
                        aria-hidden="true"
                      />
                    ) : (
                      <Plus
                        className="size-4.5 shrink-0 stroke-[1.8] text-[#858585] md:size-5"
                        size={20}
                        aria-hidden="true"
                      />
                    )}
                  </button>
                </h3>

                <div
                  className="pb-5.5 md:pr-10 md:pb-6.75"
                  id={`erp-faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`erp-faq-question-${index}`}
                  hidden={!isOpen}
                >
                  <p className="-mt-1.5 text-[15px] leading-[1.65] font-normal text-[#151515] md:-mt-3 md:text-[17px]">
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
