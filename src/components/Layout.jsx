import logo from "../images/logo-alt.png"
import avatar from "../images/avatar.png"

export function Layout(props) {
  return (
    <div>
      <header>
        <img src={logo} alt="Todo daily logo" />

        <div>
          <p>James</p>
          <img src={avatar} alt="Profile avatar" />
        </div>
      </header>

      <div>
        <aside></aside>
        <main></main>
      </div>
    </div>
  )
}
