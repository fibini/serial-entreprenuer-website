import { useState } from 'react'
import './index.css'
import ceo from './assets/pn-ceo.png'
import About from './About'
import Businesses from './Businesses'
import OtherBusinesses from './OtherBusinesses'
import Contact from './Contact'
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs'
import {AiFillFacebook, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'
import Reviews from './customerReviews'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  return (
    
    <>
      <div className={darkMode? "dark": ""}>

        {/* Nav bar */}
        <div className="flex items-center justify-between fixed w-full z-10 border-b border-zinc-400 py-8 px-10 h-5 bg-black md:px-20 lg:px-40 dark:bg-slate-100">
          <a href="/">
            <img className="object-scale-down h-10" src={ceo} alt="logo" />
          </a>
          <BsFillSunFill onClick={() => setDarkMode(!darkMode)} className=" text-amber-500 cursor-pointer dark:hidden " />
          <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=" hidden cursor-pointer dark:block"/>
          <nav>
            <section className=" MOBILE-MENU flex md:hidden">
              <button id="hamburger-icon" className="text-amber-500 text-4xl md:hidden cursor-pointer dark:text-black" onClick={() => setMenuOpen((prev) => !prev)}> &#9776; </button>
                {menuOpen && (
                  <div className='flex flex-col justify-evenly align-middle w-screen h-screen fixed top-0 left-0 z-10 bg-black dark:bg-slate-100 font-burtons'>
                    <button className=" text-amber-500 absolute text-6xl top-0 right-0 px-8 py-8 dark:text-black dark:bg-slate-100" onClick={() => setMenuOpen(false)}>
                      &times;
                    </button>

                    {/* Mobile */}
                    
                    <ul className=" text-white flex flex-col items-center justify-between min-h-[250px] font-bold dark:text-black dark:bg-slate-100">
                      <li className="my-8 uppercase text-3xl">
                      <a href="#about" className="w-full text-center py-8 hover:opacity-50" onClick={() => setMenuOpen(false)}>About</a>
                      </li>
                      <li className = "my-8 uppercase text-3xl">
                      <a href="#businesses" className="w-full text-center py-8 hover:opacity-50" onClick={() => setMenuOpen(false)}>My Businesses</a>
                      </li>
                      <li className="my-8 uppercase text-3xl">
                      <a href="#otherbusinesses" className="w-full text-center py-8 hover:opacity-50" onClick={() => setMenuOpen(false)}>Other Businesses</a>
                      </li>
                      <li className="my-8 uppercase text-3xl">
                      <a href="#contact" className="w-full text-center py-6 hover:opacity-50" onClick={() => setMenuOpen(false)}>Contact</a>
                      </li>
                    </ul>
                </div>
                )}
            </section>

                  {/* Nav bar desktop */}

            <ul className="DESKTOP-MENU hidden space-x-8 md:flex text-white text-xl dark:text-black">
              <li>
                <a href="#about" className="hover:text-green-700">About</a>
              </li>
              <li>
                <a href="#businesses" className="hover:text-yellow-300">My Businesses</a>
              </li>
              <li>
                <a href="#otherbusinesses" className="hover:text-green-700">Other Businesses</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-300">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      
        {/* Title */}

        <section className=' bg-black dark:bg-slate-100'>
          <section id="header" className=' border-b border-zinc-400'>
            <div className="text-center p-16 text-white dark:text-black">
              <h1 className="text-5xl py-2 font-burtons font-medium lg:text-7xl">
                The Serial Entrepreneur
              </h1>
              <h2 className=' text-2xl py-2 md:text-3xl'>Tanuke</h2>
            </div>
            <div className=' text-white text-5xl flex justify-center gap-16 py-3  dark:text-black'>

             {/* Social icons */}

              <AiFillInstagram />
              <AiFillLinkedin />
              <AiFillFacebook />
            </div>

           {/* Rest of the page */}

          </section>
          <About />
          <Businesses />
          <Reviews />
          <OtherBusinesses />
          <Contact />
        </section>
      </div>
    </>
  )
}

export default App
