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
      className="erp-faq-faq [padding:60px_0_48px] [background:#fff3e0] [color:#171a2d] [&_h2]:[margin:0_auto_72px] [&_h2]:[color:#171a2d] [&_h2]:text-[clamp(32px,3vw,44px)] [&_h2]:font-semibold [&_h2]:[line-height:1.2] [&_h2]:[letter-spacing:-1px] [&_h2]:text-center max-[760px]:[padding:44px_0] max-[760px]:[&_h2]:[margin-bottom:36px] max-[760px]:[&_h2]:[font-size:clamp(29px,_6vw,_36px)] max-[760px]:[&_h2]:[letter-spacing:-0.7px]"
      id="erp-faq"
      aria-labelledby="erp-faq-heading"
    >
      <div className="erp-faq-inner [width:min(1070px,_calc(100%_-_64px))] [margin:auto] max-[760px]:[width:calc(100%_-_32px)]">
        <h2 id="erp-faq-heading">Frequently Asked Questions</h2>

        <div className="erp-faq-card [max-width:880px] [margin:auto] [padding:12px_36px_18px] [border-radius:12px] [background:#fff] max-[760px]:[padding:4px_22px_8px]">
          {questions.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className="erp-faq-item [border-bottom:1px_solid_#e2e2e2] [&:last-child]:[border-bottom:0] [&_h3]:[margin:0] [&_.erp-faq-question]:flex [&_.erp-faq-question]:items-center [&_.erp-faq-question]:justify-between [&_.erp-faq-question]:[gap:24px] [&_.erp-faq-question]:w-full [&_.erp-faq-question]:[min-height:94px] [&_.erp-faq-question]:[padding:27px_0] [&_.erp-faq-question]:[border:0] [&_.erp-faq-question]:[background:transparent] [&_.erp-faq-question]:[color:#080808] [&_.erp-faq-question]:[font-family:inherit] [&_.erp-faq-question]:[font-size:clamp(21px,_2vw,_26px)] [&_.erp-faq-question]:font-normal [&_.erp-faq-question]:leading-[1.4] [&_.erp-faq-question]:text-left max-[760px]:[&_.erp-faq-question]:[min-height:82px] max-[760px]:[&_.erp-faq-question]:[padding:22px_0] max-[760px]:[&_.erp-faq-question]:[gap:16px] max-[760px]:[&_.erp-faq-question]:[font-size:19px]"
                key={question}
              >
                <h3>
                  <button
                    type="button"
                    className="erp-faq-question [&_svg]:[flex-shrink:0] [&_svg]:[color:#858585] [&_svg]:[stroke-width:1.8] [&:hover_>_span]:[color:#193175] max-[760px]:[&_svg]:[width:18px] max-[760px]:[&_svg]:[height:18px]"
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
                  className="erp-faq-answer [padding:0_40px_27px_0] [&_p]:[margin:-12px_0_0] [&_p]:[color:#151515] [&_p]:[font-size:17px] [&_p]:font-normal [&_p]:[line-height:1.65] max-[760px]:[padding:0_0_22px] max-[760px]:[&_p]:[margin-top:-6px] max-[760px]:[&_p]:[font-size:15px]"
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
