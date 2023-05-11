import { Carousel } from "flowbite-react"

export default function Businesses()
{
    return(
        <>
        <section id="businesses">
          <h2 className="text-3xl font-bold underline">
              My Businesses
          </h2>
          <div className="h-96 2lg:h-96">
          <Carousel slideInterval={10000}>
            <a href="https://www.facebook.com/affordableadvertising20" target="_blank" rel="noreferrer">
              <img
              src="./src/assets/advertising.png"
              alt="..."
              />
            </a>
            <a href="https://www.facebook.com/Applyyourselfnow876" target="_blank" rel="noreferrer">
              <img
              className="h-96"
              src="./src/assets/apply-yourself.png"
              alt="..."
              />
            </a>
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="..."
            />
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