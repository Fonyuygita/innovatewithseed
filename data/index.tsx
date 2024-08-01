
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

const MentorshipData: MentorshipProps[] = [
  {
    id: 1,
    name: "Fonyuy Gita",
    title: "Web Development",
    description:
      "Fonyuy Gita is a skilled web developer with expertise in front-end and back-end technologies. She excels in creating responsive and user-friendly websites using HTML, CSS, JavaScript, and various frameworks like React and Angular",
    img: "",
    link: "",
    portfolio: "",
  },
  {
    id: 2,
    name: "Bob",
    title: "App Development",
    description:
      "Bob specializes in app development, focusing on creating mobile applications for both iOS and Android platforms. He is proficient in languages like Swift, Kotlin, and frameworks like Flutter and React Native.",
    img: "",
    link: "",
    portfolio: "",
  },

  {
    id: 3,
    name: "David",
    title: "Machine Learning (Artificial Intelligence)",
    description:
      "David is a data scientist who excels in analyzing complex data sets, building predictive models, and extracting valuable insights. He is proficient in tools like Python, R, and libraries such as Pandas and Scikit-learn.",
    img: "",
    link: "",
    portfolio: "",
  },

  {
    id: 4,
    name: "Charles",
    title: "Cyber Security",
    description:
      "Charlie is a cybersecurity expert with in-depth knowledge of network security, cryptography, and ethical hacking. He works on securing systems, identifying vulnerabilities, and implementing robust security measures.",
    img: "",
    link: "",
    portfolio: "",
  },

  {
    id: 5,
    name: "Eve",
    title: "Cloud Computing",
    description:
      "Eve specializes in cloud computing, working with cloud platforms like AWS, Azure, and Google Cloud. She designs scalable and reliable cloud architectures, manages cloud resources efficiently, and ensures high availability.",
    img: "",
    link: "",
    portfolio: "",
  },

  {
    id: 6,
    name: "Frank",
    title: "Mathematics",
    description:
      "Frank is a mathematician with expertise in various branches of mathematics such as algebra, calculus, and statistics. He applies mathematical principles to solve complex problems in fields like physics, engineering, and computer science.",
    img: "",
    link: "",
    portfolio: "",
  },

  {
    id: 6,
    title: "Data Structure and Algorithm",
    description: "",
    img: "",
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




