import classes from "../styles/Header.module.css"
import logoImage from "../images/logo.png"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <header className={classes.header}>
      <Link to="/">
        <img className={classes.logo} src={logoImage} alt="Todo Daily logo" />
      </Link>

      <nav className={classes.nav}>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
    </header>
  )
}
