import { Carousel } from "flowbite-react"
import apply from './assets/apply-yourself.png'
import affordableAdvertising from './assets/advertising.png'
import tanup from './assets/tanup.png'
import slimchances from './assets/slimchances.png'

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
              className="h-96"
              src={affordableAdvertising}
              alt="advertising"
              />
            </a>
            <a href="https://www.facebook.com/Applyyourselfnow876" target="_blank" rel="noreferrer">
              <img
              className="h-96"
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
                className="h-96"
                src={slimchances}
                alt="weight-loss"
              />
            </a>
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
              alt="..."
            />
          </Carousel>
        </div>
      </section>
      </>
    )
}