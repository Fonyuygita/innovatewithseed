import { FAQ, Gender, ProgramsProps, Testimonial, Site } from "./type";

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
            name: 'Pierrick Junior',
            image: '/testimonial/jj.png',
            stars: '/star.svg',
            text: "Seed changed my career path and made me love learning. Their experts and community helped me grow and believe in myself. I gained valuable tech skills and now see endless possibilities.",
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

    { status: "Register", id: 33, title: 'Week_end_of_code', description: 'Learn and get your hance dirty in the weekend of code.', image: '/woc.png' },
    { status: "Register", id: 1, title: 'Cyber Security Internship', description: 'Gain real-world experience in cybersecurity.', image: '/blog.png' },
    { status: "Register", id: 2, title: 'Web Development Internship', description: 'Hands-on experience in web development.', image: '/banner.png' },
    { status: "Register", id: 3, title: 'Embeded Systems Internship', description: 'Practical experience in machine learning.', image: '/blog.png' },
    { status: "Register", id: 4, title: 'Data Science Internship', description: 'Work on real data science projects.', image: '/banner.png' },
    { status: "Register", id: 5, title: 'AI Research Internship', description: 'Contribute to AI research projects.', image: '/blog.png' },
    { status: "Register", id: 6, title: 'App Development Internship', description: 'Intensive training App development.', image: '/vid/vid2.png' },
    { status: "Register", id: 7, title: 'Web Development Bootcamp', description: 'Learn web development in a short time.', image: '/blog.png' },
    { status: "Register", id: 8, title: 'Machine Learning Bootcamp', description: 'Intensive machine learning training.', image: '/banner.png' },
    { status: "Register", id: 9, title: 'Data Science Bootcamp', description: 'Comprehensive data science training.', image: '/blog.png' },
    { status: "Register", id: 10, title: 'AI Bootcamp', description: 'Learn AI concepts and applications.', image: '/banner.png' },
    { status: "Register", id: 11, title: 'Cyber Security Holiday Tech Camp', description: 'Fun and educational cybersecurity camp.', image: '/blog.png' },
    { status: "Register", id: 12, title: 'Web Development Holiday Tech Camp', description: 'Learn web development during holidays.', image: '/banner.png' },
    { status: "Register", id: 13, title: 'Machine Learning Holiday Tech Camp', description: 'Explore machine learning in a fun way.', image: '/blog.png' },
    { status: "Register", id: 14, title: 'Data Science Holiday Tech Camp', description: 'Engaging data science activities.', image: '/banner.png' },
    { status: "Register", id: 15, title: 'AI Holiday Tech Camp', description: 'AI projects and activities for kids.', image: '/blog.png' },

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
    site: "Online" as Site,
    applicationDocument: []
    //   treatmentConsent: false,
    //   disclosureConsent: false,
    //   privacyConsent: false,
};
