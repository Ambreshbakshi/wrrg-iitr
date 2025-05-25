export const researchAreas = [
  {
    id: 'ra-01',
    title: 'Hydrological Modeling',
    icon: '🌊',
    description: 'Developing advanced computational models for water flow prediction under climate change scenarios.',
    projects: [
      'DST-funded project on Himalayan hydrology (2022-2025)',
      'Collaboration with NIH Roorkee on flood modeling'
    ],
    slug: 'hydrological-modeling'
  },
  {
    id: 'ra-02',
    title: 'Water Quality Monitoring',
    icon: '💧',
    description: 'Designing IoT-based systems for real-time water quality assessment and management.',
    projects: [
      'Development of IoT-based water quality monitoring systems',
      'Integration of blockchain technology for data security'
    ],
    slug: 'water-quality-monitoring'
  }
];

export const publications = {
  journalArticles: [
    {
      id: 'pub-01',
      type: 'journal',
      title: 'Development of reservoir capacity loss model using bootstrapping of sediment rating curves',
      authors: ['Jabbar, Y.C.', 'Yadav, S.M.'],
      journal: 'ISH Journal of Hydraulic Engineering',
      year: 2019,
      volume: '25',
      pages: '1-13',
      doi: '10.1080/09715010.2019.1583442',
      pdf: '/publications/jabbar-2019-ISHJHE.pdf',
      abstract: 'This study presents a model for predicting reservoir capacity loss using sediment rating curves.',
      featured: true
    },
    {
      id: 'pub-02',
      type: 'journal',
      title: 'Optimization of Cropping Patterns Using Elitist-Jaya and Elitist-TLBO Algorithms',
      authors: ['Kumar, V.', 'Yadav, S.M.'],
      journal: 'Water Resources Management',
      year: 2019,
      volume: '33',
      pages: '1129-1144',
      doi: '10.1007/s11269-019-02204-z',
      pdf: '/publications/kumar-2019-WRM.pdf',
      abstract: 'This paper explores optimization techniques for improving cropping patterns in water-scarce regions.',
      featured: false
    }
  ],
  conferences: [
    {
      id: 'conf-01',
      title: 'To Implement the IoT Based Water Quality Monitoring and Analysis with Using Blockchain Technology',
      authors: ['Dubey, S.', 'Sanghvi, A.'],
      conference: '2024 International Conference on Advances in Computing Research on Science Engineering and Technology (ACROSET)',
      year: 2024,
      location: 'Online',
      link: 'https://ieeexplore.ieee.org/document/10743893',
      abstract: 'This conference paper discusses the integration of IoT and blockchain for enhanced water quality monitoring.',
      featured: true
    }
  ],
  books: [
    {
      id: 'book-01',
      title: 'Hydrologic Modeling: Select Proceedings of ICWEES-2016',
      authors: ['Singh, V.P.', 'Yadav, S.', 'Yadava, R.N.'],
      publisher: 'Springer',
      year: 2018,
      link: 'https://link.springer.com/book/10.1007/978-981-10-5801-1',
      abstract: 'A compilation of proceedings from the International Conference on Water, Environment, and Energy Systems.',
      featured: false
    }
  ]
};

export const patents = [
  {
    id: 'pat-01',
    title: 'IoT-based Water Quality Monitoring Device',
    inventors: ['Yadav, A.', 'Gupta, P.'],
    patentNumber: 'IN202217045678',
    filingDate: '2022-07-15',
    status: 'Granted',
    link: 'https://ipindia.gov.in/patent-details'
  }
];

export const invitedTalks = [
  {
    id: 'talk-01',
    title: 'Smart Water Systems: Opportunities and Challenges',
    event: 'National Workshop on Sustainable Water Solutions',
    speaker: 'Dr. S.M. Yadav',
    year: 2023,
    location: 'IIT Roorkee',
    abstract: 'Invited keynote on the role of smart technologies in integrated water management.',
  }
];