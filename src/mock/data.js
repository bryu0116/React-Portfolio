import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Brandon B Ryu', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Brandon Ryu',
  subtitle: 'I am a Full Stack Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile01.jpg',
  paragraphOne: 'Hello and thanks for visiting my website! I am from Horsham, PA. I previously taught Middle School Math for 2 years in Philadelphia. However, I have decided to begin an exciting new career in Web Development.',
  paragraphTwo: 'A career in Web Development has fascinating aspects such as troubleshooting, continuous learning and endless abilities to eventually change the world. I am excited to leverage my skills and open up to new adventures!',
  paragraphThree: 'Aside from the web, I enjoy building custom mechanical keyboards, and LEGO. I do also enjoy spending time with my wife and two adorable cats (Chris and Atto).',
  resume: 'https://bryu0116.github.io/Portfolio/Brandon%20Byung%20Ryu%20FSWD%2002.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'WrappIt.jpg',
    title: 'WrappIt',
    info: 'An application for users who are having trouble finding that perfect gift. Open source css framework UIkit, New York Times API for books and movies, and eBay API for home decor, cooking, makeup, and video games & consoles were used to the WrappIt App.',
    info2: 'Tools: HTML, CSS, JSON, Express, Handlebars, AJAX, HTTP GET requests, and Server-side APIs',
    url: 'https://intense-falls-86763.herokuapp.com/',
    repo: 'https://github.com/bryu0116/WrappIt', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Employee Directory.png',
    title: 'Employee-Directory',
    info: 'React app to view entire employee directory at once and allows audience to view employees’ information',
    info2: 'Tools: React.JS Random User API, JavaScript, HTML and CSS',
    url: 'https://bryu0116.github.io/Employee-Directory/',
    repo: 'https://github.com/bryu0116/Employee-Directory', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Budget Tracker.png',
    title: 'Online/Offline Budget Tracker',
    info: 'This app allows the users to add expense and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brough back online.',
    info2: 'Tools: Node.js, Express, Mongoose, Morgan, MongoDB, Heroku, CSS, HTML',
    url: 'https://secret-fjord-88220.herokuapp.com/',
    repo: 'https://github.com/bryu0116/Online-Offline-Budget-Trackers', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Weather Dashboard.jpg',
    title: 'Weather Dashboard',
    info: 'A weather application that allows the user to search for the weather conditions of any city in the world.',
    info2: 'Tools: HTML, CSS, jQuery',
    url: 'https://bryu0116.github.io/Weather-Dashboard/',
    repo: 'https://github.com/bryu0116/Weather-Dashboard', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Team Profile Generator.jpg',
    title: 'Team Profile Generator',
    info: 'A Node CLI that takes in information about employees and generates a HTML webpage that displays a nicely formatted summary for each person.',
    info2: 'Tools: JavaScript, Node.js, HTML, CSS',
    url: 'https://github.com/bryu0116/Team-Profile-Generator',
    repo: 'https://github.com/bryu0116/Team-Profile-Generator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Note Taker.jpg',
    title: 'Note Taker',
    info: 'Note Taker is an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrive note data from a JSON file.',
    info2: 'Tools: Node.js, NPM, Express, Heroku, HTML, JavaScript, CSS',
    url: 'https://bryu0116-note-taker.herokuapp.com/',
    repo: 'https://github.com/bryu0116/Note-Taker', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'byenguk0116@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/brandon-ryu/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/bryu0116',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
