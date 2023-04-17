import { AuthButton } from "../components/AuthButton"
import logo from "../images/logo.png"

export function Login() {
  return (
    <main>
      <section>
        <img src={logo} alt="Todo daily logo" />
        <h3>Signin</h3>
        <AuthButton>Continue using Google</AuthButton>
        <AuthButton>Continue using GitHub</AuthButton>
        <footer>
          <p>Not have account? Signup</p>
        </footer>
      </section>
    </main>
  )
}
