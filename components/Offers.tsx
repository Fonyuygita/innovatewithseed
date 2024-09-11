// Grid.tsx

import { offerings } from '@/data';
import Card from './Card';
import { useTheme } from './context/ThemeContext';

const Offers: React.FC = () => {
    const { theme } = useTheme()


    return (
        <section className={`overflow-hidden w-full  py-12 ${theme === 'light' ? 'text-gray-600 bg-light-300 ' : ' text-light-300 bg-gray-800'}`}>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {offerings.map((offering, index) => (
                    <Card key={index} offering={offering} />
                ))}
            </div>
        </section>
    );
};

export default Offers;
