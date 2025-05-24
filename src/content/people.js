export const pi = {
  id: 'pi-01',
  name: 'Anshul Yadav',
  photo: '/images/people/anshul-yadav.jpg',
  position: 'Principal Investigator',
  education: [
    'PhD, Engineering Sciences, AcSIR, India',
    'MTech, Mechanical Engineering, IIT Kanpur (2010)',
    'BTech, Major: Mechanical Engineering; Minor: Electrical Engineering, IIT (2008)'
  ],
researchInterests: [
  'Water treatment',
  'Wastewater treatment',
  'Membrane bioreactor',
  'Membranes',
  'Adsorption',
  'Computational fluid dynamics',
  'Design of treatment systems'
],

  contact: {
    email: 'anshul.yadav@wr.iitr.ac.in',
    phone: '+91-94735 83417',
    office: 'WRDM Department, Room 205',
    website: 'https://iitr.ac.in/anshuly'
  },
  bio: 'Passionate Researcher',
  social: {
    googleScholar: 'https://scholar.google.com/citations?user=gD5XxtYAAAAJ&hl=en',
    researchGate: 'https://www.researchgate.net/profile/Anshul-Yadav-14',
    linkedIn: 'https://www.linkedin.com/in/anshul-yadav-2b29ab305/'
  },
  // In content/people.js for PI
projects: [
  {
    title: "Climate Resilient Water Systems",
    funding: "DST-SERB, ₹42 lakhs",
    duration: "2022-2025",
    description: "Developing adaptation strategies for Himalayan water resources"
  }
]
};

export const phdScholars = [
  {
    id: 'phd-01',
    name: 'Rahul Sharma',
    photo: '/images/people/rahul-sharma.jpg',
    position: 'PhD Scholar',
    previousDegree: 'MTech in Water Resources, NIT Warangal (2020)',
    topic: 'AI-based Flood Prediction Models',
    duration: '2021-Present',
    progress: '2nd Year',
    email: 'rahuls@iitr.ac.in'
  }
  // Add more PhD students
];

export const mastersStudents = [ /* ... */ ];
export const interns = [ /* ... */ ];

export const alumni = {
  phd: [
    {
      id: 'al-phd-01',
      name: 'Dr. Priya Patel',
      photo: '/images/people/priya-patel.jpg',
      degree: 'PhD (2022)',
      topic: 'Urban Water Management',
      duration: '2017-2022',
      currentStatus: 'Assistant Professor at NIT Surat',
      thesisLink: '/theses/patel-2022.pdf'
    }
  ],
  masters: [ /* ... */ ],
  interns: [ /* ... */ ]
};
