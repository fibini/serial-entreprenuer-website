import advertise from "./assets/advertise-here2.jpg"

export default function OtherBusinesses()
{
    return(
        <>
        <section id="otherbusinesses" className=" h-screen">
                <div className="bg-black text-white text-center py-5">
                    <h2 className="text-3xl font-bold">
                        Other Businesses
                    </h2>
                </div>
                <div className= "grid grid-rows-2 grid-flow-col gap-4">
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