// import Slide from './Slide';
import { FaSeedling, FaLaptopCode, FaUsers } from 'react-icons/fa';
import Slide from './Slide';

const slides = [
    {
        icon: FaSeedling,
        title: 'Introduction',
        description: 'Welcome to SEED, a tech company focused on Skills Enhancement and Growing Talents.',
    },
    {
        icon: FaLaptopCode,
        title: 'Our Mission',
        description: 'To enhance skills and empower individuals through cutting-edge digital solutions.',
    },
    {
        icon: FaUsers,
        title: 'Our Vision',
        description: 'Creating a digitally empowered community with enhanced skills for a better future.',
    },

    {
        icon: FaSeedling,
        title: 'Introduction',
        description: 'Welcome to SEED, a tech company focused on Skills Enhancement and Empowerment through Digitalization.',
    },

    {
        icon: FaSeedling,
        title: 'Introduction',
        description: 'Welcome to SEED, a tech company focused on Skills Enhancement and Growing Talents.',
    },
    {
        icon: FaLaptopCode,
        title: 'Our Mission',
        description: 'To enhance skills and empower individuals through cutting-edge digital solutions.',
    },



];

const SlidesContainer = () => {
    return (
        <div className="space-y-8 grid md:grid-cols-3 grid-cols-1 w-full px-3 gap-4">
            {slides.map((slide, index) => (
                <Slide key={index} {...slide} />
            ))}
        </div>
    );
};

export default SlidesContainer;
