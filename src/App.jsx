import { Header } from "./components/Header"
import { Button } from "./components/Button"
import classes from "./styles/App.module.css"
import heroImage from "./images/hero-image.png"

function App() {
  return (
    <main className={classes.main}>
      <Header />

      <section className={classes.hero}>
        <article className={classes.hero_article}>
          <h1>Organizing your day activity with Todo Daily</h1>
          <Button>Get started</Button>
        </article>

        <img src={heroImage} alt="Man at dock" />
      </section>
    </main>
  )
}

export default App
