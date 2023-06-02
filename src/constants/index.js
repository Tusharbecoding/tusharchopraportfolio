import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  carmony,
  figma,
  docker,
  truss,
  metvy,
  truss1,
  tanus,
  nextjs,
  kubernetes,
  volcanoh,
  lifesap, 
  tripguide,
  rasta,
  buds,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FullStack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Blockchain Developer",
    icon: backend,
  },
  {
    title: "DevOps Engineer",
    icon: creator,
  },
];

const technologies = [
  
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
];

const experiences = [
  {
    title: "Web3 Developer",
    company_name: "Carmony.io",
    icon: carmony,
    iconBg: "#383E56",
    date: "April 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Created the official website of Carmony.io using React.js, Redux, Tailwind CSS from scratch",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Rasta.in",
    icon: rasta,
    iconBg: "hsl(48.78deg 100% 51.76%)",
    date: "July 2022 - Nov 2022",
    points: [
      "Developing and maintaining mobile application using React Native and other related technologies.",
      "Constructed a mobile app using React native expo & Firebase was used for backend.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Main use case was to make fully functioning login auth system with onboarding screens and to click a picture or choose from gallery and apply edit options on it like filters, text, etc. and to publish it.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "LifeSap",
    icon: lifesap,
    iconBg: "#383E56",
    date: "Feb 2022 - Jun 2022",
    points: [
      "Designed the official website of LifeSap a startup based in Kanpur, India",
      "Designed the UI of the website and the mobile app using Figma and helped in development of the website using Reactjs.",
      "Ensured responsive design and ensuring cross-browser compatibility.",
      
    ],
  },
  {
    title: "Web Developer",
    company_name: "Digitech Buds",
    icon: buds,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Jan 2022",
    points: [
      "Studied and researched web development technologies and frameworks to deliver the best possible solutions to clients.",
      "Improvised the official website using UX fundamentals and javascript frameworks.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Truss",
    description:
      'Web-based platform with the functionalities of Reddit and Stackoverflow combined. Made using technologies like Next.js, Firebase, Typescript, Tailwind CSS, etc. Users can post questions, answer questions, upvote and downvote questions and answers, etc. ',
      
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: truss1,
    source_code_link: "https://github.com/Tusharbecoding/Truss-1",
  },
  {
    name: "Volcanoh",
    description:
      "Mobile application that enables users to login and click pictures and edit them just like one can do with an Instagram story. There is a front and back option wherein one can click pictures to place for the front and back of the Volcanoh and set outside their stores.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: volcanoh,
    source_code_link: "https://github.com/Tusharbecoding/volcanoh",
  },
  {
    name: "Tanu's Kitchen",
    description:
      "A web application that enables Tanu's Kitchen a restaurant in Southampton, UK to showcase their menu and take orders online. The application is made using Javascript, HTML & CSS. The application is deployed on Netlify.",
      
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HMTL",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tanus,
    source_code_link: "https://github.com/Tusharbecoding/Kitchen",
  },
];

export { services, technologies, experiences, testimonials, projects };
