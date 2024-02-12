import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Qualities from "./components/Qualities"
import {arr} from './FruitArray'

function App() {
  return (
    <div className="App" >
       <Header/>
       <Hero />
       <Gallery arr={arr}/>
       <Banner />
       <Qualities />
       <Footer/>
    </div>
  )
}

export default App
