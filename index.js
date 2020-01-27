import displayAbout from './utils/display-about.js';

const aboutButton = document.getElementById('about');
const projectsButton = document.getElementById('projects');
const contactButton = document.getElementById('contact');

aboutButton.addEventListener('click', displayAbout);
projectsButton.addEventListener('click', displayProjects);
contactButton.addEventListener('click', displayContact);