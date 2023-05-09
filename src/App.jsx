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
      <h1 className="text-6xl font-bold underline mb-10">
        The Serial Entrepreneur
      </h1>
      {/* <About /> */}
      {/* <Businesses /> */}
      <OtherBusinesses />
      <Contact />
    </>
  )
}

export default App
