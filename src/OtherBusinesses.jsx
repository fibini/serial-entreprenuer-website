import advertise from "./assets/advertise-here2.jpg"

export default function OtherBusinesses()
{
    return(
        <>
        <section id="otherbusinesses" className="flex flex-col items-center border-b border-gray-400 pt-16 pb-8">
                <div className="bg-black text-white text-center rounded-full w-1/2 py-5 mb-5">
                    <h2 className="text-3xl font-bold lg:text-6xl">
                        Other Businesses
                    </h2>
                </div>
                <div className= "flex flex-wrap justify-center gap-2">
                    <img src={advertise}/>
                    <img src={advertise}/>
                    <img src={advertise}/>
                    <img src={advertise}/>
                    <img src={advertise}/>
                    <img src={advertise}/>
                    <img src={advertise}/>
                    <img src={advertise}/>
                </div>
            </section>
        </>
    )
}