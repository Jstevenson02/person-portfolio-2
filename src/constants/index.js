import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  computer,
  cap,
  wrench,
  stuller,
  walter,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Django Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
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
    name: "MongoDB",
    icon: mongodb,
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
];

const experiences = [
  {
    title: "Self Teaching",
    company_name: "Home",
    icon: computer,
    iconBg: "#FFFFFF",
    date: "August 2010 - Present",
    points: [
      "Programming my first games using Scratch drag and drop low-code editor.",
      "Maintaining and tracking all of my class projects while in college using Git.",
      "Collaborating with my friends using Gitlab to maintain structure on our projects.",
      "Developing and maintaining web applications using React.js and other related technologies.",
    ],
  },
  {
    title: "IT Lead Technician",
    company_name: "Southside Highschool",
    icon: cap,
    iconBg: "#FFFFFF",
    date: "August  2016 - May 2020",
    points: [
      "Work consisted of repairing staff and student computers and tablets.",
      "Configuring networking settings and remedy wifi connectivity issues.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Managing the registration and distribution of technology around campus.",
    ],
  },
  {
    title: "IT Technician",
    company_name: "Dog House Computers",
    icon: wrench,
    iconBg: "#FFFFFF",
    date: "August  2019 - May 2020",
    points: [
      "Worked on end-user computers and servers.",
      "Fixed hardware, software and firmware issues.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Throughout, I gained experience on Mac OS, Windows and Linux systems.",
    ],
  },
  {
    title: "University of Louisiana at Lafayette",
    company_name: "Student",
    icon: cap,
    iconBg: "#FFFFFF",
    date: "August 2020 - May 2021",
    points: [
      "Studied Computer Science in pursuit of a Bachelors degree",
      "Classes consisted of learning low level circuitry using logisim.",
      "Developing math skills in Trigonometry and statistics.",
      "Programming classes were limited to the study of Python and C++",
    ],
  },
  {
    title: "SysOps Technician",
    company_name: "Stuller",
    icon: stuller,
    iconBg: "#FFFFFF",
    date: "July 2021 - December 2021",
    points: [
      "Answered internal phone calls, troubleshoot user issues using remote software.",
      "Repaired, deployed and designed hardware and software solutions for internal users and departments.",
      "Optimized legacy procedures through usage of batch scripts for installing software.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "South Louisiana Community College",
    company_name: "Student",
    icon: cap,
    iconBg: "#FFFFFF",
    date: "August 2021 - December 2022",
    points: [
      "Studied old technology in pursuit of an Associates of Applied Sciences",
      "Classes consisted of Java programming using JavaEE and Java Server Faces",
      "Learning networking fundamentals through Cisco Netacad coursework",
      "Programming classes were limited to the study of Java, HTML and C++",
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
    name: "Walter AI",
    description:
      "Walter is a full-stack Django webapp developed my friend and I. Powered by OpenAI's opensource Davinci model and our backend API wrapper. This, coupled with a our custom user model allows seamless login and user registration. Users are able to generate output using instruction and completion prompts. Users completions are able to viewd from the dashboard.",
    tags: [
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap-css",
        color: "blue-text-gradient",
      },
      {
        name: "SQLite3",
        color: "pink-text-gradient",
      },
    ],
    image: walter,
    source_code_link: "https://github.com/Jstevenson02/ai-writer",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
