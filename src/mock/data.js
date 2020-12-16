import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'SergioRos Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sergio Ros',
  subtitle: 'Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'portfolio-pic.jpg',
  paragraphOne:
    'Interested in a Full Stack development job that keeps me growing not only professionally but also in a personal way. Preference for team projects and environments that value the importance of a nice job atmosphere.',
  paragraphTwo:
    "Enthusiastic of learning and looking always for new goals. Used to work under pressure, dealing with a high level of improvisation and maintaining a problem-solving spirit. Experience in leading teams. I base my management in putting the maximum attention to everyone's needs, ensuring to achieve the goals in the best way to everyone.",
  paragraphThree: ' ',
  resume: '../../public/static/SergioRos-resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'veggieplanet.png',
    title: 'Veggie Planet',
    info:
      'Full Stack Web app that allows you to create and share your own vegan recipes. If you own a vegan restaurant you can also create it in the database and share it with all users.',
    info2:
      'Implemented using React.js and CSS3 for the front and Node.js, Express.Js, Passport and MongoAtlas for the back.',
    url: 'https://veggieplanet.netlify.app',
    repo: 'https://github.com/FinalVeggieProject', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pokedex.png',
    title: 'Pokédex Project',
    info: 'Simulation of the Pokédex functionalites from the Pokémon Series.',
    info2:
      'Implemented using HTML5, CSS3 and JS for the front and Node.js, Express.Js, Passport,  MongoAtlas and an external API (https://pokeapi.co/) for the back. Everything in the app is adaptable to mobile devices.',
    url: 'https://pokedexproject1.herokuapp.com/',
    repo: 'https://github.com/Pokedex/pokedex-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ultimateduel.png',
    title: 'Ultimate Duel',
    info:
      'Implemented an online 2-player game in which both players have to shoot each other to win. Designed two different scenarios to play on.',
    info2: 'Used technologies: HTML5, CSS3 and JavaScript with Canvas.',
    url: 'srosd.github.io/Ultimate-duel/',
    repo: 'https://github.com/srosd/Ultimate-duel', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ironnutrition.png',
    title: 'React IronNutrition',
    info: 'Page developed with React.js for the Web Development Bootcamp in Ironhack.',
    info2:
      'Implemented an instant search bar, adding new foods functionality and display of the selected foods, giving also the total calories sum.',
    url: 'https://react-ironnutrition.netlify.app/',
    repo: 'https://github.com/srosd/react-ironnutrition', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ironcontacts.png',
    title: 'React IronContacts',
    info: 'Page developed with React.js for the Web Development Bootcamp in Ironhack.',
    info2:
      'Displayed a list of famous actors from a given JSON document and filtered the received data. Added sorting and adding-random-actors functionalities. Played a little bit with styles to explore buttons possibilities.',
    url: 'https://ironcontacts.netlify.app/',
    repo: 'https://github.com/srosd/lab-react-ironcontacts', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'If you have any question, please feel free to ask me at:',
  btn: '',
  email: 'srosduran@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sergiorosduran/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/srosd/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
