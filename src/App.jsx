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
      <div className="sm:flex justify-center text-center">
        <h1 className="text-6xl font-bold underline my-10">
          The Serial Entrepreneur
        </h1>
      </div>
      <About />
      <Businesses />
      {/* <OtherBusinesses /> */}
      {/* <Contact /> */}
    </>
  )
}

export default App
