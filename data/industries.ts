/**
 * Per-industry content for /industries/[slug].
 * Each entry is written for the way that trade actually operates, so the
 * pages read as advice rather than a keyword page.
 */

export interface IndustryDetail {
  slug: string;
  name: string;
  headline: string;
  intro: string;
  /** The moment work usually falls through the cracks in this trade. */
  pain: string;
  automations: { title: string; body: string }[];
  workflow: string[];
}

export const industryDetails: IndustryDetail[] = [
  {
    slug: 'real-estate',
    name: 'Real Estate',
    headline: 'Never lose a buyer to a slow reply.',
    intro:
      'Property enquiries arrive at all hours and from everywhere — portals, ads, WhatsApp, walk-ins. The dealer who answers first and qualifies properly is the one who gets the site visit.',
    pain: 'A buyer messages at midnight, gets a reply at noon, and has already booked a visit with someone else.',
    automations: [
      { title: 'Instant enquiry response', body: 'Every portal and ad lead gets an answer within seconds, on WhatsApp.' },
      { title: 'Buyer qualification', body: 'Budget, location, configuration and timeline captured before your team spends an hour.' },
      { title: 'Site-visit booking', body: 'Available slots offered and confirmed automatically, with reminders before the visit.' },
      { title: 'Follow-up until closure', body: 'Structured follow-ups so a warm buyer is never left waiting on a callback.' },
      { title: 'Inventory on demand', body: 'Matching properties sent as a shortlist instead of a PDF dump.' },
      { title: 'Broker & team routing', body: 'The right lead reaches the right person, with full context attached.' },
    ],
    workflow: ['Portal lead', 'Instant WhatsApp reply', 'Budget & area captured', 'Shortlist sent', 'Visit booked', 'Agent notified'],
  },
  {
    slug: 'automobile',
    name: 'Automobile',
    headline: 'From enquiry to test drive, without the chase.',
    intro:
      'Showrooms and service centres run on timing — a test drive booked today converts far better than a callback next week, and service reminders quietly drive most repeat revenue.',
    pain: 'Service due-dates sit in a spreadsheet nobody opens, and enquiry forms turn into a callback list.',
    automations: [
      { title: 'Test-drive scheduling', body: 'Slots offered, confirmed and reminded — no back-and-forth calls.' },
      { title: 'Service reminders', body: 'Due dates trigger a WhatsApp reminder with a booking link.' },
      { title: 'Showroom enquiries', body: 'Model, variant and budget captured before the first call.' },
      { title: 'Finance document collection', body: 'Documents requested, chased and filed automatically.' },
      { title: 'Post-service feedback', body: 'A short check-in that surfaces problems before a bad review does.' },
      { title: 'Insurance renewals', body: 'Renewal windows tracked and nudged well before expiry.' },
    ],
    workflow: ['Enquiry', 'Model & budget captured', 'Test drive offered', 'Slot confirmed', 'Reminder sent', 'Sales team briefed'],
  },
  {
    slug: 'retail',
    name: 'Retail',
    headline: 'Keep customers updated without anyone typing.',
    intro:
      'Retail runs on repeat business. Most of it is lost not to price but to silence — no order update, no restock alert, no reason to come back.',
    pain: 'Staff spend the day answering "where is my order?" instead of selling.',
    automations: [
      { title: 'Order status updates', body: 'Confirmation, dispatch and delivery messages sent automatically.' },
      { title: 'Stock alerts', body: 'Customers told the moment a size or model is back.' },
      { title: 'Repeat-purchase nudges', body: 'Timed reminders for consumables and refills.' },
      { title: 'Loyalty and offers', body: 'Segmented campaigns instead of one blast to everyone.' },
      { title: 'Returns and exchanges', body: 'A guided flow that collects what you need up front.' },
      { title: 'Daily sales report', body: 'Numbers land in your inbox before you open the shutter.' },
    ],
    workflow: ['Order placed', 'Confirmation sent', 'Stock checked', 'Dispatch update', 'Delivered', 'Feedback asked'],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    headline: 'Production that reports itself.',
    intro:
      'On the floor, the delay is rarely the machine — it is the approval waiting on a phone call and the job card that never made it into the system.',
    pain: 'Work stops because one approval is sitting unread, and nobody knows until the shift ends.',
    automations: [
      { title: 'Digital job cards', body: 'Jobs raised, assigned and tracked without paper.' },
      { title: 'Production tracking', body: 'Stage-wise progress visible without walking the floor.' },
      { title: 'Approval routing', body: 'Approvals reach the right person on WhatsApp and get logged.' },
      { title: 'Vendor coordination', body: 'POs, follow-ups and delivery confirmations handled automatically.' },
      { title: 'Material alerts', body: 'Low-stock warnings before a line stops, not after.' },
      { title: 'Shift & output reports', body: 'Daily output summarised without anyone building a sheet.' },
    ],
    workflow: ['Job raised', 'Assigned', 'Approval', 'Material checked', 'Produced', 'Report updated'],
  },
  {
    slug: 'wholesale',
    name: 'Wholesale',
    headline: 'Bulk orders on WhatsApp, recorded properly.',
    intro:
      'Wholesale already runs on WhatsApp. The problem is that the order lives in a chat thread and has to be retyped into a ledger by hand.',
    pain: 'Orders scattered across chats, prices quoted from memory, and a ledger reconciled late at night.',
    automations: [
      { title: 'Order capture from chat', body: 'Orders read from WhatsApp and written straight into your system.' },
      { title: 'Price list on request', body: 'Current rates sent instantly, per customer or category.' },
      { title: 'Dispatch updates', body: 'Buyers told when goods leave and when to expect them.' },
      { title: 'Ledger and payment reminders', body: 'Outstanding balances nudged politely and on schedule.' },
      { title: 'Stock availability', body: 'Availability answered without checking the godown yourself.' },
      { title: 'Repeat order shortcuts', body: 'Regular buyers can reorder in one message.' },
    ],
    workflow: ['WhatsApp order', 'Items parsed', 'Stock confirmed', 'Invoice raised', 'Dispatched', 'Ledger updated'],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    headline: 'Fewer no-shows, fewer missed patients.',
    intro:
      'Clinics lose more revenue to empty slots and unanswered queries than to anything clinical. Reminders and quick answers fix most of it.',
    pain: 'The front desk is on a call, so three patient messages go unanswered and two appointments are missed.',
    automations: [
      { title: 'Appointment booking', body: 'Patients pick a slot themselves, with confirmation.' },
      { title: 'Reminders', body: 'Timed reminders that measurably reduce no-shows.' },
      { title: 'Patient queries', body: 'Timings, fees, preparation and directions answered instantly.' },
      { title: 'Follow-up care', body: 'Post-visit check-ins and review-date reminders.' },
      { title: 'Report delivery', body: 'Reports shared securely as soon as they are ready.' },
      { title: 'Front-desk relief', body: 'Routine questions handled so staff can attend to people in the room.' },
    ],
    workflow: ['Enquiry', 'Slot offered', 'Booked', 'Reminder sent', 'Visit', 'Follow-up'],
  },
  {
    slug: 'education',
    name: 'Education',
    headline: 'Admission enquiries that actually get followed up.',
    intro:
      'Admissions are seasonal and time-boxed. The institutes that convert are the ones that answer within minutes and follow up on a schedule, not on memory.',
    pain: 'Enquiry forms pile up during admission season and half are never called back.',
    automations: [
      { title: 'Admission enquiries', body: 'Course, class and location captured the moment someone asks.' },
      { title: 'Counselling follow-ups', body: 'Structured sequences until the parent decides.' },
      { title: 'Fee reminders', body: 'Due-date nudges with a payment link.' },
      { title: 'Document collection', body: 'Requested, chased and filed without phone calls.' },
      { title: 'Parent updates', body: 'Attendance, results and notices sent automatically.' },
      { title: 'Batch and demo scheduling', body: 'Demo classes booked and reminded.' },
    ],
    workflow: ['Enquiry', 'Course captured', 'Counselling booked', 'Follow-up', 'Documents', 'Admission'],
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    headline: 'Guest messaging that runs itself.',
    intro:
      'Guests decide fast and review faster. Quick answers before booking and a well-timed message after checkout do most of the work.',
    pain: 'Booking questions go unanswered at night, and review requests are sent days too late.',
    automations: [
      { title: 'Booking enquiries', body: 'Availability, tariffs and amenities answered instantly.' },
      { title: 'Pre-arrival messages', body: 'Directions, check-in details and add-ons sent before arrival.' },
      { title: 'In-stay requests', body: 'Housekeeping and service requests routed to the right team.' },
      { title: 'Review requests', body: 'Asked at the right moment, to the right guests.' },
      { title: 'Repeat guest offers', body: 'Seasonal offers to people who already liked staying with you.' },
      { title: 'Table & event bookings', body: 'Reservations confirmed and reminded automatically.' },
    ],
    workflow: ['Enquiry', 'Availability sent', 'Booked', 'Pre-arrival info', 'Stay', 'Review request'],
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    headline: 'Client intake without the admin drag.',
    intro:
      'For consultants, agencies, CAs and legal practices, the billable hour dies in intake, document chasing and status updates.',
    pain: 'Senior people spend their week collecting documents and answering "what is the status?".',
    automations: [
      { title: 'Client intake', body: 'Requirements and scope captured in a structured way up front.' },
      { title: 'Document collection', body: 'Requested, chased and organised without manual reminders.' },
      { title: 'Status updates', body: 'Clients kept informed automatically at each milestone.' },
      { title: 'Billing and reminders', body: 'Invoices raised and followed up on a schedule.' },
      { title: 'Meeting scheduling', body: 'Calls booked into real availability, with reminders.' },
      { title: 'Internal handoffs', body: 'Work moves between team members with context intact.' },
    ],
    workflow: ['Enquiry', 'Intake form', 'Documents collected', 'Work assigned', 'Status updates', 'Invoice'],
  },
];

export function getIndustry(slug: string) {
  return industryDetails.find((i) => i.slug === slug);
}
