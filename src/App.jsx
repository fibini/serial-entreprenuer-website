import './App.css'
import Nav from './Nav'
import About from './About'
import Businesses from './Businesses'
import OtherBusinesses from './OtherBusinesses'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <h1 className="text-5xl font-bold underline">
        Serial Entrepreneur
      </h1>
      <About />
      <Businesses />
      <OtherBusinesses />
    </>
  )
}

export default App
