import { Carousel } from "flowbite-react"
import apply from './assets/apply-yourself.png'
import affordableAdvertising from './assets/advertising.png'
import tanup from './assets/tanup.png'
import slimchances from './assets/slimchances.png'
import trwSecurity from './assets/security.jpg'
import finao from './assets/finao.png'
import wiggin from './assets/wiggin.png'
import furrever from './assets/furrever.png'

export default function Businesses()
{
    return(
        <>
        <section id="businesses" className="mt-10">
          <div id="busi" className="bg-black text-white">
          <h2 className="text-3xl font-bold text-center py-5">
              My Businesses
          </h2>
          </div>
          <div className="h-96 2lg:h-96">
          <Carousel slideInterval={5000}>
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
      </section>
      </>
    )
}