import { Card } from 'flowbite-react';
import gantBlue from '../assets/gantBlue.webp';
import gantGris from '../assets/gantGris.webp';
import gantrose from '../assets/gantrose.webp';

export default function MyProducts() {
    const services = [
        { id: 1, title: "Gent Blue", description: "Price: Blue Gant 5$", image: gantBlue },
        { id: 2, title: "Gant Gris", description: "Price: Gris Gant 5$", image: gantGris },
        { id: 3, title: "Gant Pink", description: "Price: Pink Gant 5$", image: gantrose }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-32 md:px-44">
            {services.map(service => (
                <Card
                    key={service.id}
                    className="max-w-lg"
                    imgAlt={service.title}
                    imgSrc={service.image}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                        {service.title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                        {service.description}
                    </p>
                </Card>
            ))}
        </div>
    );
}

