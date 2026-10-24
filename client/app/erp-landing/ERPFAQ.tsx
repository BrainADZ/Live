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
      className="bg-[#fff3e0] py-12 text-[#171a2d] md:pt-16"
      id="erp-faq"
      aria-labelledby="erp-faq-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <h2
          className="mb-10 text-center text-3xl leading-tight font-semibold tracking-tight md:mb-16 md:text-4xl lg:text-5xl"
          id="erp-faq-heading"
        >
          Frequently Asked Questions
        </h2>

        <div className="mx-auto max-w-4xl rounded-xl bg-white px-6 py-2 md:px-9 md:py-4">
          {questions.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            const Icon = isOpen ? Minus : Plus;

            return (
              <div
                className="border-b border-[#e2e2e2] last:border-b-0"
                key={question}
              >
                <h3 className="m-0">
                  <button
                    type="button"
                    className="group flex min-h-20 w-full items-center justify-between gap-4 bg-transparent py-6 text-left text-lg leading-snug font-normal text-[#080808] md:min-h-24 md:gap-6 md:py-7 md:text-2xl"
                    id={`erp-faq-question-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`erp-faq-answer-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="group-hover:text-[#193175]">
                      {question}
                    </span>
                    <Icon
                      className="size-5 shrink-0 text-[#858585]"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <div
                  className="pb-6 md:pr-10 md:pb-7"
                  id={`erp-faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`erp-faq-question-${index}`}
                  hidden={!isOpen}
                >
                  <p className="-mt-2 text-base leading-relaxed text-[#151515] md:text-lg">
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
