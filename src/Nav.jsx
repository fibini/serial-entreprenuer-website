export default function Nav()
{
    return(
      <>
        <button id="hamburger-icon" className="text-3xl md:hidden cursor-pointer"> &#9776; </button>
        <nav className="hidden md:block">
            <ul className="flex">
              <li>About</li>
              <li>My Businesses</li>
              <li>Other Businesses</li>
              <li>Contact</li>
            </ul>
        </nav>
        <section id="mobile-menu" className="absolute top-0 bg-white w-full text-5xl flex-col justify-content-center origin-top animate-open-menu hidden">
          <button className="text-8xl self-end px-6">
            &times;
          </button>
          <nav className="flex flex-col min-h-screen items-center py-8" aria-label="mobile">
            <a href="#about" className="w-full text-center py-6 hover:opacity-50">About</a>
            <a href="#businesses" className="w-full text-center py-6 hover:opacity-50">My Businesses</a>
            <a href="#otherbusinesses" className="w-full text-center py-6 hover:opacity-50">Other Businesses</a>
            <a href="#contact" className="w-full text-center py-6 hover:opacity-50">Contact</a>
          </nav>
        </section>
      </>
    )
}