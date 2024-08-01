// Grid.tsx

import { offerings } from '@/data';
import Card from './Card';

const Offers: React.FC = () => {
    return (
        <section className="overflow-hidden w-full bg-light-300 py-12">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {offerings.map((offering, index) => (
                    <Card key={index} offering={offering} />
                ))}
            </div>
        </section>
    );
};

export default Offers;
