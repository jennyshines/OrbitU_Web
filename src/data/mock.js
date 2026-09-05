// Mock data — front-end only, no backend. Mirrors the numbers used across the mockup.

export const currentUser = {
  name: 'Jenny S.',
  program: 'Nursing ’27',
  verified: true,
};

export const stats = {
  liveListings: 214,
  verifiedPct: 100,
  medianWalk: '9 min',
  waitlist: 1860,
};

export const listings = [
  {
    id: 'l1',
    title: 'Private room in 3-bed',
    address: '12th & E Marion',
    price: 940,
    priceNote: 'utilities in',
    fit: 96,
    walk: 6,
    moveIn: 'Jun 12',
    moveOut: 'Sep 3',
    coverage: 'full',
    landlordApproved: true,
    roommateNote: '2 roommates staying',
    furnished: true,
    host: { name: 'Alex K.', program: "Seattle U ’27 · Business", repliesIn: '~2h' },
    pin: { left: 41, top: 36 },
  },
  {
    id: 'l2',
    title: 'Furnished studio',
    address: 'Broadway & E Pine',
    price: 1080,
    priceNote: null,
    fit: 91,
    walk: 11,
    moveIn: 'Jun 15',
    moveOut: 'Aug 28',
    coverage: 'gap',
    gapNote: '4-day gap',
    landlordApproved: true,
    roommateNote: 'Lives alone',
    furnished: true,
    host: { name: 'Priya R.', program: "Seattle U ’27 · MBA", repliesIn: '~4h' },
    pin: { left: 63, top: 27 },
  },
  {
    id: 'l3',
    title: 'Shared room in 2-bed',
    address: 'Yesler Terrace',
    price: 725,
    priceNote: 'shared',
    fit: 88,
    walk: 14,
    moveIn: 'Jun 1',
    moveOut: 'Sep 10',
    coverage: 'full',
    landlordApproved: false,
    pending: true,
    roommateNote: 'Roommate match 82%',
    furnished: false,
    host: { name: 'Marcus T.', program: "Seattle U ’26 · CS", repliesIn: '~1h' },
    pin: { left: 33, top: 58 },
  },
  {
    id: 'l4',
    title: '1 bed apartment',
    address: 'First Hill',
    price: 1190,
    priceNote: null,
    fit: 84,
    walk: 8,
    moveIn: 'Jun 20',
    moveOut: 'Sep 1',
    coverage: 'full',
    landlordApproved: true,
    roommateNote: 'Furnished',
    furnished: true,
    host: { name: 'Dana W.', program: "Seattle U ’25 · Public Health", repliesIn: '~3h' },
    pin: { left: 66, top: 52 },
  },
];

// extra unlabeled pins for the map decoration
export const extraPins = [
  { price: 860, left: 47, top: 66 },
  { price: 1020, left: 56, top: 74 },
  { price: 790, left: 26, top: 41 },
];

export const listingDetail = {
  id: 'l1',
  title: 'Private room in a 3-bed · 12th & E Marion',
  walk: 6,
  dates: 'Jun 12 – Sep 3, 2027',
  furnished: true,
  price: 940,
  fit: 96,
  legality: [
    { icon: 'check-circle', title: 'Lease permits subletting', sub: 'Clause 14b, verified by OrbitU' },
    { icon: 'check-circle', title: 'Landlord signed off', sub: 'Madison Park Mgmt · Mar 3' },
    { icon: 'check-circle', title: 'Sublease template ready', sub: 'WA state · e-sign in app' },
    { icon: 'info', title: 'Deposit $500, refundable', sub: 'Held by OrbitU until move-out' },
  ],
  story: "I'm in Chicago for a 12-week internship and would rather hand my room to another Seattle U student than eat the rent. Corner room, big window, desk stays. Two roommates are around all summer — both grad students, both quiet on weeknights.",
  roommates: [
    { name: 'Maya · 2nd yr MSW', note: 'Quiet weeknights · cooks · no pets' },
    { name: 'Dev · 1st yr MBA', note: 'Early riser · gym · tidy' },
  ],
  amenities: ['Furnished', 'In-unit laundry', 'Wifi included', 'Desk', 'Street parking', 'No pets', 'A/C'],
  breakdown: [
    { label: 'Rent · 2.6 months', amount: '$2,444' },
    { label: 'Refundable deposit', amount: '$500' },
    { label: 'OrbitU service fee', amount: '$73' },
  ],
  total: '$3,017',
  host: { name: 'Alex K.', program: "Seattle U ’27 · Business" },
};

