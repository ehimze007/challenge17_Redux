import { FeaturedSection } from "./components/FeaturedSection"
import { Header } from "./components/Header"
import { HeroSection } from "./components/HeroSection"
import { LastSection } from "./components/LastSection"
import classes from "./styles/App.module.css"

function App() {
  return (
    <main className={classes.main}>
      <Header />
      <HeroSection />
      <FeaturedSection />
      <LastSection />
    </main>
  )
}

export default App
