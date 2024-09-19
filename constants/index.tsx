import { FAQ, Gender, ProgramsProps, Testimonial } from "./type";

// export const slideShowData = [
//     {
//         id: 1,
//         title: "Always fresh & always crispy & always hot",
//         image: "hero-container1"
//     },
//     {
//         id: 2,
//         title: "We Deliver your order wherever you are ",
//         image: "hero-container2"
//     },
//     {
//         id: 3,
//         title: "The bet piza to share with your family",
//         image: "hero-container3"
//     },

//     {
//         id: 4,
//         title: "The bet piza to share with your family",
//         image: "hero-container4"
//     },


//     {
//         id: 5,
//         title: "The bet piza to share with your family",
//         image: "hero-container5"
//     },

//     {
//         id: 5,
//         title: "The bet piza to share with your family",
//         image: "hero-container5"
//     }


// ]

export
    const testimonials: Testimonial[] = [
        {
            name: 'Abdul Fadiga',
            image: '/testimonial/abdul.png',
            stars: '/star.svg',
            text: "SEED nurtures tech talent in diverse fields. Their full-stack web development program offers exceptional hands-on experience, equipping with technical skills and a problem-solving mindset for the dynamic tech landscape.",
            title: "Student-Cs"
        },

        {
            name: 'Nc Franklin',
            image: '/testimonial/frank.png',
            stars: '/star.svg',
            text: "SEED's 50-day code bootcamp transformed my tech skills and career prospects! Highly recommend for aspiring developers",
            title: 'student'
        },

        {
            name: 'Favour Deoum',
            image: '/testimonial/favour.png',
            stars: '/star.svg',
            text: "SEED offers unparalleled tech growth. From zero knowledge to a remarkable skill level, the bootcamp provides detailed guidance and a supportive environment. It feels like home, fostering consistency and resilience. SEED cultivates a tech family, encouraging perseverance and progress.",
            title: 'Student'
        },

        {
            name: 'Mbinghonyi Tracy',
            image: '/testimonial/tracy.png',
            stars: '/star.svg',
            text: "SEED embodies innovation with a plethora of cutting-edge technologies, fostering exploration in the tech realm. Experts passionately mentor youth, driving forward technological boundaries with enthusiasm.",
            title: "Student"
        },

        {
            name: 'Dohbit Carlen',
            image: '/testimonial/carlen.png',
            stars: '/star.svg',
            text: "nitially skeptical about SEED, this bootcamp shifted my perspective towards tech. Instructor Mr. Gita is supportive, pushing growth. Building a diverse network, like Mr. Emmanuel, enhances learning. As a high school student, grasping course material is challenging, but I strive for progress.",
            title: "Student"
        },

        {
            name: 'Aloumbah Hope',
            image: '/testimonial/hope.png',
            stars: '/star.svg',
            text: "Great experience at SEED, dedicated tutors ensure understanding.Comfortable environment with resources for smooth studies.Recommend for starters",
            title: "Student"
        },

        {
            name: 'Mark',
            image: '/testimonial/mark.png',
            stars: '/star.svg',
            text: "SEED's 50 Days Of Code transformed my tech career. Intensive yet rewarding, with passionate tutors covering frontend and backend skills. Structured syllabus ensures vital topics. Recommend this challenge to jumpstart your tech journey—an investment in your future.",
            title: "Student"
        },


        {
            name: 'Zino Grace',
            image: '/testimonial/zino.png',
            stars: '/star.svg',
            text: "SEED's 50-day code bootcamp transformed my tech skills and career prospects! Highly recommend for aspiring developers",
            title: "Student"
        },


        // Add more testimonials as needed
    ];

export const faqs: FAQ[] = [

    {
        question: 'Who is the CEO of Seed?',
        answer: 'Cheko Yohane is the CEO of Seed.',
    },

    {
        question: "What is the full meaning of SEED?",
        answer: "Skill Enhancement and Empowerment through Digitalization"
    },

    {
        question: 'What is Seed?',
        answer: 'Seed is a tech company founded by Cheko Yohane, Fonyuy Gita, and Fien Dora. It aims to help young talents excel in the tech industry by providing necessary tools and resources.',
    },
    {
        question: 'Who founded Seed?',
        answer: 'Seed was founded by Cheko Yohane, Fonyuy Gita, and Fien Dora.',
    },
    {
        question: 'Where is Seed located?',
        answer: 'Seed is located in Bamenda, North West Region of Cameroon.',
    },
    {
        question: 'What is the mission of Seed?',
        answer: 'The mission of Seed is to transform the lives of many in the tech industry by nurturing them with essential resources and tools.',
    },

    {
        question: 'What services does Seed offer?',
        answer: 'Seed offers a variety of services including software development, mentoring, and resource provision.',
    },
    {
        question: 'How can I get involved with Seed?',
        answer: 'You can get involved with Seed by reaching out through our website or social media channels.',
    },
    {
        question: 'How does Seed aim to help young talents excel in tech?',
        answer: 'Seed aims to help young talents excel in tech by providing them with the necessary tools, resources, and mentorship opportunities.'
    }
];


