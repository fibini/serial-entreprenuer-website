import review1 from "./assets/review1.png"
import review2 from "./assets/review2.png"
import review3 from "./assets/review3.png"

export default function Reviews ()
{
    return(
        <>
            <div className="py-5 mx-5">
                <h3 className="text-center text-xl text-white font-burtons dark:text-black">
                    HEAR WHAT OUR CUSTOMERS HAVE TO SAY
                </h3>
                <div className="flex flex-col gap-3 items-center py-3 lg:flex-row lg:mx-10 ">
                    <div className="border-4 border-gray-500 rounded-xl">
                        <img src={review1} alt="first review" />
                    </div>
                    <div className="border-4 border-gray-500 rounded-xl">
                        <img src={review2} alt="first review" />
                    </div>
                    <div className="border-4 border-gray-500 rounded-xl">
                        <img src={review3} alt="first review" />
                    </div>
                </div>
            </div> 
        </>
    )
}