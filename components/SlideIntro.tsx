// import Slide from './Slide';
import { FaSeedling, FaLaptopCode, FaUsers, FaBook, FaBrain, FaHandsHelping } from 'react-icons/fa';
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
        description: 'We enhance skills and empower individuals through cutting-edge digital solutions.',
    },
    {
        icon: FaUsers,
        title: 'Our Vision',
        description: 'Creating a digitally empowered community with enhanced skills for a better future.',
    },
    {
        icon: FaBook,
        title: 'Empowering Learning',
        description: 'We foster a culture of continuous learning, providing resources and opportunities for growth in the tech field.',
    },
    {
        icon: FaBrain,
        title: 'Innovative Solutions',
        description: 'We encourage creativity and innovation, guiding young minds to develop cutting-edge solutions that make a difference.',
    },
    {
        icon: FaHandsHelping,
        title: 'Supportive Community',
        description: 'We believe in the power of collaboration and support, building a community where young talent can thrive and succeed together.',
    }


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