export const techCourses = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "Docker",
    "Kubernetes",
    "Python",
    "Machine Learning",
    "Data Science",
];
export const level = ["Beginner", "Intermediate", "Advance, Other"];
export const time = ["online", "onside", "Both", "Other"];

export const Departments = [
    {
        image: "/icons/dr-green.png",
        name: "NAHPI",
    },
    {
        image: "/icons/dr-cameron.png",
        name: "COLTECH",
    },
    {
        image: "/icons/department.png",
        name: "MACS",
    },
    {
        image: "/icons/department.png",
        name: "CATUC",
    },
    {
        image: "/icons/department.png",
        name: "CAMPSCI",
    },
    {
        image: "/icons/department.png",
        name: "HTTTC",
    },
    {
        image: "/icons/department.png",
        name: "POLYTECH",
    },
    {
        image: "/icons/department.png",
        name: "Other",
    },

];



export const Programs = [
    {
        image: "/program/cyber.png",
        name: "CyberSecurity",
    },
    {
        image: "/program/ai.png",
        name: "Ai/Machine Learning/Data Science",
    },
    {
        image: "/program/frontEbd.png",
        name: "FrontEnd Development",
    },
    {
        image: "/program/.png",
        name: "App Development",
    },
    {
        image: "/program/backend.png",
        name: "Backend Development",
    },
    {
        image: "/program/embeded.png",
        name: "Embeded System",
    },


];





export const IdentificationTypes = [
    "Birth Certificate",
    "National Identity Card",
    "Student ID Card",

];







