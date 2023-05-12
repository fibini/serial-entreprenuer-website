import advertise from "./assets/advertise-here2.jpg"

export default function OtherBusinesses()
{
    return(
        <>
        <section id="otherbusinesses">
                <div className="bg-black text-white text-center py-5">
                    <h2 className="text-3xl font-bold">
                        Other Businesses
                    </h2>
                </div>
                <div className= "flex flex-wrap justify-center">
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