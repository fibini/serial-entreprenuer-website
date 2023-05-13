// import { useState } from "react";
// import ceo from './assets/ceo.png'

// export default function Nav() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <div className={darkMode? "dark": ""}>
//     <div className="flex items-center justify-between fixed w-full z-10 border-b border-gray-400 py-8 px-10 h-5 bg-black md:px-20 lg:px-40 dark:bg-slate-100">
//       <a href="/">
//         <img className="object-scale-down h-10" src={ceo} alt="logo" />
//       </a>
//       <nav>
//         <section className="MOBILE-MENU flex md:hidden">
//           <button id="hamburger-icon" className="text-white text-4xl md:hidden cursor-pointer dark:text-black" onClick={() => setMenuOpen((prev) => !prev)}> &#9776; </button>
//           <div className={menuOpen ? "showMenuNav" : "hideMenuNav"} >
//             <button className="absolute text-8xl top-0 right-0 px-8 py-8" onClick={() => setMenuOpen(false)}>
//               &times;
//             </button>
//             <ul className="flex flex-col items-center justify-between min-h-[250px] font-bold">
//               <li className="my-8 uppercase text-3xl">
//               <a href="#about" className="w-full text-center py-8 hover:opacity-50" onClick={() => setMenuOpen(false)}>About</a>
//               </li>
//               <li className = "my-8 uppercase text-3xl">
//               <a href="#businesses" className="w-full text-center py-8 hover:opacity-50" onClick={() => setMenuOpen(false)}>My Businesses</a>
//               </li>
//               <li className="my-8 uppercase text-3xl">
//               <a href="#otherbusinesses" className="w-full text-center py-8 hover:opacity-50" onClick={() => setMenuOpen(false)}>Other Businesses</a>
//               </li>
//               <li className="my-8 uppercase text-3xl">
//               <a href="#contact" className="w-full text-center py-6 hover:opacity-50" onClick={() => setMenuOpen(false)}>Contact</a>
//               </li>
//             </ul>
//           </div>
//         </section>

//         <ul className="DESKTOP-MENU hidden space-x-8 md:flex text-white text-xl dark:text-black">
//           <li>
//             <a href="#about" className="hover:text-green-700">About</a>
//           </li>
//           <li>
//             <a href="#businesses" className="hover:text-yellow-300">My Businesses</a>
//           </li>
//           <li>
//             <a href="#otherbusinesses" className="hover:text-green-700">Other Businesses</a>
//           </li>
//           <li>
//             <a href="#contact" className="hover:text-yellow-300">Contact</a>
//           </li>
//         </ul>
//       </nav>
//       <style>{`
//       .hideMenuNav {
//         display: none;
//       }
//       .showMenuNav {
//         display: block;
//         position: fixed;
//         width: 100%;
//         height: 100vh;
//         top: 0;
//         left: 0;
//         background: white;
//         z-index: 10;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-evenly;
//         align-items: center;
//         background: linear-gradient(to bottom, #000000, #e7da16, #2e901d);

//       }
//     `}</style>
//     </div>
//     </div>
//   );
// }
