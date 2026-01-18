// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import Soliditylogo from './assets/tech_logo/Soliditylogo.png';

import remote from "./assets/company_logo/remote.png";

import College_logo from "./assets/education_logo/College_logo.png";
import School_logo from "./assets/education_logo/School_logo.png";

import crowdFunding from "../assets/work_logo/crowdfunding.png";
import prepVerseIq from "../assets/work_logo/prepverse_iq.png";
import memecoinLaunchpad from "../assets/work_logo/memecoin_launchpad.png";
import supplyChain from "../assets/work_logo/supply_chain.png";
import ecommerceLogo from "../assets/work_logo/ecommerce.png";
import quizProject from "../assets/work_logo/quizproject.png";
import registerLogo from "../assets/work_logo/register.png";
import watchStore from "../assets/work_logo/watch_store.png";




export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'SASS', logo: sassLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React JS', logo: reactjsLogo },
            { name: 'Redux', logo: reduxLogo },
            { name: 'Next JS', logo: nextjsLogo },
            { name: 'Tailwind CSS', logo: tailwindcssLogo },
            { name: 'GSAP', logo: gsapLogo },
            { name: 'Material UI', logo: materialuiLogo },
            { name: 'Bootstrap', logo: bootstrapLogo },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node JS', logo: nodejsLogo },
            { name: 'Express JS', logo: expressjsLogo },
            { name: 'MySQL', logo: mysqlLogo },
            { name: 'MongoDB', logo: mongodbLogo },
            { name: 'Firebase', logo: firebaseLogo },
            { name: 'PostgreSQL', logo: postgreLogo },
            { name: 'Solidity', logo: Soliditylogo },
        ],
    },
    {
        title: 'Languages',
        skills: [
            { name: 'C', logo: cLogo },
            { name: 'C++', logo: cppLogo },
            { name: 'Python', logo: pythonLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'TypeScript', logo: typescriptLogo },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Postman', logo: postmanLogo },
            { name: 'Compass', logo: mcLogo },
            { name: 'Vercel', logo: vercelLogo },
            { name: 'Netlify', logo: netlifyLogo },
            { name: 'Figma', logo: figmaLogo },
        ],
    },
];


export const experiences = [
    {
        id: 0,
        img: remote,
        role: "Full-Stack Developer",
        company: "Freelance / Remote",
        date: "Mar 2025 - May 2025",
        desc: "Designed, developed, and deployed multiple full-stack decentralized applications (dApps) with a strong focus on Web3 technologies. Built responsive and user-friendly frontends, implemented secure and scalable smart contracts, and integrated blockchain-based features to deliver end-to-end decentralized solutions.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React JS",
            "Next JS",
            "Tailwind CSS",
            "Node JS",
            "Express JS",
            "MongoDB",
            "Solidity",
            "Hardhat",
            "Ethers.js",
            "Web3",
            "MetaMask",
            "IPFS",
        ],
    },
];


export const education = [
    {
        id: 0,
        img: College_logo,
        school: "Galgotias College of Engineering and Technology, Greater Noida, India",
        date: "2022 - 2026",
        grade: "CGPA: 8.5 / 10",
        desc: "Pursuing a Bachelor of Technology in Computer Science and Engineering with a strong focus on software development, data structures, algorithms, and web technologies. Gained hands-on experience through academic projects, full-stack web development, and blockchain-based applications. Actively building real-world projects and strengthening problem-solving skills to prepare for industry roles.",
        degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
    },
    {
        id: 1,
        img: School_logo,
        school: "Oxford Public School, Nehru Nagar, Delhi",
        date: "2021 - 2022",
        grade: "76%",
        desc: "Completed senior secondary education (Class XII) from Oxford Public School, Nehru Nagar, Delhi, under the CBSE board. Studied Physics, Chemistry, and Mathematics (PCM), building a strong foundation in analytical thinking, problem-solving, and core science concepts.",
        degree: "CBSE (XII) - PCM",
    },

    {
        id: 2,
        img: School_logo,
        school: "Oxford Public School, Nehru Nagar, Delhi",
        date: "2019 - 2020",
        grade: "78%",
        desc: "Completed secondary education (Class X) from Oxford Public School, Nehru Nagar, Delhi, under the CBSE board, gaining a strong academic foundation across core subjects and developing discipline, consistency, and problem-solving skills.",
        degree: "CBSE (X)",
    },

];

