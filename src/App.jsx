import './index.css'
import Nav from './Nav'
import About from './About'
import Businesses from './Businesses'
import OtherBusinesses from './OtherBusinesses'
import Contact from './Contact'

function App() {
  return (
    <>
      <Nav />
      <section className='bg-gradient-to-b from-black to-green-700 via-yellow-200'>
        <section id="header" className="flex justify-center h-56 pt-20">
          <div className="sm:flex text-center text-white">
            <h1 className="text-6xl font-bold">
              The Serial Entrepreneur
            </h1>
          </div>
        </section>
        <About />
        <Businesses />
        <OtherBusinesses />
        <Contact />
      </section>
    </>
  )
}

export default App
