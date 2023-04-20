import { AuthButton } from "../components/AuthButton"
import { Link } from "react-router-dom"
import classes from "../styles/Login.module.css"
import logo from "../images/logo.png"
import googleIcon from "../images/google-icon.svg"
import githubIcon from "../images/github-icon.svg"

export function Login() {
  return (
    <main className={classes.main}>
      <section className={classes.form_wrapper}>
        <Link to="/">
          <img className={classes.logo_link} src={logo} alt="Todo daily logo" />
        </Link>

        <h3>Signin</h3>

        <div className={classes.auth_buttons}>
          <AuthButton icon={googleIcon}>
            <Link to="/dashboard">Continue using Google</Link>
          </AuthButton>

          <AuthButton icon={githubIcon}>
            <Link to="/dashboard">Continue using GitHub</Link>
          </AuthButton>
        </div>

        <footer>
          <p>
            <span>Not have account? </span>
            <Link to="/signup">Signup</Link>
          </p>
        </footer>
      </section>
    </main>
  )
}