export const projects = [
    {
        id: 0,
        title: "PrepVerseIq",
        description:
            "PrepVerse-IQ is a real-time collaborative interview preparation platform built to simulate real interview environments. The platform enables live video calls, shared coding sessions, and instant messaging, allowing users to practice technical interviews collaboratively. It features real-time code execution, secure authentication, and seamless synchronization across devices for a smooth and engaging user experience.",
        image: prepVerseIq,
        tags: [
            "React JS",
            "Node JS",
            "MongoDB",
            "WebRTC",
            "Monaco Editor",
            "Stream SDK",
            "Piston API",
            "Inngest",
            "Clerk",
            "Real-Time Systems",
        ],
        github: "https://github.com/tehami326/prepverse-IQ",
        webapp: "https://prepverse-iq-m22mc.sevalla.app/",
    },

    {
        id: 1,
        title: "MemecoinLaunchpad",
        description:
            "A full-stack memecoin launchpad inspired by Pump.fun that enables users to create and deploy ERC-based tokens with ease. The platform features a responsive and intuitive interface for wallet interaction, seamless MetaMask integration, and secure smart contract execution. Built with modern Web3 technologies to deliver a smooth token creation and launch experience.",
        image: memecoinLaunchpad,
        tags: [
            "React JS",
            "Next JS",
            "Tailwind CSS",
            "Solidity",
            "Ethers.js",
            "MetaMask",
            "Web3",
            "Smart Contracts",
            "Vercel",
            "AWS",
        ],
        github: "https://github.com/tehami326/token-launchpad-dapp",
        webapp: "https://github.com/tehami326/token-launchpad-dapp",
    },

    {
        id: 2,
        title: "CrowdFunding",
        description:
            "A full-stack decentralized crowdfunding platform that allows users to create campaigns, donate securely, and withdraw funds in a transparent manner. The application leverages blockchain technology to ensure trustless fund management, with smart contracts deployed on the Ethereum Sepolia testnet and seamless wallet integration for real-time interactions.",
        image: crowdFunding,
        tags: [
            "React JS",
            "Node JS",
            "Solidity",
            "Hardhat",
            "Ethers.js",
            "MetaMask",
            "Web3",
            "Ethereum",
            "Sepolia Testnet",
            "Vercel",
            "AWS",
        ],
        github: "https://github.com/tehami326/CrowdFunding-repo",
        webapp: "https://github.com/tehami326/CrowdFunding-repo",
    },

    {
        id: 3,
        title: "SupplyChain",
        description:
            "A full-stack product tracking application designed to provide real-time transparency across the supply chain. The platform allows users to track and update shipment statuses through an intuitive interface while ensuring reliable data handling and integration with backend services for scalable operations.",
        image: supplyChain,
        tags: [
            "React JS",
            "Next JS",
            "Tailwind CSS",
            "Node JS",
            "Express JS",
            "Blockchain",
            "Supply Chain",
            "REST APIs",
            "Vercel",
            "AWS",
        ],
        github: "https://github.com/tehami326/Supply-Chain-Tracking-repo",
        webapp: "https://github.com/tehami326/Supply-Chain-Tracking-repo",
    },

    {
        id: 4,
        title: "Ecommerce",
        description:
            "A fully functional e-commerce shoe store built with React.js featuring real-time search and advanced multi-criteria filtering. Users can browse products by category, brand, price range, and color with instant updates. The application showcases a responsive UI, dynamic product rendering, and a scalable component-based architecture.",
        image: ecommerceLogo,
        tags: [
            "React JS",
            "JavaScript",
            "CSS3",
            "Vite",
            "React Hooks",
            "UI/UX",
        ],
        github: "https://github.com/tehami326/E-Commerce-react-project",
        webapp: "https://e-commerce-react-project-beta.vercel.app/",
    },

    {
        id: 5,
        title: "WatchStore",
        description:
            "A modern, responsive e-commerce web application for browsing and filtering watches, built with React, TypeScript, and Zustand for state management. Features interactive product cards, multi-angle views, advanced filtering by country, color, and price, and a mobile-friendly responsive design.",
        image: watchStore,
        tags: ["React", "TypeScript", "Zustand", "Tailwind CSS", "Vite", "React Icons"],
        github: "https://github.com/tehami326/Watch-Store-Project",
        webapp: "https://watch-store-project-six.vercel.app/",
    },

    {
        id: 6,
        title: "Register",
        description:
            "A simple and efficient full-stack task management application with user authentication. Create, manage, and organize your tasks with ease. Features secure registration and login, task CRUD operations, search functionality, and a responsive design.",
        image: registerLogo,
        tags: ["React", "Vite", "React Router", "Axios", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "bcryptjs"],
        github: "https://github.com/tehami326/FullStack-Task-manager",
        webapp: "https://github.com/tehami326/FullStack-Task-manager",
    },

    {
        id: 7,
        title: "Quizproject",
        description:
            "A fully functional quiz application built with React, TypeScript, Zustand, and Tailwind CSS. Features 10 web development questions with multiple-choice format, progress tracking, navigation controls, score calculation, and quiz reset functionality.",
        image: quizProject,
        tags: ["React", "TypeScript", "Zustand", "Tailwind CSS", "Vite", "React Icons"],
        github: "https://github.com/tehami326/INTERACTIVE-QUIZ-APPLICATION",
        webapp: "https://interactive-quiz-application-roan.vercel.app/",
    },

];  