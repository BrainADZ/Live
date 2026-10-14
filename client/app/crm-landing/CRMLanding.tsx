/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check, CheckCircle2, ChartNoAxesCombined, ContactRound, GitBranch, LayoutDashboard, Link2, ShieldCheck, UsersRound } from "lucide-react";
import PopupForm from "@/components/PopupForm";
import styles from "./landing.module.css";

const modules = [
  { icon: ContactRound, title: "Every customer. One place.", text: "Keep contacts, enquiries, notes and activity history connected, so your team has the context for every conversation." },
  { icon: GitBranch, title: "A pipeline you can follow.", text: "See where each opportunity stands, who owns it and what needs to happen next." },
  { icon: UsersRound, title: "A more connected team.", text: "Assign responsibilities, plan follow-ups and keep everyone working from the same customer information." },
  { icon: ChartNoAxesCombined, title: "Clarity beyond the numbers.", text: "Review configured reports and dashboards to understand pipeline progress and team activity." },
];
const questions = [
  ["Can the CRM fit our existing sales process?", "Yes. BrainADZ can plan stages, fields, team responsibilities, activities and reporting around your sales process. The exact configuration is agreed during discovery."],
  ["Can we connect our website and other business tools?", "Integrations can be planned for website forms, email services, messaging APIs, ERP and other systems where compatible APIs or technical interfaces are available."],
  ["Can we move our existing customer data?", "Share your current data format and source system during discovery. The team can assess data mapping, cleanup and migration requirements as part of the project scope."],
  ["Can different teams have different access?", "User access can be configured around team roles, responsibilities and the information each user needs to view or manage."],
  ["How do we get started, and what does it cost?", "Request a demo and tell us about your team and workflow. BrainADZ will discuss requirements, implementation scope and pricing with you before you proceed."],
];

function DashboardPreview({ compact = false }: { compact?: boolean }) {
  return <div className={`${styles.dashboard} ${compact ? styles.compactDashboard : ""}`} aria-label="Illustrative CRM dashboard with sample data">
    {!compact && <aside className={styles.dashboardSidebar}><strong>BrainADZ<span>CRM WORKSPACE</span></strong><span className={styles.sidebarSelected}><LayoutDashboard size={15} /> Overview</span><span><ContactRound size={15} /> Contacts</span><span><GitBranch size={15} /> Pipeline</span><span><UsersRound size={15} /> Activities</span><span><ChartNoAxesCombined size={15} /> Reports</span><small>ILLUSTRATIVE PREVIEW</small></aside>}
    <div className={styles.dashboardBody}><div className={styles.dashboardTitle}><div><small>YOUR WORKSPACE AT A GLANCE</small><h3>Sales overview</h3></div><span>Sample data · This month</span></div><div className={styles.metrics}>{[["Active leads", "128", "Across your pipeline"], ["Open opportunities", "42", "Ready for the next step"], ["Follow-ups planned", "18", "Keep conversations moving"]].map(([label, value, caption]) => <div key={label}><span>{label}</span><strong>{value}</strong><small>{caption}</small></div>)}</div><div className={styles.dashboardCharts}><div className={styles.chartCard}><h4>Pipeline overview <span>By stage</span></h4><div className={styles.barChart}>{[["New", 78], ["Qualified", 61], ["Follow-up", 88], ["Proposal", 48], ["Won", 35]].map(([label, height]) => <div key={label}><span style={{ height: `${height}%` }} /><small>{label}</small></div>)}</div></div><div className={styles.chartCard}><h4>Next on your list <span>Planned</span></h4>{[["AS", "Follow up on enquiry", "Sales team · Today"], ["RK", "Review customer requirements", "Discovery · Today"], ["PM", "Prepare a proposal", "Opportunity · Tomorrow"]].map(([initials, title, sub]) => <div className={styles.sampleTask} key={initials}><span>{initials}</span><div><strong>{title}</strong><small>{sub}</small></div><CheckCircle2 size={14} /></div>)}</div></div></div>
  </div>;
}

