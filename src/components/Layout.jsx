import logo from "../images/logo-alt.png"
import avatar from "../images/avatar.png"
import classes from "../styles/Layout.module.css"
import { Link } from "react-router-dom"
import { MenuItem } from "./MenuItem"
import { useState } from "react"
import profileIcon from "../images/profile-icon.svg"
import settingsIcon from "../images/settings-icon.svg"
import logoutIcon from "../images/logout-icon.svg"
import calendarClearIcon from "../images/calendar-clear-icon.svg"
import calendarClearActiveIcon from "../images/calendar-clear-active-icon.svg"
import calendarIcon from "../images/calendar-icon.svg"
import calendarActiveIcon from "../images/calendar-active-icon.svg"
import calendarNumberIcon from "../images/calendar-number-icon.svg"
import calendarNumberActiveIcon from "../images/calendar-number-active-icon.svg"

export function Layout(props) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className={classes.wrapper}>
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
          <Link to="/dashboard/profile">
            <MenuItem
              icon={profileIcon}
              label="Profile"
              style={{
                padding: "13px 20px 15px",
                borderRadius: "16px 16px 0 0",
              }}
            />
          </Link>
          <Link to="/dashboard/settings">
            <MenuItem
              icon={settingsIcon}
              label="Settings"
              style={{ padding: "15px 20px 20px" }}
            />
          </Link>
          <Link to="/">
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
          </Link>
        </div>
      </header>

      <div className={classes.main_wrapper}>
        <aside className={classes.aside}>
          <Link to="/dashboard">
            <MenuItem
              icon={calendarClearIcon}
              label="Today"
              style={{
                padding: "15px 45px",
              }}
              pStyle={{ color: "var(--primary-color)" }}
            />
          </Link>

          <Link to="/dashboard/yesterday">
            <MenuItem
              icon={calendarIcon}
              label="Yesterday"
              style={{
                padding: "15px 45px",
              }}
            />
          </Link>

          <Link to="/dashboard/upcoming">
            <MenuItem
              icon={calendarNumberIcon}
              label="Upcoming"
              style={{
                padding: "15px 45px",
              }}
            />
          </Link>
        </aside>
        <section>{props.children}</section>
      </div>
    </div>
  )
}
