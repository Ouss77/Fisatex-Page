import product3 from '../assets/product3.avif';
import product4 from '../assets/product4.avif';
import product5 from '../assets/product5.avif';
import product6 from '../assets/product6.avif';
import product7 from '../assets/product7.avif';
import gantBlue from '../assets/gantBlue.webp'
import gantGris from '../assets/gantGris.webp'
import gantrose from '../assets/gantrose.webp'
function Services() {
    const services = [
        {id: 1, title: "Gent Blue", description: "", image: gantBlue},
        {id: 2, title: "Gant Gris", description: "", image: gantGris},
        {id: 3, title: "Gant Pink ", description: "", image: gantrose}
    ];

    return (
<>

<div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
    <div className='text-center my-8'>
        <h2 className='text-4xl text-neutralDGray font-semibold mb-2'>Why Using Our Gants Experience ?</h2>
        <p className='text-neutralGrey'>Revitalize your skin, leaving it refreshed, rejuvenated, and impeccably clean</p>
        <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
            <img src={product3} alt='' />
            <img src={product4} alt='' />
            <img src={product5} alt='' />
            <img src={product6} alt='' />
            <img src={product7} alt='' />
        </div>
    </div>
</div>
<div className='bg-red-200 py-12 mb-20'> 
    <div className='mt-20 md:w-1/2 mx-auto text-center'>
        <h2 className='text-4xl text-neutralDGray font-semibold mb-3'>Explore Our Product Packages and Available Colors</h2>
        <p className='text-neutralGrey'>Which Color Do You Love the Most? Share Your Preference!</p>
    </div>
    <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
        {services.map(service => (
            <div key={service.id} className='border px-4 py-8 md:max-w-[300px] mx-auto md:h-auto rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex flex-col justify-between'>
                <div>
                    <img src={service.image} alt='' className='mx-auto mb-4 h-60' />
                    <h4 className='text-2xl font-bold text-brandPrimary mb-2 text-center'>{service.title}</h4>
                    <p className='text-sm text-neutralGrey'>{service.description}</p>
                </div>
            </div>
        ))}
    </div>
</div>

</>

    );
}

export default Services;
