import dadli from '../assets/images/dadli-country-club.png';
import readdit from '../assets/images/readd-it.png';
import portfoliov1 from '../assets/images/portfolio-v1.png';
import taskhaste from '../assets/images/taskhaste.png';

const projectDetails = [
  {
    name: 'Dadli Country Club',
    url: 'https://dadlicountryclub.netlify.app',
    githubRepo: 'https://github.com/tscurry/country-club',
    img: `${dadli}`,
    alt: 'Dadli Country Club',
    description: 'Minimal responsive website showcasing basic understanding of HTML & CSS.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'readd-it',
    url: 'https://readd-it.com',
    githubRepo: 'https://github.com/tscurry/readd-it',
    description:
      'A reddit clone with basic functionality that utilizes the Reddit JSON API to mimic the reddit website but created with minimal functionality. The JSON API has been rate limited so only 10 requests can be made per minute. ',
    technologies: ['React', 'CSS', 'Redux-Toolkit', 'JavaScript'],
    img: `${readdit}`,
    alt: 'Readd-it',
  },
  {
    name: 'Personal Website v1',
    url: 'https://tscurryv1.netlify.app/',
    githubRepo: 'https://github.com/tscurry/portfolio_v1',
    img: `${portfoliov1}`,
    alt: 'Personal Website',
    description:
      'First iteration of my portfolio website. Built with React, JavaScript, CSS and animated with Animate.css',
    technologies: ['React', 'JavaScript', 'CSS', 'Animate.css'],
  },

  {
    name: 'TaskHaste',
    url: '',
    githubRepo: 'https://github.com/tscurry/taskhaste',
    img: `${taskhaste}`,
    alt: 'taskhaste',
    description:
      "TaskHaste is a task management web application designed to connect users with helpers who can assist with a variety of tasks. Whether it's shopping, errands, cleaning, or more, TaskHaste aims to make it simple and easy to find reliable help.",
    technologies: [],
  },
];

export default projectDetails;
