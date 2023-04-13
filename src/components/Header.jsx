import classes from "../styles/Header.module.css"
import logoImage from "../images/logo.png"

export function Header() {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src={logoImage} alt="Todo Daily logo" />

      <nav className={classes.nav}>
        <a href="#">Login</a>
        <a href="#">Signup</a>
      </nav>
    </header>
  )
}
