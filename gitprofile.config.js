// gitprofile.config.js

const config = {
  github: {
    username: 'msblendorio', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['portfolio_old', 'ask-multiple-pdfs'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'michelesblendorio',
    //twitter: 'arif_szn',
    //mastodon: 'arifszn@mastodon.social',
    //facebook: '',
    //instagram: '',
    //youtube: '', // example: 'pewdiepie'
    //dribbble: '',
    //behance: '',
    //medium: 'arifszn',
    //dev: 'arifszn',
    //stackoverflow: '', // example: '1/jeff-atwood'
    //skype: '',
    //telegram: '',
    //website: 'https://arifszn.com',
    phone: '+39 328 6274658',
    email: 'sblendoriomichele@gmail.com',
  },
  resume: {
     fileUrl:
      'https://github.com/msblendorio/msblendorio.github.io/blob/fb8bd0715c1c5a782ca622d70997db804cfb1329/Sblendorio_CV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'R',
    'C#',
    'SQL',
    'DataViz',
    'Machine Learning',
    'NLP',
    'LLM',
    'Prompt Engineering',
    'Generative AI',
    'HTML',
    'CSS',
    'JavaScript',
    'Vue.js',
    'Bootstrap',
    'Streamlit',
    'VS Code',
    'Anaconda',
    'Py-Script',
    'D3.js',
    'Scikit-learn',
    'TensorFlow',
    'PyTorch',
    'Numpy',
    'Pandas',
    'Git',
    'Docker',
    'Microsoft Power BI',
    'Tableau',
    'Microsoft Excel',
  ],
  experiences: [
    {
      company: 'Freelance',
      position: 'Data Scientist',
      from: 'Jan 2003',
      to: 'Present',
      //companyLink: 'https://example.com',
    },
    {
      company: 'Freelance',
      position: 'Python developer',
      from: 'Jan 2003',
      to: 'Present',
      //companyLink: 'https://example.com',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Rome Business School / Valencia Universidad International',
      degree: 'Master in Data Science',
      from: '2021',
      to: '2022',
    },
    {
      institution: 'Rome University La Sapienza',
      degree: 'Bachelor's Degree',
      from: '1990',
      to: '1996',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'emerald',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
