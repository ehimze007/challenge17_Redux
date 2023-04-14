import classes from "../styles/HeroSection.module.css"
import { Button } from "./Button"
import heroImage from "../images/hero-image.png"

export function HeroSection() {
  return (
    <section className={classes.hero}>
      <article className={classes.hero_article}>
        <h1>Organizing your day activity with Todo Daily</h1>
        <Button>Get started</Button>
      </article>

      <img src={heroImage} alt="Man at dock" />
    </section>
  )
}
