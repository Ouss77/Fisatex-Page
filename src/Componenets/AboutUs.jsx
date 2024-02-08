import about from '../assets/about.webp'
function AboutUs() {
  return (
    <div id="about" >
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 mb-52">
            <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                <div><img src={about} alt="" className='h-auto max-w-96 rounded-lg'/></div>
                <div className="md:w-3/5 mx-auto text-center">
                    <h2 className="text-4xl text-neutralDGray font-semibold mb-4 md:w4/5">Lets talk about our Experience breifly</h2>
                    <p className="md:w-3/4 text-sm text-neutralGrey mb-8 md:ml-20">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum at ad hic error cum consequatur, sit
                        tenetur natus ducimus eveniet libero recusandae consequuntur, debitis vel laudantium facilis. Natus, 
                        repellendus neque.
                    </p>
                    <button className="btn-primary">Learn  More</button>
                </div>
            </div>
        </div>
        <div className='className="px-4 lg:px-14 max-w-screen-2xl mx-auto'></div>
    </div>
  )
}

export default AboutUs