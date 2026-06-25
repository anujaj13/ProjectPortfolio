export interface Technology {
  name: string;
  category: 'rpa' | 'platform' | 'integration' | 'analytics';
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  client_type: string;
  domain: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  technologies: Technology[];
  tags: string[];
  complexity: 'Critical' | 'High' | 'Medium';
  status: string;
  icon: string;
  accent_color: string;
}

export interface Developer {
  name: string;
  title: string;
  tagline: string;
  experience_years: number;
  certifications: string[];
  skills: string[];
  about: string;
  stats: {
    projects_delivered: number;
    bots_in_production: number;
    annual_hours_saved: string;
    accuracy_rate: string;
    uptime: string;
    cost_savings: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Electronic Data Interchange Order Error Block",
    subtitle: "EDI Order Error Resolution & Global Supply Chain Automation",
    client_type: "Global Client",
    domain: "Supply Chain / SAP",
    description: "A mission-critical automation deployed for a global client to intelligently detect, triage, and resolve EDI order error blocks within SAP — eliminating manual intervention in international supply chain workflows.",
    challenge: "EDI order failures were creating downstream supply chain disruptions across multiple global regions. Manual resolution required SAP expertise and averaged 45–60 minutes per error block, with hundreds of incidents weekly.",
    solution: "Built an Automation Anywhere bot that polls SAP transaction ME22N/ME2M for blocked orders, classifies error types via rule-based logic, auto-resolves common EDI mapping mismatches, escalates edge cases with enriched context, and updates the ticketing system — all within a sub-5-minute SLA.",
    outcome: "98% straight-through processing rate achieved. Average handling time reduced from 52 minutes to under 4 minutes. Bot operates 24/7 across global time zones.",
    technologies: [
      { name: "Automation Anywhere A360", category: "rpa" },
      { name: "SAP ECC / S4HANA", category: "platform" },
      { name: "EDI X12 / EDIFACT", category: "integration" },
      { name: "REST API", category: "integration" },
      { name: "ServiceNow", category: "integration" },
      { name: "Python (Bot Logic)", category: "rpa" },
    ],
    tags: ["SAP", "EDI", "Supply Chain", "Global", "Error Handling"],
    complexity: "Critical",
    status: "Live — 24/7 Production",
    icon: "🔗",
    accent_color: "#FF6B35",
  },
  {
    id: 2,
    title: "Accounts Receivable Automation",
    subtitle: "End-to-End AR Processing & Reconciliation in SAP",
    client_type: "Enterprise",
    domain: "Finance / SAP",
    description: "Comprehensive automation of the Accounts Receivable lifecycle — from invoice posting and cash application to dunning letter dispatch and aging report generation — integrated directly with SAP FI module.",
    challenge: "Finance teams were spending 60% of their bandwidth on manual AR tasks: matching payments, chasing overdue accounts, and generating aging reports. Month-end close was consistently delayed.",
    solution: "Developed a multi-bot framework using Automation Anywhere that handles incoming payment files, executes SAP T-codes (F-28, FB05, FBL5N) for cash application, generates and dispatches customer dunning letters, and produces real-time AR dashboards for the CFO office.",
    outcome: "Days Sales Outstanding (DSO) reduced by 18 days. Month-end close accelerated by 2 business days. Zero manual payment matching errors since deployment.",
    technologies: [
      { name: "Automation Anywhere A360", category: "rpa" },
      { name: "SAP FI Module", category: "platform" },
      { name: "SAP BAPI / RFC", category: "integration" },
      { name: "Outlook / SMTP", category: "integration" },
      { name: "Excel VBA", category: "analytics" },
    ],
    tags: ["SAP", "Finance", "AR", "Cash Application", "Dunning"],
    complexity: "High",
    status: "Live — Production",
    icon: "💰",
    accent_color: "#00C9A7",
  },
  {
    id: 3,
    title: "Revenue Reconciliation & Forecast",
    subtitle: "Automated Revenue Analytics, Reconciliation & BI Reporting",
    client_type: "Enterprise",
    domain: "Finance / Analytics",
    description: "An intelligent automation pipeline that extracts multi-source revenue data, reconciles figures against GL entries, performs variance analysis, and populates Power BI dashboards with forecasting models — replacing a 3-day manual monthly process.",
    challenge: "Revenue data was siloed across Excel workbooks, SQL databases, and SAP. Monthly reconciliation took a team of 4 analysts three full days, and forecast accuracy suffered due to stale data.",
    solution: "Built an AA bot pipeline that queries SQL databases for transactional data, extracts SAP revenue postings, consolidates into a master Excel model with automated variance flagging, refreshes Power BI semantic models via REST API, and triggers exception-based email alerts for stakeholders.",
    outcome: "Reconciliation time reduced from 3 days to 4 hours. Forecast data latency reduced from monthly to daily. Variance exceptions caught 2.3% more discrepancies than manual review.",
    technologies: [
      { name: "Automation Anywhere A360", category: "rpa" },
      { name: "Microsoft Excel / VBA", category: "analytics" },
      { name: "Power BI REST API", category: "analytics" },
      { name: "SQL Server / T-SQL", category: "integration" },
      { name: "SAP BW", category: "platform" },
      { name: "Python (Pandas)", category: "rpa" },
    ],
    tags: ["Excel", "Power BI", "SQL", "Revenue", "Forecasting", "Analytics"],
    complexity: "High",
    status: "Live — Production",
    icon: "📊",
    accent_color: "#7B61FF",
  },
  {
    id: 4,
    title: "Sales Order Creation Automation",
    subtitle: "High-Volume SAP Sales Order Processing from Multiple Channels",
    client_type: "Enterprise",
    domain: "Sales Operations / SAP",
    description: "Automated end-to-end Sales Order creation in SAP SD from diverse input channels — email attachments, EDI feeds, and web portal exports — with intelligent validation, pricing checks, and customer master data verification before order submission.",
    challenge: "Sales operations teams were manually keying hundreds of orders daily from email PDFs and spreadsheets into SAP VA01. Data entry errors caused order rejections and customer escalations.",
    solution: "Deployed an AA bot with IQ Bot (intelligent document processing) to extract order data from unstructured PDFs and emails, validate against customer master/pricing conditions in SAP, create orders via VA01/BAPI_SALESORDER_CREATEFROMDAT2, and send confirmation notifications to customers and internal teams.",
    outcome: "Order processing capacity increased 5x without additional headcount. Error rate dropped from 3.2% to 0.1%. Order-to-confirmation cycle time reduced from 4 hours to 12 minutes.",
    technologies: [
      { name: "Automation Anywhere A360", category: "rpa" },
      { name: "IQ Bot (Intelligent Document Processing)", category: "rpa" },
      { name: "SAP SD Module", category: "platform" },
      { name: "SAP BAPI", category: "integration" },
      { name: "Outlook Automation", category: "integration" },
      { name: "OCR Engine", category: "rpa" },
    ],
    tags: ["SAP", "Sales", "Order Management", "IQ Bot", "OCR"],
    complexity: "High",
    status: "Live — Production",
    icon: "🛒",
    accent_color: "#F7B731",
  },
  {
    id: 5,
    title: "Statement Generation — AP (Annual / Quarterly / Monthly)",
    subtitle: "Automated Accounts Payable Statement Generation & Distribution",
    client_type: "Enterprise",
    domain: "Finance / SAP",
    description: "A scheduled automation that generates vendor account statements at annual, quarterly, and monthly intervals from SAP AP, formats them per vendor-specific templates, and distributes them via secure email with audit trail logging.",
    challenge: "AP teams manually pulled vendor balances from SAP FBL1N, formatted statements in Excel, and emailed hundreds of vendors — a process taking 2–3 days per cycle with frequent formatting inconsistencies.",
    solution: "Created a time-triggered AA bot that authenticates into SAP, executes FBL1N for each vendor scope, generates formatted PDF statements using a master template, archives to SharePoint, and dispatches personalized emails with digital signatures and remittance details.",
    outcome: "Statement generation cycle reduced from 3 days to 2 hours. 100% formatting consistency achieved. Vendor dispute resolution improved 40% due to timely, accurate statements.",
    technologies: [
      { name: "Automation Anywhere A360", category: "rpa" },
      { name: "SAP FI-AP Module", category: "platform" },
      { name: "SAP FBL1N / F110", category: "platform" },
      { name: "PDF Generation", category: "rpa" },
      { name: "SharePoint Online", category: "integration" },
      { name: "Outlook / Exchange", category: "integration" },
    ],
    tags: ["SAP", "Accounts Payable", "Statement Generation", "Vendor Management"],
    complexity: "Medium",
    status: "Live — Production",
    icon: "📄",
    accent_color: "#26C6DA",
  },
  {
    id: 6,
    title: "Leave / Resignation / Termination Notifications",
    subtitle: "HR Lifecycle Event Automation in Oracle HCM",
    client_type: "Enterprise",
    domain: "Human Resources / Oracle",
    description: "An HR process automation that detects employee lifecycle events — approved leave, resignation submissions, and termination actions — in Oracle HCM and triggers a coordinated downstream notification and access management workflow.",
    challenge: "HR events required manual communication across IT (access revocation), Payroll, Facilities, and Line Managers. Delays caused security gaps, payroll errors, and onboarding/offboarding friction.",
    solution: "Built an event-driven AA bot monitoring Oracle HCM for status changes. Upon detection, the bot reads employee records, generates role-specific notifications for relevant departments, triggers IT access workflows via ServiceNow, and updates the HR audit log — all within a 15-minute SLA.",
    outcome: "Cross-departmental notification time reduced from 48 hours to under 15 minutes. IT access revocation compliance reached 100%. Zero payroll discrepancy incidents post-deployment.",
    technologies: [
      { name: "Automation Anywhere A360", category: "rpa" },
      { name: "Oracle HCM", category: "platform" },
      { name: "Oracle REST API", category: "integration" },
      { name: "ServiceNow Integration", category: "integration" },
      { name: "Microsoft Teams Webhook", category: "integration" },
      { name: "Active Directory", category: "integration" },
    ],
    tags: ["Oracle", "HR", "Offboarding", "Notifications", "Access Management"],
    complexity: "High",
    status: "Live — Production",
    icon: "👤",
    accent_color: "#EF5350",
  },
  {
    id: 7,
    title: "Notification of Change — HR Data Modification",
    subtitle: "Real-Time Oracle HCM Data Change Detection & Audit Notification",
    client_type: "Enterprise",
    domain: "Human Resources / Oracle",
    description: "A continuous monitoring automation that detects unauthorized or scheduled data modifications in Oracle HCM (role changes, compensation updates, reporting line changes) and triggers real-time alerts with a full audit trail to HR compliance and line managers.",
    challenge: "Data integrity in Oracle HCM was compromised by untracked changes made outside of formal approval workflows. Compliance audits revealed gaps in notification and documentation of sensitive HR data changes.",
    solution: "Deployed an AA bot running on a scheduled polling cycle against Oracle HCM change logs. Using delta-comparison logic, the bot identifies field-level modifications, cross-references the approval matrix, generates structured change notification emails with before/after snapshots, and logs all events to a compliance SharePoint register.",
    outcome: "HR data compliance audit score improved from 71% to 98%. Change notification latency reduced from days to minutes. Full audit trail achieved for 100% of sensitive field modifications.",
    technologies: [
      { name: "Automation Anywhere A360", category: "rpa" },
      { name: "Oracle HCM REST API", category: "platform" },
      { name: "Delta Comparison Logic", category: "rpa" },
      { name: "SharePoint (Audit Log)", category: "integration" },
      { name: "Outlook Notifications", category: "integration" },
      { name: "Power Automate", category: "integration" },
    ],
    tags: ["Oracle", "HR", "Compliance", "Audit", "Data Governance"],
    complexity: "High",
    status: "Live — Production",
    icon: "🔔",
    accent_color: "#AB47BC",
  },
  {
    id: 8,
    title: "Occupational Health & Wellbeing — Triage Management",
    subtitle: "Automated Medical Triage Workflow via SharePoint Forms",
    client_type: "Healthcare / Corporate",
    domain: "Medical / SharePoint",
    description: "A sensitive and compliance-aware automation that processes occupational health referral submissions from SharePoint Forms, triages cases by urgency, routes to appropriate medical personnel, schedules consultations, and maintains confidential records — fully GDPR and health data compliant.",
    challenge: "Occupational health referrals were handled via email chains, causing delays in triage, missed urgent cases, and non-compliant handling of sensitive medical data. No audit trail existed.",
    solution: "Engineered an AA bot integrated with SharePoint Online that captures form submissions, applies a clinical triage scoring model to classify urgency (Urgent/Routine/Wellness), assigns to the correct health professional queue, sends encrypted acknowledgment to the employee, books calendar appointments via Outlook, and stores anonymized records in a secure SharePoint library.",
    outcome: "Urgent case response time reduced from 6 hours to 30 minutes. 100% GDPR compliance maintained. Employee satisfaction with OH services increased 35%.",
    technologies: [
      { name: "Automation Anywhere A360", category: "rpa" },
      { name: "SharePoint Online Forms", category: "platform" },
      { name: "SharePoint REST API", category: "integration" },
      { name: "Microsoft Graph API", category: "integration" },
      { name: "Outlook Calendar Automation", category: "integration" },
      { name: "Triage Scoring Algorithm", category: "rpa" },
    ],
    tags: ["SharePoint", "Medical", "Triage", "GDPR", "Healthcare", "Wellbeing"],
    complexity: "Critical",
    status: "Live — Production",
    icon: "🏥",
    accent_color: "#00E676",
  },
  {
    id: 9,
    title: "Gas Tender Management",
    subtitle: "Agentic Process Automation for End-to-End Gas Procurement",
    client_type: "Energy / Utilities",
    domain: "Procurement / Agentic AI",
    description: "A next-generation Agentic Process Automation (APA) solution for gas tender management — an AI-driven autonomous agent that monitors market conditions, collects supplier bids, performs comparative analysis, negotiates within defined parameters, and executes procurement decisions with minimal human oversight.",
    challenge: "Gas procurement involved fragmented manual processes: monitoring tender portals, collecting and comparing bids from 15+ suppliers, regulatory compliance checks, and time-sensitive bid submission — all requiring expert knowledge and constant availability.",
    solution: "Architected an Agentic automation using Automation Anywhere's AARI + AI Sense with an LLM reasoning layer. The agent autonomously monitors gas exchange portals, ingests and normalizes supplier bids, runs multi-criteria decision analysis, drafts procurement recommendations, seeks human-in-the-loop approval for high-value decisions, and executes approved tenders — with full decision auditability.",
    outcome: "Tender processing capacity increased 8x. Procurement cost savings of 12% achieved through faster bid comparison and optimal timing. Agent handles 85% of tenders autonomously.",
    technologies: [
      { name: "Automation Anywhere A360 + AARI", category: "rpa" },
      { name: "Agentic Process Automation", category: "rpa" },
      { name: "LLM Reasoning Layer (GPT-4)", category: "rpa" },
      { name: "AI Sense / Computer Vision", category: "rpa" },
      { name: "Web Scraping / Portal Integration", category: "integration" },
      { name: "Multi-Criteria Decision Analysis", category: "analytics" },
      { name: "Human-in-the-Loop (HITL)", category: "rpa" },
    ],
    tags: ["Agentic AI", "Procurement", "Energy", "LLM", "Autonomous", "AARI"],
    complexity: "Critical",
    status: "Live — Agentic Production",
    icon: "⚡",
    accent_color: "#FF9800",
  },
];

