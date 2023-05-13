import { useState } from "react";
import ceo from './assets/ceo.png'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between fixed w-full z-10 border-b border-gray-400 py-8 px px-3 h-5 bg-black">
      <a href="/">
        <img className="object-scale-down h-10" src={ceo} alt="logo" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex md:hidden">
          <button id="hamburger-icon" className="text-white text-4xl md:hidden cursor-pointer" onClick={() => setMenuOpen((prev) => !prev)}> &#9776; </button>
          <div className={menuOpen ? "showMenuNav" : "hideMenuNav"} >
            <button className="absolute text-8xl top-0 right-0 px-8 py-8" onClick={() => setMenuOpen(false)}>
              &times;
            </button>
            <ul className="flex flex-col items-center justify-between min-h-[250px] font-bold">
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

        <ul className="DESKTOP-MENU hidden space-x-8 md:flex text-white text-xl">
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
        background: linear-gradient(to bottom, #000000, #e7da16, #2e901d);

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