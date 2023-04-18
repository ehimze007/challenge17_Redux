import logo from "../images/logo-alt.png"
import avatar from "../images/avatar.png"
import classes from "../styles/Layout.module.css"

export function Layout(props) {
  return (
    <div>
      <header className={classes.header}>
        <img src={logo} alt="Todo daily logo" />

        <div className={classes.avatar_wrapper}>
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
