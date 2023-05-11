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
      <section id="header" className="flex justify-center h-56 pt-5">
        <div className="sm:flex text-center text-white">
          <h1 className="text-6xl font-bold">
            The Serial Entrepreneur
          </h1>
        </div>
      </section>
      <About />
      <Businesses />
      <OtherBusinesses />
      {/* <Contact /> */}
    </>
  )
}

export default App
