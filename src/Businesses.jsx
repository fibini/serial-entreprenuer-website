import { Carousel } from "flowbite-react"
import apply from './assets/apply-yourself.png'
import affordableAdvertising from './assets/advertising.png'
import tanup from './assets/tanup.png'

export default function Businesses()
{
    return(
        <>
        <section id="businesses" className="h-screen">
          <h2 className="text-3xl font-bold underline">
              My Businesses
          </h2>
          <div className="h-96 2lg:h-96">
          <Carousel slideInterval={10000}>
            <a href="https://www.facebook.com/affordableadvertising20" target="_blank" rel="noreferrer">
              <img
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
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              alt="..."
            />
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