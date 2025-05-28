// content/people.js

export const pi = {
  id: 'pi',
  name: 'Dr. Anshul Yadav',
  position: 'Assistant Professor',
  photo: '/images/people/anshul-yadav.jpeg',
  role: 'pi', // for conditional rendering if needed
  department: 'Department of Water Resources Development and Management,\nIndian Institute of Technology, Roorkee – 247667, Uttarakhand, India',
  researchInterests: [
    'Water treatment',
    'Wastewater treatment',
    'Membrane bioreactor',
    'Membranes',
    'Adsorption',
    'Computational fluid dynamics',
    'Design of treatment systems'
  ],
  education: [
    'PhD, Engineering Sciences, AcSIR, India (2022)',
    'MTech, Mechanical Engineering, IIT Kanpur (2017)',
    'BTech, Mechanical Engineering, IIT (2017)'
  ],
  contact: {
    email: 'anshul.yadav@wr.iitr.ac.in',
    phone: '+91-94735 83417 (Mob); +91-1332-285617 (O)',
    office: 'WRDM Department, Room 205',
 
  },
  bio: 'Passionate Researcher',
  social: {
    googleScholar: 'https://scholar.google.com/citations?user=gD5XxtYAAAAJ&hl=en',
    researchGate: 'https://www.researchgate.net/profile/Anshul-Yadav-14',
    linkedIn: 'https://www.linkedin.com/in/anshul-yadav-2b29ab305/'
  },
  projects: [
    {
      title: 'Climate Resilient Water Systems',
      funding: 'DST-SERB, ₹42 lakhs',
      duration: '2022–2025',
      description: 'Developing adaptation strategies for Himalayan water resources.'
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
    duration: '2021–Present',
    progress: '2nd Year',
    email: 'rahuls@iitr.ac.in'
  },
  {
    id: 'phd-02',
    name: 'Rahul Sharma',
    photo: '/images/people/rahul-sharma.jpg',
    position: 'PhD Scholar',
    previousDegree: 'MTech in Water Resources, NIT Warangal (2020)',
    topic: 'AI-based Flood Prediction Models',
    duration: '2021–Present',
    progress: '2nd Year',
    email: 'rahuls@iitr.ac.in'
  }
  // Add more PhD scholars here
];

export const mastersStudents = [
  {
    id: 'mtech-01',
    name: 'Abas',
    photo: '/images/people/mtech/mtech1.jpeg',
    position: 'MTech Student',
    previousDegree: 'BTech in Civil Engineering, AKTU (2021)',
    topic: 'Membrane Filtration for Wastewater Treatment',
    duration: '2023–2025',
    email: 'nehav@iitr.ac.in'
  },
  {
    id: 'mtech-02',
    name: 'Amri',
    photo: '/images/people/mtech/mtech2.jpeg',
    position: 'MTech Student',
    previousDegree: 'BTech in Civil Engineering, AKTU (2021)',
    topic: 'Membrane Filtration for Wastewater Treatment',
    duration: '2023–2025',
    email: 'nehav@iitr.ac.in'
  },
  {
    id: 'mtech-03',
    name: 'Balkrishna',
    photo: '/images/people/mtech/mtech3.jpeg',
    position: 'MTech Student',
    previousDegree: 'BTech in Civil Engineering, AKTU (2021)',
    topic: 'Membrane Filtration for Wastewater Treatment',
    duration: '2023–2025',
    email: 'nehav@iitr.ac.in'
  },
  {
    id: 'mtech-04',
    name: 'Makanda',
    photo: '/images/people/mtech/mtech4.jpeg',
    position: 'MTech Student',
    previousDegree: 'BTech in Civil Engineering, AKTU (2021)',
    topic: 'Membrane Filtration for Wastewater Treatment',
    duration: '2023–2025',
    email: 'nehav@iitr.ac.in'
  },
  {
    id: 'mtech-05',
    name: 'Person5',
    photo: '/images/people/mtech/mtech5.jpeg',
    position: 'MTech Student',
    previousDegree: 'BTech in Civil Engineering, AKTU (2021)',
    topic: 'Membrane Filtration for Wastewater Treatment',
    duration: '2023–2025',
    email: 'nehav@iitr.ac.in'
  },
  {
    id: 'mtech-06',
    name: 'Person6',
    photo: '/images/people/mtech/mtech6.jpeg',
    position: 'MTech Student',
    previousDegree: 'BTech in Civil Engineering, AKTU (2021)',
    topic: 'Membrane Filtration for Wastewater Treatment',
    duration: '2023–2025',
    email: 'nehav@iitr.ac.in'
  },
  {
    id: 'mtech-07',
    name: 'Person7',
    photo: '/images/people/mtech/mtech7.jpeg',
    position: 'MTech Student',
    previousDegree: 'BTech in Civil Engineering, AKTU (2021)',
    topic: 'Membrane Filtration for Wastewater Treatment',
    duration: '2023–2025',
    email: 'nehav@iitr.ac.in'
  },
  {
    id: 'mtech-08',
    name: 'Neha Verma',
    photo: '/images/people/neha-verma.jpg',
    position: 'MTech Student',
    previousDegree: 'BTech in Civil Engineering, AKTU (2021)',
    topic: 'Membrane Filtration for Wastewater Treatment',
    duration: '2023–2025',
    email: 'nehav@iitr.ac.in'
  },
  {
    id: 'mtech-09',
    name: 'Neha Verma',
    photo: '/images/people/neha-verma.jpg',
    position: 'MTech Student',
    previousDegree: 'BTech in Civil Engineering, AKTU (2021)',
    topic: 'Membrane Filtration for Wastewater Treatment',
    duration: '2023–2025',
    email: 'nehav@iitr.ac.in'
  },
  // Add more master's students here
];

export const interns = [
  {
    id: 'intern-01',
    name: 'Rupal Niranjan',
    photo: '/images/people/interns/intern1.jpeg',
    position: 'Intern',
    previousDegree: 'BTech Student, MMMUT, Gorakhpur, U.P',
    topic: 'CFD study of Electrodialysis process',
    duration: '30 Days',
    email: 'amitkumar@svnit.ac.in'
  },
   {
    id: 'intern-02',
    name: 'Raj Keshari',
    photo: '/images/people/interns/intern2.jpeg',
    position: 'Intern',
    previousDegree: 'BTech Student, IIEST, Shibpur',
    topic: 'Enhanced performance of membrane distillation using radio-frequency induction heated thermally conducting feed spacers.',
    duration: '45 Days',
    email: 'amitkumar@svnit.ac.in'
  },
   {
    id: 'intern-03',
    name: 'Sanchita Garai',
    photo: '/images/people/interns/intern3.jpeg',
    position: 'Intern',
    previousDegree: 'BTech Student, IIEST, Shibpur',
    topic: ' Enhanced performance of membrane distillation using radio-frequency induction heated thermally conducting feed spacers.',
    duration: '45 Days',
    email: 'amitkumar@svnit.ac.in'
  },
  {
    id: 'intern-04',
    name: 'Vaibhav Kumar',
    photo: '/images/people/interns/intern4.jpeg',
    position: 'Intern',
    previousDegree: 'BTech Student, IIEST, Shibpur',
    topic: 'Nanophotonics-enabled solar membrane distillation for off-grid water purification',
    duration: '45 Days',
    email: 'amitkumar@svnit.ac.in'
  },
   {
    id: 'intern-05',
    name: 'Amit Kumar',
    photo: '/images/people/amit-kumar.jpg',
    position: 'Intern',
    previousDegree: 'BTech Student, SVNIT Surat',
    topic: 'CFD Modeling in Bioreactors',
    duration: 'May 2024 – July 2024',
    email: 'amitkumar@svnit.ac.in'
  },
   {
    id: 'intern-06',
    name: 'Amit Kumar',
    photo: '/images/people/amit-kumar.jpg',
    position: 'Intern',
    previousDegree: 'BTech Student, SVNIT Surat',
    topic: 'CFD Modeling in Bioreactors',
    duration: 'May 2024 – July 2024',
    email: 'amitkumar@svnit.ac.in'
  },
  {
    id: 'intern-07',
    name: 'Amit Kumar',
    photo: '/images/people/amit-kumar.jpg',
    position: 'Intern',
    previousDegree: 'BTech Student, SVNIT Surat',
    topic: 'CFD Modeling in Bioreactors',
    duration: 'May 2024 – July 2024',
    email: 'amitkumar@svnit.ac.in'
  },
   {
    id: 'intern-08',
    name: 'Amit Kumar',
    photo: '/images/people/amit-kumar.jpg',
    position: 'Intern',
    previousDegree: 'BTech Student, SVNIT Surat',
    topic: 'CFD Modeling in Bioreactors',
    duration: 'May 2024 – July 2024',
    email: 'amitkumar@svnit.ac.in'
  },
   {
    id: 'intern-09',
    name: 'Amit Kumar',
    photo: '/images/people/amit-kumar.jpg',
    position: 'Intern',
    previousDegree: 'BTech Student, SVNIT Surat',
    topic: 'CFD Modeling in Bioreactors',
    duration: 'May 2024 – July 2024',
    email: 'amitkumar@svnit.ac.in'
  },
  {
    id: 'intern-10',
    name: 'Amit Kumar',
    photo: '/images/people/amit-kumar.jpg',
    position: 'Intern',
    previousDegree: 'BTech Student, SVNIT Surat',
    topic: 'CFD Modeling in Bioreactors',
    duration: 'May 2024 – July 2024',
    email: 'amitkumar@svnit.ac.in'
  },
   {
    id: 'intern-11',
    name: 'Amit Kumar',
    photo: '/images/people/amit-kumar.jpg',
    position: 'Intern',
    previousDegree: 'BTech Student, SVNIT Surat',
    topic: 'CFD Modeling in Bioreactors',
    duration: 'May 2024 – July 2024',
    email: 'amitkumar@svnit.ac.in'
  },
   {
    id: 'intern-12',
    name: 'Amit Kumar',
    photo: '/images/people/amit-kumar.jpg',
    position: 'Intern',
    previousDegree: 'BTech Student, SVNIT Surat',
    topic: 'CFD Modeling in Bioreactors',
    duration: 'May 2024 – July 2024',
    email: 'amitkumar@svnit.ac.in'
  },
  // Add more interns here
];

export const past = {
  phd: [
    {
      id: 'al-phd-01',
      name: 'Dr. Priya Patel',
      photo: '/images/people/priya-patel.jpg',
      degree: 'PhD (2022)',
      topic: 'Urban Water Management',
      duration: '2017–2022',
      currentStatus: 'Assistant Professor at NIT Surat',
      thesisLink: '/theses/patel-2022.pdf'
    }
    // Add more PhD alumni
  ],
   masters: [
    {
      id: 'al-phd-01',
      name: 'Dr. Priya Patel',
      photo: '/images/people/priya-patel.jpg',
      degree: 'PhD (2022)',
      topic: 'Urban Water Management',
      duration: '2017–2022',
      currentStatus: 'Assistant Professor at NIT Surat',
      thesisLink: '/theses/patel-2022.pdf'
    }
    // Add more PhD alumni
  ], interns: [
    {
      id: 'al-phd-01',
      name: 'Dr. Priya Patel',
      photo: '/images/people/priya-patel.jpg',
      degree: 'PhD (2022)',
      topic: 'Urban Water Management',
      duration: '2017–2022',
      currentStatus: 'Assistant Professor at NIT Surat',
      thesisLink: '/theses/patel-2022.pdf'
    }
    // Add more PhD alumni
  ],
}