/**
 * Content for the automation-platform marketing site.
 * Kept separate from the components so sections stay reusable and this
 * can move behind a CMS without touching layout.
 */

export const problems = [
  { title: 'Missed leads', body: 'Enquiries arrive at 11 PM and get seen at 11 AM.' },
  { title: 'Slow responses', body: 'The business that replies first usually wins the deal.' },
  { title: 'Forgotten follow-ups', body: 'Most deals need several touches. Most teams stop after one.' },
  { title: 'Manual data entry', body: 'The same customer typed into three different places.' },
  { title: 'Scattered information', body: "WhatsApp, Excel, email, and someone's notebook." },
  { title: 'Repetitive employee work', body: 'Skilled people spending their day on copy-paste.' },
  { title: 'Delayed approvals', body: "Work waits because one person hasn't seen a message." },
  { title: 'Poor visibility', body: 'You find out something broke a week after it broke.' },
] as const;

export const engines = [
  {
    tag: 'Engine 01',
    title: 'Customer & Growth Automation',
    summary: 'Everything that happens before and around a sale.',
    workflow: [
      'New lead',
      'Instant WhatsApp reply',
      'AI qualification',
      'AI voice call',
      'Appointment',
      'CRM',
      'Salesperson',
    ],
    capabilities: [
      'Lead capture',
      'WhatsApp automation',
      'AI chatbot',
      'AI qualification',
      'AI voice calling',
      'Follow-ups',
      'Appointment booking',
      'CRM',
      'Customer support',
      'Campaign automation',
    ],
  },
  {
    tag: 'Engine 02',
    title: 'Internal & Operations Automation',
    summary: 'Everything that keeps the business running after it.',
    workflow: ['Task', 'Employee', 'Approval', 'Inventory', 'Execution', 'Report'],
    capabilities: [
      'Task automation',
      'Workflow automation',
      'Employee workflows',
      'Approvals',
      'Inventory',
      'Document management',
      'Reports',
      'Dashboards',
      'Notifications',
      'Internal AI assistants',
      'Custom workflows',
    ],
  },
] as const;

export const departments = [
  { title: 'Marketing', body: 'Campaign sends, lead capture, enquiry routing, re-engagement.' },
  { title: 'Sales', body: 'Qualification, follow-up sequences, quotes, pipeline hygiene.' },
  { title: 'Customer support', body: 'First response, FAQs, ticket routing, status updates.' },
  { title: 'Operations', body: 'Order flow, inventory checks, dispatch, task assignment.' },
  { title: 'Finance', body: 'Invoices, payment reminders, reconciliation prep, expense flow.' },
  { title: 'HR', body: 'Onboarding checklists, leave and attendance, document collection.' },
  { title: 'Management', body: 'Daily reports, dashboards, exception alerts, approval chains.' },
] as const;

export const industries = [
  { title: 'Real Estate', body: 'Site-visit booking, buyer qualification, follow-up until closure.' },
  { title: 'Automobile', body: 'Test-drive scheduling, service reminders, showroom enquiries.' },
  { title: 'Retail', body: 'Order updates, stock alerts, loyalty and repeat-purchase flows.' },
  { title: 'Manufacturing', body: 'Job cards, production tracking, approvals, vendor coordination.' },
  { title: 'Wholesale', body: 'Bulk orders on WhatsApp, price lists, dispatch and ledgers.' },
  { title: 'Healthcare', body: 'Appointments, reminders, patient queries, follow-up care.' },
  { title: 'Education', body: 'Admission enquiries, counselling follow-ups, fee reminders.' },
  { title: 'Hospitality', body: 'Bookings, guest messaging, feedback and review requests.' },
  { title: 'Professional Services', body: 'Client intake, document collection, billing and reporting.' },
] as const;

export const processSteps = [
  { step: '01', title: 'Discover', body: 'We sit with your team and map how work actually moves today.' },
  { step: '02', title: 'Identify', body: 'We find the steps costing the most time and the most deals.' },
  { step: '03', title: 'Design', body: 'We design the workflow around your tools — not a template.' },
  { step: '04', title: 'Build', body: 'We build it, connect your systems, and keep a human in the loop.' },
  { step: '05', title: 'Launch', body: 'We roll it out with your team, with training and monitoring.' },
  { step: '06', title: 'Optimize', body: 'We watch what happens and keep improving as you grow.' },
] as const;

export const whyPoints = [
  { title: 'Business-first', body: 'We start with your process and your numbers, not a tool we want to sell.' },
  { title: 'Custom-built', body: 'Workflows designed for how your team already works — not a rigid product.' },
  { title: 'AI + automation', body: 'AI where judgement is needed, plain automation where rules are enough.' },
  { title: 'Connected systems', body: 'WhatsApp, CRM, sheets, billing and your site working as one flow.' },
  { title: 'Scalable architecture', body: 'Built to add the next workflow without rebuilding the last one.' },
  { title: 'Ongoing optimization', body: 'We keep tuning after launch as volume and edge cases grow.' },
] as const;

export const scenarios = [
  {
    when: '11:47 PM · A new enquiry',
    title: 'Nobody is awake. It still gets handled.',
    steps: [
      'WhatsApp replies in seconds with the right answer.',
      'AI asks the qualifying questions your team would ask.',
      'A slot is booked and written into the CRM.',
      'Your sales team opens the morning with a warm lead.',
    ],
  },
  {
    when: 'An order comes in',
    title: 'The work routes itself.',
    steps: [
      'Stock is checked before anyone promises a date.',
      'The task lands with the right person, not a group chat.',
      'Approval is requested and granted on WhatsApp.',
      'The report updates itself. Nobody builds it on Friday.',
    ],
  },
  {
    when: 'A quote needs sign-off',
    title: 'Approvals stop being the bottleneck.',
    steps: [
      'The request reaches the manager where they already are.',
      'One tap approves it — with a record of who and when.',
      'The document generates with the right numbers.',
      'It reaches the customer before they chase you.',
    ],
  },
] as const;

export const blueprints = [
  {
    title: 'Property enquiry → site visit',
    before: ['Enquiry', 'Seen next morning', 'Manual call'],
    after: ['Enquiry', 'Instant reply', 'Qualified', 'Visit booked'],
  },
  {
    title: 'Order → dispatch → report',
    before: ['Order on WhatsApp', 'Typed into Excel', 'Friday report'],
    after: ['Order', 'Auto-recorded', 'Dispatch task', 'Live dashboard'],
  },
] as const;

export const stack = [
  'WhatsApp Business API',
  'OpenAI',
  'n8n',
  'Supabase',
  'Next.js',
  'React Native',
] as const;

export const dataPrinciples = [
  'Automations run on your own accounts and numbers.',
  'Role-based access — people see only what they should.',
  'Human approval before anything sensitive goes out.',
  'Every automated action is logged and reviewable.',
] as const;
