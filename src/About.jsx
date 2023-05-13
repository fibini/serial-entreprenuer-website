import portrait from './assets/serialentrep.jpg'

export default function About()
{
    return(
        <>
        <section id="about" className="text-center w-30 pt-16 dark:bg-slate-100">
                <h1 className="text-3xl font-burtons font-md lg:text-6xl text-white py-5  dark:text-black">
                    ABOUT ME
                </h1>
            <div className=" sm:flex justify-center ml-10 mr-10 text-center gap-5">
                <div className="flex justify-center relative py-10">
                    <img className="border-2 rounded-full w-80 h-80 mt-5 md:h-96 md:w-96" src={portrait} alt="portrait"/> 
                </div>
                <div className="bg-black text-white border-2 rounded-md h-auto lg:w-1/2 text-xl leading-relaxed  dark:text-black dark:bg-slate-100">
                    <p className=' text-md py-5 leading-8 md:text-3xl md:py-20 max-w-3xl mx-auto'>Hi my name is Tanukeuno-Ashock Rowe, I am also known as Tanuke(Tan-new-kay). I am a serial entrepreneur, this means I am the CEO of many businesses. These businesses include Real Estate(sales and rentals), Property Management, Concierge services, Taxi and Hired car services, Recruiting services, Self Improvement, Weight loss, Hormonal balence, Dog(sales), Security services and even Cosmetics and Freighting.</p>
                </div>
            </div>
        </section>
    </>  
    )
}