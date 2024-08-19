import { FAQ, Testimonial } from "./type";

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
            name: 'Mbingolo Tracy',
            image: '/testimonial/tracy.png',
            stars: '/star.svg',
            text: "SEED embodies innovation with a plethora of cutting-edge technologies, fostering exploration in the tech realm. Experts passionately mentor youth, driving forward technological boundaries with enthusiasm.",
            title: "Student"
        },

        {
            name: 'Dorhbit Carlen',
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
