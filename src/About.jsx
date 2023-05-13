import portrait from './assets/serialentrep.jpg'

export default function About()
{
    return(
        <>
        <section id="about" className="text-center w-30 pt-16">
                <h1 className="text-3xl font-bold lg:text-6xl text-white py-5">
                    ABOUT ME
                </h1>
            <div className=" sm:flex justify-center ml-10 mr-10 text-center gap-5">
                <div className="flex justify-center mb-5">
                    <img className="border-2 rounded-md sm:h-auto mt-5 w-60 md:max-w-screen-md" src={portrait} alt="portrait"/> 
                </div>
                <div className="bg-black text-white border-2 rounded-md h-auto lg:w-1/2 text-xl leading-relaxed">
                    <p>Hi my name is Tanukeuno-Ashock Rowe, I am also known as Tanuke(Tan-new-kay). I am a serial entrepreneur, this means I am the CEO of many businesses. These businesses include Real Estate(sales and rentals), Property Management, Concierge services, Taxi and Hired car services, Recruiting services, Self Improvement, Weight loss, Hormonal balence, Dog(sales), Security services and even Cosmetics and Freighting.</p>
                </div>
            </div>
        </section>
    </>  
    )
}