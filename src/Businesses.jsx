import { useState } from "react"
// import { Carousel } from "flowbite-react"
import apply from './assets/apply-yourself.png'
import affordableAdvertising from './assets/advertising.png'
import tanup from './assets/tanup.png'
import slimchances from './assets/slimchances.png'
import trwSecurity from './assets/security.jpg'
import finao from './assets/finao.png'
import wiggin from './assets/wiggin.png'
import furrever from './assets/furrever.png'
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai"

export default function Businesses()
{
  const [finaoIsOpen, setFinaoIsOpen] = useState(false)
  const [furreverIsOpen, setFurrverIsOpen] = useState(false)
  const [marketingIsOpen, setMarketingIsOpen] = useState(false)
  const [tanupIsOpen, setTanupIsOpen] = useState(false)
  const [slimChancesIsOpen, setSlimChancesIsOpen] = useState(false)
  const [wigginIsOpen, setWigginIsOpen] = useState(false)
  const [applyIsOpen, setApplyIsOpen] = useState(false)
  const [trwIsOpen, setTrwIsOpen] = useState(false)
    return(
        <>
          <section className=" text-white dark:text-black">
            <h2 className="text-3xl font-burtons font-md text-center py-5 lg:text-6xl">MY BUSINESSES</h2>
            <div className="relative flex flex-col items-center w-auto basis-1/2 mb-5 hover:cursor-pointer">
              <button onClick={() => setFinaoIsOpen((prev) => !prev)} className=" text-2xl p-2 w-full flex items-center justify-between border-2 border-gray-300 rounded-lg mb-1">
                Finao Conquer Realty
                {!finaoIsOpen ? (
                  <AiOutlineCaretDown className="h-8" />
                ): (
                  <AiOutlineCaretUp className="h-8" />
                )}
              </button>
                {finaoIsOpen && (
                  <div className="absolute top-10 rounded-lg border-4 border-black z-10">
                    <a href="https://www.facebook.com/FINAOCONQUERREALTY" target="_blank" rel="noreferrer">
                      <img
                      className=" h-96 w-screen"
                      src={finao}
                      alt="real-estate"
                      />
                    </a>
                  </div>
                )}
                <button onClick={() => setFurrverIsOpen((prev) => !prev)} className=" text-2xl p-2 w-full flex items-center justify-between border-2 border-gray-300 rounded-lg my-1">
                Furrever Puppies
                {!furreverIsOpen ? (
                  <AiOutlineCaretDown className="h-8" />
                ): (
                  <AiOutlineCaretUp className="h-8" />
                )}
              </button>
                {furreverIsOpen && (
                  <div className="absolute top-24 rounded-lg border-4 border-black z-10 mt-2">
                    <a href="https://www.instagram.com/furreverpuppiesrhewardfhengshu/" target="_blank" rel="noreferrer">
                      <img
                      className=" h-96 w-screen"
                      src={furrever}
                      alt="puppies"
                      />
                    </a>
                  </div>
                )}
                <button onClick={() => setMarketingIsOpen((prev) => !prev)} className=" text-2xl p-2 w-full flex items-center justify-between border-2 border-gray-300 rounded-lg my-1">
                Advertising & Marketing
                {!marketingIsOpen ? (
                  <AiOutlineCaretDown className="h-8" />
                ): (
                  <AiOutlineCaretUp className="h-8" />
                )}
              </button>
                {marketingIsOpen && (
                  <div className="absolute top-40 rounded-lg border-4 border-black z-10">
                    <a href="https://www.facebook.com/affordableadvertising20" target="_blank" rel="noreferrer">
                      <img
                      className=" h-96 w-screen"
                      src={affordableAdvertising}
                      alt="advertising"
                      />
                    </a>
                  </div>
                )}
                <button onClick={() => setTanupIsOpen((prev) => !prev)} className=" text-2xl p-2 w-full flex items-center justify-between border-2 border-gray-300 rounded-lg my-1">
                Tanup Entertainment
                {!tanupIsOpen ? (
                  <AiOutlineCaretDown className="h-8" />
                ): (
                  <AiOutlineCaretUp className="h-8" />
                )}
              </button>
                {tanupIsOpen && (
                  <div className="absolute top-52 rounded-lg border-4 border-black z-10 mt-4">
                    <a href="https://www.facebook.com/profile.php?id=100064144205268" target="_blank" rel="noreferrer">
                      <img
                      className=" h-96 w-screen"
                      src={tanup}
                      alt="entertainment"
                      />
                    </a>
                  </div>
                )}
                <button onClick={() => setSlimChancesIsOpen((prev) => !prev)} className=" text-2xl p-2 w-full flex items-center justify-between border-2 border-gray-300 rounded-lg my-1">
                Slim Chances
                {!slimChancesIsOpen ? (
                  <AiOutlineCaretDown className="h-8" />
                ): (
                  <AiOutlineCaretUp className="h-8" />
                )}
              </button>
                {slimChancesIsOpen && (
                  <div className="absolute top-64 rounded-lg border-4 border-black z-10 mt-6">
                    <a href="https://www.facebook.com/profile.php?id=100064482830532" target="_blank" rel="noreferrer">
                      <img
                      className=" h-96 w-screen"
                      src={slimchances}
                      alt="weight-loss"
                      />
                    </a>
                  </div>
                )}
                <button onClick={() => setWigginIsOpen((prev) => !prev)} className=" text-2xl p-2 w-full flex items-center justify-between border-2 border-gray-300 rounded-lg my-1">
                Wiggin Out
                {!wigginIsOpen ? (
                  <AiOutlineCaretDown className="h-8" />
                ): (
                  <AiOutlineCaretUp className="h-8" />
                )}
              </button>
                {wigginIsOpen && (
                  <div className="absolute top-72 rounded-lg border-4 border-black z-10 mt-14">
                    <a href="https://www.facebook.com/profile.php?id=100063960162770" target="_blank" rel="noreferrer">
                      <img
                      className=" h-96 w-screen"
                      src={wiggin}
                      alt="cosmetics"
                      />
                    </a>
                  </div>
                )}
                <button onClick={() => setApplyIsOpen((prev) => !prev)} className=" text-2xl p-2 w-full flex items-center justify-between border-2 border-gray-300 rounded-lg my-1">
                Apply Yourself
                {!applyIsOpen ? (
                  <AiOutlineCaretDown className="h-8" />
                ): (
                  <AiOutlineCaretUp className="h-8" />
                )}
              </button>
                {applyIsOpen &&(
                  <div className="absolute top-96 rounded-lg border-4 border-black z-10 mt-4">
                    <a href="https://www.facebook.com/Applyyourselfnow876" target="_blank" rel="noreferrer">
                      <img
                      className=" h-96 w-screen"
                      src={apply}
                      alt="recruitment"
                      />
                    </a>
                  </div>
                )}
                <button onClick={() => setTrwIsOpen((prev) => !prev)} className=" text-2xl p-2 w-full flex items-center justify-between border-2 border-gray-300 rounded-lg my-1">
                TRW Security
                {!trwIsOpen ? (
                  <AiOutlineCaretDown className="h-8" />
                ): (
                  <AiOutlineCaretUp className="h-8" />
                )}
              </button>
                {trwIsOpen && (
                  <div className="absolute top-96 rounded-lg border-4 border-black z-10 mt-20">
                    <a href="https://www.facebook.com/profile.php?id=100070131725399" target="_blank" rel="noreferrer">
                      <img
                      className=" h-96 w-screen"
                      src={trwSecurity}
                      alt="security-firm"
                      />
                    </a>
                  </div>
                )}
            </div>
          </section>  
        {/* <section id="businesses" className=" flex flex-col items-center  pt-16">
          <div id="busi" className="bg-black text-white mb-5 rounded-full w-1/2  dark:text-black dark:bg-slate-100">
            <h2 className="text-3xl font-burtons font-md text-center py-5 lg:text-6xl">
                MY BUSINESSES
            </h2>
          </div>
          <div className=" flex h-96 lg:h-96 w-3/4 justify-center">
          <Carousel slideInterval={5000} indicators={false} className="lg:w-1/2">
            <a href="https://www.facebook.com/affordableadvertising20" target="_blank" rel="noreferrer">
              <img
              className="h-96 w-screen"
              src={affordableAdvertising}
              alt="advertising"
              />
            </a>
            <a href="https://www.facebook.com/Applyyourselfnow876" target="_blank" rel="noreferrer">
              <img
              className="h-96 w-screen"
              src={apply}
              alt="applyimg"
              />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100064144205268" target="_blank" rel="noreferrer">
              <img
                className="h-96 w-screen"
                src={tanup}
                alt="tanupent"
              />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100064482830532" target="_blank" rel="noreferrer">
              <img
                className="h-96 w-screen"
                src={slimchances}
                alt="weight-loss"
              />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100070131725399" target="_blank" rel="noreferrer">
              <img
                className="h-96 w-screen"
                src={trwSecurity}
                alt="security-firm"
              />
            </a>
            <a href="https://www.facebook.com/FINAOCONQUERREALTY" target="_blank" rel="noreferrer">
              <img
                className="h-96 w-screen"
                src={finao}
                alt="real-estate"
              />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100063960162770" target="_blank" rel="noreferrer">
              <img
                className="h-96 w-screen"
                src={wiggin}
                alt="wigs-cosmetics"
              />
            </a>
            <a href="https://www.instagram.com/furreverpuppiesrhewardfhengshu/" target="_blank" rel="noreferrer">
              <img
                className="h-96 w-screen"
                src={furrever}
                alt="puppies"
              />
            </a>
          </Carousel>
        </div>
      </section> */}
      </>
    )
}