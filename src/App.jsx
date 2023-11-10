import HeroSection from "./Components/HeroSection/HeroSection"
import SearchField from "./Components/SearchField/SearchField"

function App() {

  return (
    <div className="relative">
      <HeroSection/>
      <div className="absolute w-full top-[72vh] z-10">
      <SearchField/>
      </div>
    </div>
  )
}

export default App