const sections = [
  { id: "crm-overview", label: "Overview" },
  { id: "crm-features", label: "Features" },
  { id: "crm-workflow", label: "Workflow" },
  { id: "crm-insights", label: "Insights" },
  { id: "crm-comparison", label: "Comparison" },
  { id: "crm-faq", label: "FAQs" },
  { id: "crm-get-started", label: "Get started" },
];

export default function CRMLanding() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    let frame = 0;
    const updateSection = () => {
      const header = document.getElementById("crm-section-header");
      const sectionBar = document.getElementById("crm-section-navigation");
      const offset = (header?.getBoundingClientRect().height ?? 84) + (sectionBar?.getBoundingClientRect().height ?? 54) + 24;
      let current = sections[0].id;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= offset) current = section.id;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) current = sections[sections.length - 1].id;
      setActiveSection(current);
    };
    const scheduleUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateSection);
    };
    updateSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  useEffect(() => {
    const link = document.querySelector<HTMLAnchorElement>(`[data-section-link="${activeSection}"]`);
    const nav = link?.parentElement;
    if (!link || !nav) return;
    const linkBounds = link.getBoundingClientRect();
    const navBounds = nav.getBoundingClientRect();
    if (linkBounds.left < navBounds.left) nav.scrollLeft -= navBounds.left - linkBounds.left;
    else if (linkBounds.right > navBounds.right) nav.scrollLeft += linkBounds.right - navBounds.right;
  }, [activeSection]);
  const stages = [
    { title: "Capture", label: "New enquiry received", text: "Collect contact details, the enquiry source and initial requirements in a structured customer record.", icon: ContactRound },
    { title: "Qualify", label: "Understand the opportunity", text: "Capture requirements, review the opportunity and move qualified leads into the right pipeline stage.", icon: ShieldCheck },
    { title: "Follow up", label: "Give every lead a next step", text: "Assign an owner, plan the next activity and keep notes linked to the opportunity.", icon: UsersRound },
    { title: "Close", label: "Keep progress in view", text: "Track proposals, negotiations and deal outcomes, retaining the information needed for your next business process.", icon: CheckCircle2 },
  ];
  const StageIcon = stages[activeStage].icon;
  return <main className={styles.page}>
    <header className={styles.sectionHeader} id="crm-section-header">
      <div className={styles.headerInner}>
        <a href="/" className={styles.landingBrand} aria-label="BrainADZ Live home"><img src="/logos/logo--22.png" alt="BrainADZLive Logo" /></a>
      </div>
    </header>
    <div className={styles.sectionBar} id="crm-section-navigation">
      <nav className={`${styles.shell} ${styles.sectionNav}`} aria-label="Landing page sections">{sections.map(({ id, label }) => <a key={id} href={`#${id}`} data-section-link={id} aria-current={activeSection === id ? "location" : undefined} className={activeSection === id ? styles.activeSection : ""} onClick={() => setActiveSection(id)}>{label}</a>)}</nav>
    </div>
    <section className={styles.hero} id="crm-overview">
      <div className={styles.shell}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <a className={styles.breadcrumb} href="/software-platforms">Software platforms <span>/</span> BrainADZ CRM</a>
            <div className={styles.productBadge}><span /> BUILT AROUND YOUR BUSINESS</div>
            <h1>Better relationships.<br /><span>Smarter sales.</span><br />One connected CRM.</h1>
            <p>Bring your leads, customers and sales team together. A CRM configured around the way you work—and where you want to go.</p>
            <div className={styles.heroActions}><button className={styles.primary} onClick={() => setDemoOpen(true)}>Explore the demo <ArrowRight size={18} /></button><a className={styles.textButton} href="#crm-features">Discover the features <ArrowRight size={17} /></a></div>
            <div className={styles.heroChecks}><span><Check size={15} /> Configurable workflows</span><span><Check size={15} /> Connected customer data</span><span><Check size={15} /> Implementation support</span></div>
          </div>
          <div className={styles.formCard} id="request-demo"><PopupForm isOpen embedded hideImage onClose={() => {}} /></div>
        </div>
        <div className={styles.preview}>
          <div className={styles.previewTop}><div><span className={styles.windowDot} /><span className={styles.windowDot} /><span className={styles.windowDot} /></div><span>YOUR SALES, WITH A CLEARER VIEW</span><LayoutDashboard size={16} /></div>
          <DashboardPreview />
          <div className={styles.previewCaption}><span><span className={styles.liveDot} /> Illustrative workspace · Sample data</span><button onClick={() => setDemoOpen(true)}>Take a walkthrough <ArrowRight size={16} /></button></div>
        </div>
      </div>
    </section>
    <div className={styles.capabilityStrip}><div className={styles.shell}><span>ONE WORKSPACE. MORE POSSIBILITIES.</span><span>Lead management</span><span>Sales pipelines</span><span>Customer history</span><span>Reports & insights</span></div></div>
    <section className={styles.section} id="crm-features"><div className={styles.shell}>
      <div className={styles.sectionHeading}><div><span className={styles.eyebrow}>LESS SCATTERED. MORE CONNECTED.</span><h2>Good relationships start<br />with a <em>clearer picture.</em></h2></div><p>Move beyond scattered spreadsheets and disconnected notes. Give your team a shared view of customers, opportunities and the next action.</p></div>
      <div className={styles.modules}>{modules.map(({ icon: Icon, title, text }, index) => <article key={title}><div className={styles.moduleTop}><Icon size={26} strokeWidth={1.5} /><span>0{index + 1}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>
    <section className={`${styles.section} ${styles.workflowSection}`} id="crm-workflow"><div className={styles.shell}>
      <div className={styles.workflowGrid}><div><span className={styles.eyebrow}>FROM FIRST HELLO TO THE NEXT OPPORTUNITY</span><h2>A sales process<br />that keeps <em>moving.</em></h2><p>Build stages around your business, give each opportunity an owner and make the next step clear. Explore a typical CRM journey.</p><div className={styles.stageTabs} role="tablist" aria-label="Sales workflow stages">{stages.map((stage, i) => <button key={stage.title} id={`stage-tab-${i}`} role="tab" aria-selected={i === activeStage} aria-controls="stage-panel" className={i === activeStage ? styles.activeTab : ""} onClick={() => setActiveStage(i)} onKeyDown={(event) => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); const next = (activeStage + (event.key === "ArrowRight" ? 1 : -1) + stages.length) % stages.length; setActiveStage(next); document.getElementById(`stage-tab-${next}`)?.focus(); } }} tabIndex={i === activeStage ? 0 : -1}>{String(i + 1).padStart(2, "0")}<span>{stage.title}</span></button>)}</div><button className={styles.textButton} onClick={() => setDemoOpen(true)}>Let’s map your workflow <ArrowRight size={17} /></button></div>
      <div className={styles.workflowVisual}><span className={styles.visualLabel}>ILLUSTRATIVE SALES WORKFLOW</span><div className={styles.flowNodes}>{stages.map((stage, i) => <div key={stage.title} className={i === activeStage ? styles.currentNode : ""}><stage.icon size={20} /><span>{stage.title}</span>{i < 3 && <ArrowRight className={styles.connector} size={16} />}</div>)}</div><div className={styles.stagePanel} id="stage-panel" role="tabpanel" aria-labelledby={`stage-tab-${activeStage}`}><div className={styles.stageIcon}><StageIcon size={27} /></div><span>STEP 0{activeStage + 1}</span><h3>{stages[activeStage].label}</h3><p>{stages[activeStage].text}</p><div className={styles.record}><span><span className={styles.liveDot} /> Customer record</span><strong>Contact · Owner · Activity · Next action</strong></div></div><div className={styles.workflowNote}><CheckCircle2 size={17} /> Your stages. Your responsibilities. Your process.</div></div></div>
    </div></section>
    <section className={styles.section} id="crm-insights"><div className={styles.shell}><div className={styles.insightGrid}><div className={styles.insightImage}><div className={styles.imageHeading}><ChartNoAxesCombined size={20} /><span>A clearer view of your business</span></div><DashboardPreview compact /><span className={styles.imageNote}>Illustrative preview · Sample data · Configuration varies by project</span></div><div><span className={styles.eyebrow}>MORE CONTEXT. BETTER DECISIONS.</span><h2>See the progress.<br /><em>Plan the next move.</em></h2><p>Make customer data useful for the people who need it. Configure views, access and reports around everyday decisions.</p><ul className={styles.featureList}><li><LayoutDashboard size={21} /><div><h3>Dashboards that answer your questions</h3><p>Review pipeline, activities and the indicators defined for your project.</p></div></li><li><ShieldCheck size={21} /><div><h3>The right information for the right people</h3><p>Plan access around team roles and responsibilities.</p></div></li><li><Link2 size={21} /><div><h3>Connections that make sense</h3><p>Plan integrations with compatible forms, communication tools and business systems.</p></div></li></ul><a className={styles.textButton} href="#request-demo">Talk about your requirements <ArrowRight size={17} /></a></div></div></div></section>
    <section className={`${styles.section} ${styles.comparison}`} id="crm-comparison"><div className={styles.shell}><div className={styles.centerHeading}><span className={styles.eyebrow}>A BETTER WAY TO WORK TOGETHER</span><h2>From scattered information<br />to a connected sales workspace.</h2><p>A practical comparison of everyday sales workflows.</p></div><div className={styles.tableWrap}><table><thead><tr><th scope="col">Your daily workflow</th><th scope="col">Spreadsheets & separate tools</th><th scope="col">A configured BrainADZ CRM</th></tr></thead><tbody>{[
      ["Customer information", "Spread across files, inboxes and notes", "Connected contacts and activity history"],
      ["Sales progress", "Manually updated sheets and status messages", "Defined stages, owners and next actions"],
      ["Follow-ups", "Personal reminders and separate task lists", "Activities linked to customer records"],
      ["Reporting", "Collect and reconcile information manually", "Configured reports using available CRM data"],
      ["Team access", "Sharing individual files and folders", "Access planned around team responsibilities"],
    ].map(([feature, before, after]) => <tr key={feature}><th scope="row">{feature}</th><td>{before}</td><td><span><CheckCircle2 size={17} />{after}</span></td></tr>)}</tbody></table></div><p className={styles.tableNote}>CRM features, integrations and implementation are agreed according to your project scope.</p></div></section>
    <section className={styles.section} id="crm-faq"><div className={styles.shell}><div className={styles.faqGrid}><div><span className={styles.eyebrow}>A LITTLE MORE CLARITY</span><h2>Good questions.<br /><em>Straight answers.</em></h2><p>Have something else in mind? Let’s talk through what your business needs.</p><a className={styles.textButton} href="/contact-us">Talk to our team <ArrowRight size={17} /></a></div><div className={styles.faqs}>{questions.map(([q, a], i) => <div key={q} className={styles.faqItem}><h3><button type="button" id={`faq-question-${i}`} aria-expanded={openFaq === i} aria-controls={`faq-answer-${i}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>{q}<span aria-hidden="true">{openFaq === i ? "−" : "+"}</span></button></h3><div id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-question-${i}`} hidden={openFaq !== i}><p>{a}</p></div></div>)}</div></div></div></section>
    <section className={styles.ctaSection} id="crm-get-started"><div className={styles.shell}><div className={styles.finalCta}><div><span className={styles.eyebrow}>YOUR NEXT CHAPTER STARTS HERE</span><h2>Make room for<br />better customer relationships.</h2><p>Let’s build a CRM that works the way your business does.</p></div><div><button className={styles.lightButton} onClick={() => setDemoOpen(true)}>Book a personal demo <ArrowRight size={19} /></button><span className={styles.ctaNote}>Built around your team. Supported by BrainADZ.</span></div></div></div></section>
    <footer className={styles.legalFooter}><div className={styles.shell}><span>© BrainADZ Live {new Date().getFullYear()} | All rights reserved.</span><nav aria-label="Legal policies"><a href="/privacy-policy?v=20261006">Privacy Policy</a><a href="/terms-and-conditions">Terms &amp; Conditions</a><a href="/return-policy">Return Policy</a></nav></div></footer>
    <PopupForm isOpen={demoOpen} onClose={() => setDemoOpen(false)} hideImage />
  </main>;
}
