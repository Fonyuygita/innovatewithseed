export const GenderOptions = ["Male", "Female", "Other"];

export const SiteOptions = ["Online", "Offline", "Other"];


import { ReactNode } from 'react';
import { FaHandshake, FaProjectDiagram, FaLightbulb, FaRocket, FaUsers, FaChartLine, FaCogs, FaLaptopCode, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';

export interface Offering {
  title: string;
  description: string;
  icon: ReactNode;
}


interface MentorshipProps {
  id?: number;
  name?: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  img?: string;
  link?: string;
  portfolio?: string;
}
[];

export const MentorshipData: MentorshipProps[] = [
  {
    id: 1,
    name: "Fonyuy Gita",
    title: "Web Development",
    description:
      "Fonyuy Gita is a skilled web developer with expertise in front-end and back-end technologies. She excels in creating responsive and user-friendly websites using HTML, CSS, JavaScript, and various frameworks like React and Angular",
    img: "/team/d1.png",
    link: "https://fonyuygita.vercel.app",
    portfolio: "",
  },
  {
    id: 2,
    name: "Nchanji Faithful",
    title: "App Development",
    description:
      "Bob specializes in app development, focusing on creating mobile applications for both iOS and Android platforms. He is proficient in languages like Swift, Kotlin, and frameworks like Flutter and React Native.",
    img: "/team/d2.png",
    link: "",
    portfolio: "",
  },

  {
    id: 3,
    name: "Fien Dora",
    title: "Embedded System",
    description:
      "Fien is an embedded systems developer with exceptional skills in designing and optimizing hardware-software integration. He specializes in programming microcontrollers, developing real-time operating systems, and ensuring seamless communication between components. Proficient in C, C++, and assembly language, David leverages his expertise to build efficient and reliable embedded solution.",
    img: "/contact.png",
    link: "",
    portfolio: "",
  },

  {
    id: 4,
    name: "Ntunyu Serge",
    title: "Software Developer",
    description: "Serge is a software developer who thrives on creating innovative solutions through clean and efficient code.He excels in designing, developing, and maintaining software applications, with expertise in languages such as Java, JavaScript, and Python.David's skill set includes working with frameworks like React, Node.js, and Django, allowing him to build robust, scalable, and user-friendly applications.",
    img: "/team/serge.svg",
    link: "",
    portfolio: "",
  },



];


// types.ts
export interface Offering {
  title: string;
  description: string;
  icon: React.ReactNode;
}



// types.ts


export const offerings: Offering[] = [
  { title: 'Partnership', description: 'Collaborate with industry leaders.', icon: <FaHandshake /> },
  { title: 'Real-Life Projects', description: 'Work on real-world projects.', icon: <FaProjectDiagram /> },
  { title: 'Innovation', description: 'Drive innovation and creativity.', icon: <FaLightbulb /> },
  { title: 'Growth', description: 'Grow with new technology.', icon: <FaRocket /> },
  { title: 'Teamwork', description: 'Work with a dynamic team.', icon: <FaUsers /> },
  { title: 'Analytics', description: 'Leverage data and analytics.', icon: <FaChartLine /> },
  { title: 'Engineering', description: 'Engineering excellence.', icon: <FaCogs /> },
  { title: 'Development', description: 'Cutting-edge development.', icon: <FaLaptopCode /> },
  { title: 'Mobile Solutions', description: 'Innovative mobile solutions.', icon: <FaMobileAlt /> },
  { title: 'Security', description: 'Top-notch security.', icon: <FaShieldAlt /> },
];





