import { Carousel } from "flowbite-react";
import product1 from "../assets/product1.webp"
import home2 from "../assets/home2.webp";

// import product2 from "../assets/product2.webp"
function Home() {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
      <Carousel className="w-full mx-auto">
      <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
                <img src={product1} alt="" />
            </div>
            <div className="md:w-1/2">
                <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug">Quality & Experience
                <span className="text-brandPrimary leading-snug"> from 10 years</span></h1>
                <p className="text-neutralGray text-base mb-8">Order one for you and test it..</p>
                <button className="btn-primary">Contact Us</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
                <img src={home2} alt="" />
            </div>
            <div className="md:w-1/2">
                <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug">Quality & Experience
                <span className="text-brandPrimary leading-snug"> from 10 years</span></h1>
                <p className="text-neutralGray text-base mb-8">Order one for you and test it..</p>
                <button className="btn-primary">Contact Us</button>
            </div>
          </div>
        </Carousel>      

      </div>
    </div>
  );
}

export default Home;
