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
  ecomm,
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
  subcon,
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
    title: "Software Engineer",
    company_name: "Subconscious AI",
    icon: subcon,
    iconBg: "#fff",
    date: "June 2024 - August 2024",
    points: [
      `Real-time Notifications: Developed and deployed real-time notifications using Novu, enhancing user satisfaction by 30% through timely in-app and email alerts.`,
      "Seamless Onboarding Flow: Designed and integrated a seamless onboarding flow with HubSpot, Auth0, and Stripe, reducing user drop-off rates by 40% and boosting user retention",
      `Billing Logic Implementation: Architected and implemented advanced billing logic with Typescript and Nextjs, elevating user experience by 25% and driving premium subscriptions`,
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Subconscious AI",
    icon: subcon,
    iconBg: "#fff",
    date: "March 2024 - June 2024",
    points: [
      `Fullstack Development: Built the official website with Next.js, incorporating engaging animations that elevated user experience by 40%. Ensured code quality with thorough reviews and effective team communication.`,
      "Debugging and Code Optimisation: Diagnosed and fixed critical bugs, optimised the codebase using server-sent events and web hooks, enhancing application performance by 35% and cutting error rates by 20%",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Carmony.io",
    icon: carmony,
    iconBg: "#383E56",
    date: "October 2023 - Present",
    points: [
      `Frontend Development: Leveraged Reactjs, Redux, Design Tokens, Style Dictionary to develop and maintain the webapp’s frontend. Created the official website as well using Reactjs & TailwindCSS. Studied the use of PolygonID for integrating web3.0`,
      "Testing: Wrote more than 100 passing tests and set up a DevOps pipeline. Used Jest and Testing Library for writing tests.",
    ],
  },
  {
    title: "Web3 Developer",
    company_name: "Carmony.io",
    icon: carmony,
    iconBg: "#383E56",
    date: "April 2023 - October 2023",
    points: [
      "Developed a scalable and responsive frontend architecture using Reactjs, resulting in a 40% increase performance",
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
      "Web-based platform with the functionalities of Reddit and Stackoverflow combined. Made using technologies like Next.js, Firebase, Typescript, Tailwind CSS, etc. Users can post questions, answer questions, upvote and downvote questions and answers, etc. ",

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
    name: "EcommGuru",
    description:
      "Spearheaded an e-commerce website using Next.js and Sanity.io, incorporating robust billing and add-to-cart functionalities. This project boosted user engagement by 50% and streamlined the checkout process productively.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
      {
        name: "Sanity.io",
        color: "pink-text-gradient",
      },
    ],
    image: ecomm,
    source_code_link: "https://github.com/Tusharbecoding/ecommguru",
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