export const requests = [
  { id: 'r1', name: 'Jenny S.', program: "Nursing ’27 · verified", dates: 'Jun 15 – Sep 1', coverage: 'Full cover', fit: 96, status: 'New' },
  { id: 'r2', name: 'Marcus T.', program: "CS ’26 · verified", dates: 'Jun 20 – Aug 20', coverage: '16-day gap', fit: 88, status: 'Messaged' },
  { id: 'r3', name: 'Priya R.', program: "MBA ’27 · verified", dates: 'Jun 10 – Sep 5', coverage: 'Full cover', fit: 81, status: 'Awaiting you' },
];

export const paymentSchedule = [
  { date: 'May 28', what: 'Deposit + first month + service fee', method: 'Visa ···· 4417', status: 'Paid', amount: '$1,513.60' },
  { date: 'Jul 1', what: 'Rent · July', method: 'Visa ···· 4417', status: 'Scheduled', amount: '$940.00' },
  { date: 'Aug 1', what: 'Rent · August', method: 'Visa ···· 4417', status: 'Scheduled', amount: '$940.00' },
  { date: 'Sep 1', what: 'Rent · Sep 1 only (prorated)', method: 'Visa ···· 4417', status: 'Scheduled', amount: '$31.33' },
  { date: 'Sep 8', what: 'Deposit release', method: 'To Visa ···· 4417', status: 'Pending move-out', amount: '– $500.00' },
];

export const conversations = [
  {
    id: 'c1',
    name: 'Alex K.',
    program: "Verified · Seattle U ’27",
    lastMessage: 'Sent the sublease for e-sign. Deposit goes to…',
    time: '2m',
    dealState: 'Request sent · Jun 15 – Sep 1',
    dealStateType: 'accent',
    listing: { title: 'Private room · 12th & E Marion', priceNote: '$940 / mo · Jun 15 – Sep 1' },
    messages: [
      { day: 'Thursday' },
      { from: 'them', text: "Hey! Is the room still open for mid-June? I'm interning in SLU through August." },
      { from: 'me', text: 'Yes — I fly out Jun 10, so anytime after that works. Landlord already signed off on subletting.' },
      { system: true, title: 'Dates agreed · Jun 15 – Sep 1', body: 'Both of you confirmed this window. Alex can now accept your request.', cta: 'View request' },
      { from: 'them', text: 'Sent the sublease for e-sign. Deposit goes to OrbitU escrow, not to me.' },
      { from: 'me', text: 'Signing tonight. Can we overlap Jun 15 for the key handoff?' },
      { typing: true },
    ],
  },
  {
    id: 'c2',
    name: 'Priya R.',
    program: "Verified · Seattle U ’27",
    lastMessage: 'Would you consider $1,000 if I take all of…',
    time: '1h',
    dealState: 'Inquiry · no dates yet',
    dealStateType: 'neutral',
    listing: { title: 'Private room · 12th & E Marion', priceNote: '$940 / mo' },
    messages: [
      { day: 'Yesterday' },
      { from: 'them', text: 'Would you consider $1,000 if I take all of June through September?' },
    ],
  },
  {
    id: 'c3',
    name: 'Marcus T.',
    program: "Verified · Seattle U ’26",
    lastMessage: 'Could I do Jun 20 – Aug 20 instead?',
    time: 'Yesterday',
    dealState: '16-day gap flagged',
    dealStateType: 'neutral',
    listing: { title: 'Private room · 12th & E Marion', priceNote: '$940 / mo' },
    messages: [
      { day: 'Yesterday' },
      { from: 'them', text: 'Could I do Jun 20 – Aug 20 instead? I have a trip planned right after.' },
    ],
  },
];
