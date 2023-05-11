import { useState } from "react";
import ceo from './assets/ceo.png'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8 h-5">
      <a href="/">
        <img className="object-scale-down h-10" src={ceo} alt="logo" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex md:hidden">
          <button id="hamburger-icon" className="text-4xl md:hidden cursor-pointer" onClick={() => setMenuOpen((prev) => !prev)}> &#9776; </button>
          {/* <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div> */}

          <div className={menuOpen ? "showMenuNav" : "hideMenuNav"} >
            <button className="absolute text-8xl top-0 right-0 px-8 py-8" onClick={() => setMenuOpen(false)}>
              &times;
            </button>
            {/* <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div> */}
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
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
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 md:flex">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#businesses">My Businesses</a>
          </li>
          <li>
            <a href="#otherbusinesses">Other Businesses</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}


// export default function Nav()
// {
//   const [menuOpen, setMenuOpen] = useState(false)
//     return(
//       <>
//         <button id="hamburger-icon" className="text-3xl md:hidden cursor-pointer" onClick={() => setMenuOpen((prev) => !prev)}> &#9776; </button>
//         <nav id="hide-nav" className="hidden md:block">
//             <ul className="flex">
//               <li>About</li>
//               <li>My Businesses</li>
//               <li>Other Businesses</li>
//               <li>Contact</li>
//             </ul>
//         </nav>
//         <section id="mobile-menu" className="absolute top-0 bg-white w-full text-5xl flex-col justify-content-center origin-top animate-open-menu hidden ">
//           <button className="text-8xl self-end px-6" onClick={() => setMenuOpen(false)}>
//             &times;
//           </button>
//           <nav className="flex flex-col min-h-screen items-center py-8" aria-label="mobile">
//             <a href="#about" className="w-full text-center py-6 hover:opacity-50">About</a>
//             <a href="#businesses" className="w-full text-center py-6 hover:opacity-50">My Businesses</a>
//             <a href="#otherbusinesses" className="w-full text-center py-6 hover:opacity-50">Other Businesses</a>
//             <a href="#contact" className="w-full text-center py-6 hover:opacity-50">Contact</a>
//           </nav>
//         </section>
//       </>
//     )
// }