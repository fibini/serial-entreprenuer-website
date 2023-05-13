import advertise from "./assets/advertise-here2.jpg"

export default function OtherBusinesses()
{
    return(
        <>
        <section id="otherbusinesses" className="flex flex-col items-center border-b border-gray-400 pt-16 pb-8">
                <div className="bg-black text-white text-center rounded-full w-1/2 py-5 mb-5  dark:text-black dark:bg-slate-100">
                    <h2 className="text-3xl font-burtons font-md lg:text-6xl">
                        OTHER BUSINESSES
                    </h2>
                </div>
                <div className= "lg:flex flex-wrap justify-center gap-4">
                    <img className="basis-1/5" src={advertise}/>
                    <img className="basis-1/5" src={advertise}/>
                    <img className="basis-1/5" src={advertise}/>
                    <img className="basis-1/5" src={advertise}/>
                    <img className="basis-1/5" src={advertise}/>
                    <img className="basis-1/5" src={advertise}/>
                    <img className="basis-1/5" src={advertise}/>
                    <img className="basis-1/5" src={advertise}/>
                </div>
            </section>
        </>
    )
}