export const MyPrograms: ProgramsProps[] = [
    { id: 1, title: 'Cyber Security Internship', description: 'Gain real-world experience in cybersecurity.', image: '/blog.png' },
    { id: 2, title: 'Web Development Internship', description: 'Hands-on experience in web development.', image: '/banner.png' },
    { id: 3, title: 'Machine Learning Internship', description: 'Practical experience in machine learning.', image: '/blog.png' },
    { id: 4, title: 'Data Science Internship', description: 'Work on real data science projects.', image: '/banner.png' },
    { id: 5, title: 'AI Research Internship', description: 'Contribute to AI research projects.', image: '/blog.png' },
    { id: 6, title: 'Cyber Security Bootcamp', description: 'Intensive training in cybersecurity.', image: '/banner.png' },
    { id: 7, title: 'Web Development Bootcamp', description: 'Learn web development in a short time.', image: '/blog.png' },
    { id: 8, title: 'Machine Learning Bootcamp', description: 'Intensive machine learning training.', image: '/banner.png' },
    { id: 9, title: 'Data Science Bootcamp', description: 'Comprehensive data science training.', image: '/blog.png' },
    { id: 10, title: 'AI Bootcamp', description: 'Learn AI concepts and applications.', image: '/banner.png' },
    { id: 11, title: 'Cyber Security Holiday Tech Camp', description: 'Fun and educational cybersecurity camp.', image: '/blog.png' },
    { id: 12, title: 'Web Development Holiday Tech Camp', description: 'Learn web development during holidays.', image: '/banner.png' },
    { id: 13, title: 'Machine Learning Holiday Tech Camp', description: 'Explore machine learning in a fun way.', image: '/blog.png' },
    { id: 14, title: 'Data Science Holiday Tech Camp', description: 'Engaging data science activities.', image: '/banner.png' },
    { id: 15, title: 'AI Holiday Tech Camp', description: 'AI projects and activities for kids.', image: '/blog.png' },
    { id: 16, title: 'Cyber Security Tech Event', description: 'Networking and learning in cybersecurity.', image: '/banner.png' },
    { id: 17, title: 'Web Development Tech Event', description: 'Meet and learn from web developers.', image: '/blog.png' },
    { id: 18, title: 'Machine Learning Tech Event', description: 'Networking and learning in machine learning.', image: '/banner.png' },
    { id: 19, title: 'Data Science Tech Event', description: 'Connect with data science professionals.', image: '/blog.png' },
    { id: 20, title: 'AI Tech Event', description: 'AI-focused networking and learning.', image: '/banner.png' },
    { id: 21, title: 'Cyber Security Mentorship Program', description: 'Guidance from cybersecurity experts.', image: '/blog.png' },
    { id: 22, title: 'Web Development Mentorship Program', description: 'Mentorship from web development professionals.', image: '/banner.png' },
    { id: 23, title: 'Machine Learning Mentorship Program', description: 'Learn from machine learning experts.', image: '/blog.png' },
    { id: 24, title: 'Data Science Mentorship Program', description: 'Guidance from data science professionals.', image: '/banner.png' },
    { id: 25, title: 'AI Mentorship Program', description: 'Mentorship from AI professionals.', image: '/blog.png' },
    { id: 26, title: 'Cyber Security Online Course', description: 'Learn cybersecurity at your own pace.', image: '/banner.png' },
    { id: 27, title: 'Web Development Online Course', description: 'Self-paced web development course.', image: '/blog.png' },
    { id: 28, title: 'Machine Learning Online Course', description: 'Learn machine learning online.', image: '/banner.png' },
    { id: 29, title: 'Data Science Online Course', description: 'Online data science course.', image: '/blog.png' },
    { id: 30, title: 'AI Online Course', description: 'Self-paced AI course.', image: '/banner.png' },
    { id: 31, title: 'Cyber Security Hackathon', description: 'Competitive cybersecurity event.', image: '/blog.png' },
    { id: 32, title: 'Web Development Hackathon', description: 'Competitive web development event.', image: '/banner.png' },
    { id: 33, title: 'Machine Learning Hackathon', description: 'Machine learning coding competition.', image: '/blog.png' },
    { id: 34, title: 'Data Science Hackathon', description: 'Data science competition.', image: '/banner.png' },
    { id: 35, title: 'AI Hackathon', description: 'AI-focused coding competition.', image: '/blog.png' },
    { id: 36, title: 'Cyber Security Workshop', description: 'Hands-on cybersecurity workshop.', image: '/banner.png' },
    { id: 37, title: 'Web Development Workshop', description: 'Practical web development workshop.', image: '/blog.png' },
    { id: 38, title: 'Machine Learning Workshop', description: 'Hands-on machine learning workshop.', image: '/banner.png' },
    { id: 39, title: 'Data Science Workshop', description: 'Practical data science workshop.', image: '/blog.png' },
    { id: 40, title: 'AI Workshop', description: 'Hands-on AI workshop.', image: '/banner.png' },
    { id: 41, title: 'Cyber Security Seminar', description: 'Educational cybersecurity seminar.', image: '/blog.png' },
    { id: 42, title: 'Web Development Seminar', description: 'Educational web development seminar.', image: '/banner.png' },
    { id: 43, title: 'Machine Learning Seminar', description: 'Educational machine learning seminar.', image: '/blog.png' },
    { id: 44, title: 'Data Science Seminar', description: 'Educational data science seminar.', image: '/banner.png' },
    { id: 45, title: 'AI Seminar', description: 'Educational AI seminar.', image: '/blog.png' },
    { id: 46, title: 'Cyber Security Conference', description: 'Conference on cybersecurity topics.', image: '/banner.png' },
    { id: 47, title: 'Web Development Conference', description: 'Conference on web development.', image: '/blog.png' },
    { id: 48, title: 'Machine Learning Conference', description: 'Conference on machine learning.', image: '/banner.png' },
    { id: 49, title: 'Data Science Conference', description: 'Conference on data science.', image: '/blog.png' },
    { id: 50, title: 'AI Conference', description: 'Conference on AI topics.', image: '/banner.png' },
];



export const StudentFormDefaultValues = {
    name: "",
    email: "",
    phone: "",
    birthDate: new Date(Date.now()),
    gender: "Male" as Gender,
    address: "",
    occupation: "",
    department: "",
    program: "",
    notes: "",
    reason: "",
    ambitions: "",
    site: "",
    identificationType: "Birth Certificate",
    identificationNumber: "",
    identificationDocument: [],
    applicationDocument: ""
    //   treatmentConsent: false,
    //   disclosureConsent: false,
    //   privacyConsent: false,
};