export const DEVELOPER: Developer = {
  name: "Anuj Kumar",
  title: "Senior RPA Developer",
  tagline: "Architecting Intelligent Automation — Transforming Enterprise Operations at Scale",
  experience_years: 5,
  certifications: [
    "Automation Anywhere Certified Advanced RPA Professional",
    "Automation Anywhere Certified Master RPA Professional",
    "Microsoft Power Platform Fundamentals",
  ],
  skills: [
    "Automation Anywhere A360", "IQ Bot", "AARI", "Bot Insight",
    "SAP (FI, SD, MM, BW)", "Oracle HCM", "SharePoint Online",
    "Python", "SQL / T-SQL", "Power BI", "REST API", "ServiceNow",
    "Process Mining", "Agentic AI", "BPMN", "Git",
  ],
  about: "Senior RPA Developer with 5+ years specialising in enterprise-scale intelligent automation across Finance, HR, Supply Chain, and Healthcare domains. Expert in Automation Anywhere A360 with a track record of delivering high-impact bots that handle millions of transactions annually. Passionate about pushing the boundaries of what's possible — from traditional rule-based RPA to next-generation Agentic Process Automation.",
  stats: {
    projects_delivered: 9,
    bots_in_production: 24,
    annual_hours_saved: "18,000+",
    accuracy_rate: "99.7%",
    uptime: "99.9%",
    cost_savings: "$2.4M+",
  },
};
