import logo from "../images/logo-alt.png"
import avatar from "../images/avatar.png"
import classes from "../styles/Layout.module.css"
import { Link } from "react-router-dom"
import { MenuItem } from "./MenuItem"
import profileIcon from "../images/profile-icon.svg"
import settingsIcon from "../images/settings-icon.svg"
import logoutIcon from "../images/logout-icon.svg"
import { useState } from "react"

export function Layout(props) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div>
      <header className={classes.header}>
        <Link to="/dashboard">
          <img className={classes.logo} src={logo} alt="Todo daily logo" />
        </Link>

        <div
          className={classes.avatar_wrapper}
          onClick={() => {
            setShowMenu(!showMenu)
          }}
        >
          <p>James</p>
          <img src={avatar} alt="Profile avatar" />
        </div>

        <div
          className={
            showMenu ? classes.menu_container_active : classes.menu_container
          }
        >
          <MenuItem
            icon={profileIcon}
            label="Profile"
            style={{ padding: "13px 20px 15px", borderRadius: "16px 16px 0 0" }}
          />
          <MenuItem
            icon={settingsIcon}
            label="Settings"
            style={{ padding: "15px 20px 20px" }}
          />
          <MenuItem
            icon={logoutIcon}
            label="Logout"
            pStyle={{
              color: "var(--primary-color)",
            }}
            style={{
              padding: "13px 20px 20px",
              borderTop: "1px solid #D7D7D7",
              borderRadius: "0 0 16px 16px",
            }}
          />
        </div>
      </header>

      <div>
        <aside></aside>
        <main></main>
      </div>
    </div>
  )
}
