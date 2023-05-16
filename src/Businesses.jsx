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
// import tanuke from './assets/tanuke.png'
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
        <section id="businesses" className=" text-white dark:text-black pt-16">
          <h2 className="text-3xl font-burtons font-md text-center py-5 lg:text-6xl">MY BUSINESSES</h2>
          <div className="relative inline-block w-full hover:cursor-pointer md:hidden">
            <button onClick={() => setFinaoIsOpen((prev) => !prev)} className=" text-2xl p-2 w-full flex items-center justify-between border-2 border-gray-300 rounded-lg mb-1">
              Finao Conquer Realty
              {!finaoIsOpen ? (
                <AiOutlineCaretDown className="h-8" />
              ): (
                <AiOutlineCaretUp className="h-8" />
              )}
            </button>
              {finaoIsOpen && (
                <div className="top-full left-0 rounded-lg border-4 border-black z-10">
                  <a href="https://www.facebook.com/FINAOCONQUERREALTY" target="_blank" rel="noreferrer">
                    <img
                    className=" h-96 w-screen"
                    src={finao}
                    alt="real-estate"
                    />
                  </a>
                  <p className="text-center dark:text-black">WE CATER TO ALL OUR CLIENTS NEEDS, FROM SECURING RENTALS FOR TENANTS, MARKETING PROPERTIES AND A WIDE RANGE OF CONCIERGE SERVICES</p>
                </div>
              )}
          </div>
          <div className="relative inline-block w-full hover:cursor-pointer md:hidden">
              <button onClick={() => setFurrverIsOpen((prev) => !prev)} className=" text-2xl p-2 w-full flex items-center justify-between border-2 border-gray-300 rounded-lg my-1">
              Furrever Puppies
              {!furreverIsOpen ? (
                <AiOutlineCaretDown className="h-8" />
              ): (
                <AiOutlineCaretUp className="h-8" />
              )}
            </button>
              {furreverIsOpen && (
                <div className=" top-full left-0 rounded-lg border-4 border-black z-10">
                  <a href="https://www.instagram.com/furreverpuppiesrhewardfhengshu/" target="_blank" rel="noreferrer">
                    <img
                    className=" h-96 w-screen"
                    src={furrever}
                    alt="puppies"
                    />
                  </a>
                  <p className=" text-center dark:text-black">DOG BUSINESS PROVIDING QUALITY PUPPIES SMALL AND LARGE FOR FURREVER HOMES, DOG SUPPLES AND ACCESORIES.</p>
                </div>
              )}
          </div>
          <div className=" relative inline-block w-full hover:cursor-pointer md:hidden">
              <button onClick={() => setMarketingIsOpen((prev) => !prev)} className=" text-2xl p-2 w-full flex items-center justify-between border-2 border-gray-300 rounded-lg my-1">
              Affordable Advertising & Marketing
              {!marketingIsOpen ? (
                <AiOutlineCaretDown className="h-8" />
              ): (
                <AiOutlineCaretUp className="h-8" />
              )}
            </button>
              {marketingIsOpen && (
                <div className="top-full left-0 rounded-lg border-4 border-black z-10">
                  <a href="https://www.facebook.com/affordableadvertising20" target="_blank" rel="noreferrer">
                    <img
                    className=" h-96 w-screen"
                    src={affordableAdvertising}
                    alt="advertising"
                    />
                  </a>
                  <p className="text-center dark:text-black">ADVERTISING AND MARKETING FOR SMALL AND LARGE BUSINESSES</p>
                </div>
              )}
          </div>
          <div className=" relative inline-block w-full hover:cursor-pointer md:hidden">
              <button onClick={() => setTanupIsOpen((prev) => !prev)} className=" text-2xl p-2 w-full flex items-center justify-between border-2 border-gray-300 rounded-lg my-1">
              Tanup Entertainment
              {!tanupIsOpen ? (
                <AiOutlineCaretDown className="h-8" />
              ): (
                <AiOutlineCaretUp className="h-8" />
              )}
            </button>
              {tanupIsOpen && (
                <div className="top-full left-0 rounded-lg border-4 border-black z-10">
                  <a href="https://www.facebook.com/profile.php?id=100064144205268" target="_blank" rel="noreferrer">
                    <img
                    className=" h-96 w-screen"
                    src={tanup}
                    alt="entertainment"
                    />
                  </a>
                  <p className="text-center dark:text-black">WE AT TANUP ENTERTAINMENT CREATE COMMERCIALS, SONGS, VOICE OVERS, MANAGE SINGERS, DANCERS AND MUSICIANS</p>
                </div>
              )}
          </div>
          <div className=" relative inline-block w-full hover:cursor-pointer md:hidden">
              <button onClick={() => setSlimChancesIsOpen((prev) => !prev)} className=" text-2xl p-2 w-full flex items-center justify-between border-2 border-gray-300 rounded-lg my-1">
              Slim Chances
              {!slimChancesIsOpen ? (
                <AiOutlineCaretDown className="h-8" />
              ): (
                <AiOutlineCaretUp className="h-8" />
              )}
            </button>
              {slimChancesIsOpen && (
                <div className="top-full left-0 rounded-lg border-4 border-black z-10">
                  <a href="https://www.facebook.com/profile.php?id=100064482830532" target="_blank" rel="noreferrer">
                    <img
                    className=" h-96 w-screen"
                    src={slimchances}
                    alt="weight-loss"
                    />
                  </a>
                  <p className="text-center dark:text-black">ARE U STRUGGLING TO CHANGE UR LIFE? BAD HABITS? DO U WANT TO BE HEALTHIER? LOSE WEIGHT KEEP IT OFF?</p>
                </div>
              )}
          </div>
          <div className=" relative inline-block w-full hover:cursor-pointer md:hidden">
              <button onClick={() => setWigginIsOpen((prev) => !prev)} className=" text-2xl p-2 w-full flex items-center justify-between border-2 border-gray-300 rounded-lg my-1">
              Wiggin Out
              {!wigginIsOpen ? (
                <AiOutlineCaretDown className="h-8" />
              ): (
                <AiOutlineCaretUp className="h-8" />
              )}
            </button>
              {wigginIsOpen && (
                <div className="top-full left-0 rounded-lg border-4 border-black z-10">
                  <a href="https://www.facebook.com/profile.php?id=100063960162770" target="_blank" rel="noreferrer">
                    <img
                    className=" h-96 w-screen"
                    src={wiggin}
                    alt="cosmetics"
                    />
                  </a>
                  <p className="text-center dark:text-black">WIGS AND COSMETICS</p>
                </div>
              )}
          </div>
          <div className=" relative inline-block w-full hover:cursor-pointer md:hidden">
              <button onClick={() => setApplyIsOpen((prev) => !prev)} className=" text-2xl p-2 w-full flex items-center justify-between border-2 border-gray-300 rounded-lg my-1">
              Apply Yourself Now
              {!applyIsOpen ? (
                <AiOutlineCaretDown className="h-8" />
              ): (
                <AiOutlineCaretUp className="h-8" />
              )}
            </button>
              {applyIsOpen &&(
                <div className="top-full left-0 rounded-lg border-4 border-black z-10">
                  <a href="https://www.facebook.com/Applyyourselfnow876" target="_blank" rel="noreferrer">
                    <img
                    className=" h-96 w-screen"
                    src={apply}
                    alt="recruitment"
                    />
                  </a>
                  <p className="text-center dark:text-black">WE OFFER CV, COVER LETTER REVISION AND CREATION FOR $100BDS ON SPECIAL AND WE ALSO RECRUIT EMPLOYEES.</p>
                </div>
              )}
          </div>
          <div className=" relative inline-block w-full hover:cursor-pointer md:hidden">
              <button onClick={() => setTrwIsOpen((prev) => !prev)} className=" text-2xl p-2 w-full flex items-center justify-between border-2 border-gray-300 rounded-lg my-1">
              TRW Security
              {!trwIsOpen ? (
                <AiOutlineCaretDown className="h-8" />
              ): (
                <AiOutlineCaretUp className="h-8" />
              )}
            </button>
              {trwIsOpen && (
                <div className="top-full left-0 rounded-lg border-4 border-black z-10">
                  <a href="https://www.facebook.com/profile.php?id=100070131725399" target="_blank" rel="noreferrer">
                    <img
                    className=" h-96 w-screen"
                    src={trwSecurity}
                    alt="security-firm"
                    />
                  </a>
                  <p className="text-center dark:text-black">SECURE YOUR HOME OR BUSINESS WITH CAMERAS, ALARM SYSTEMS AND SECURITY PATROLS.</p>
                </div>
              )}
          </div>
        </section>
        <section className="flex flex-wrap items-center justify-evenly">
          {/* <div className=" hidden lg:w-1/12 lg:block">
                <img src={tanuke} alt="" />
          </div> */}
          <div className="hidden md:flex flex-wrap text-white lg: basis-3/4 gap-2 justify-center">
            <div className="basis-1/2 border-2 rounded-lg border-gray-300 lg:basis-1/4">
              <a href="https://www.facebook.com/affordableadvertising20" target="_blank" rel="noreferrer">
                <img
                className="h-96 w-screen"
                src={affordableAdvertising}
                alt="advertising"
                />
              </a>
              <p className="text-center dark:text-black">ADVERTISING AND MARKETING FOR SMALL AND LARGE BUSINESSES</p>
            </div>
            <div className="basis-1/2 border-2 rounded-lg border-gray-300 lg:basis-1/4">
              <a href="https://www.facebook.com/Applyyourselfnow876" target="_blank" rel="noreferrer">
                <img
                className="h-96 w-screen"
                src={apply}
                alt="applyimg"
                />
                <p className="text-center dark:text-black">WE OFFER CV, COVER LETTER REVISION AND CREATION FOR $100BDS ON SPECIAL AND WE ALSO RECRUIT EMPLOYEES.</p>
              </a>
            </div>
            <div className="basis-1/2 border-2 rounded-lg border-gray-300 lg:basis-1/4">
              <a href="https://www.facebook.com/profile.php?id=100064482830532" target="_blank" rel="noreferrer">
                <img
                  className="h-96 w-screen"
                  src={slimchances}
                  alt="weight-loss"
                />
                <p className="text-center dark:text-black">ARE U STRUGGLING TO CHANGE UR LIFE? BAD HABITS? DO U WANT TO BE HEALTHIER? LOSE WEIGHT KEEP IT OFF?</p>
              </a>
            </div>
            <div className="basis-1/2 border-2 rounded-lg border-gray-300 lg:basis-1/4">
              <a href="https://www.facebook.com/profile.php?id=100064144205268" target="_blank" rel="noreferrer">
                <img
                  className="h-96 w-screen"
                  src={tanup}
                  alt="tanupent"
                />
                <p className="text-center dark:text-black">WE AT TANUP ENTERTAINMENT CREATE COMMERCIALS, SONGS, VOICE OVERS, MANAGE SINGERS, DANCERS AND MUSICIANS</p>
              </a>
            </div>
            <div className="basis-1/2 border-2 rounded-lg border-gray-300 lg:basis-1/4">
              <a href="https://www.facebook.com/FINAOCONQUERREALTY" target="_blank" rel="noreferrer">
                <img
                  className="h-96 w-screen"
                  src={finao}
                  alt="real-estate"
                />
              </a>
              <p className="text-center dark:text-black">WE CATER TO ALL OUR CLIENTS NEEDS, FROM SECURING RENTALS FOR TENANTS, MARKETING PROPERTIES AND A WIDE RANGE OF CONCIERGE SERVICES</p>
            </div>
            <div className="basis-1/2 border-2 rounded-lg border-gray-300 lg:basis-1/4">
              <a href="https://www.facebook.com/profile.php?id=100063960162770" target="_blank" rel="noreferrer">
                <img
                  className="h-96 w-screen"
                  src={wiggin}
                  alt="wigs-cosmetics"
                />
                <p className="text-center dark:text-black">WIGS AND COSMETICS</p>
              </a>
            </div>
            <div className="basis-1/2 border-2 rounded-lg border-gray-300 lg:basis-1/4">
              <a href="https://www.facebook.com/profile.php?id=100070131725399" target="_blank" rel="noreferrer">
                <img
                  className="h-96 w-screen"
                  src={trwSecurity}
                  alt="security-firm"
                />
                <p className="text-center dark:text-black">SECURE YOUR HOME OR BUSINESS WITH CAMERAS, ALARM SYSTEMS AND SECURITY PATROLS.</p>
              </a>
            </div>
            <div className="basis-1/2 border-2 rounded-lg border-gray-300 lg:basis-1/4">
              <a href="https://www.instagram.com/furreverpuppiesrhewardfhengshu/" target="_blank" rel="noreferrer">
                <img
                  className="h-96 w-screen"
                  src={furrever}
                  alt="puppies"
                />
                <p className=" text-center dark:text-black">DOG BUSINESS PROVIDING QUALITY PUPPIES SMALL AND LARGE FOR FURREVER HOMES, DOG SUPPLES AND ACCESORIES.</p>
              </a>
            </div>
          </div> 
          {/* <div className="hidden lg:basis-1/12 lg:block">
              <img src={tanuke} alt="" />
          </div> */}
        </section> 
      </>
    )
}