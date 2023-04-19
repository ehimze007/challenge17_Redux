import classes from "../styles/MenuItem.module.css"

export function MenuItem(props) {
  return (
    <div className={classes.wrapper}>
      <img src={props.icon} alt={props.iconAlt || "Menu item icon"} />
      <p>{props.label}</p>
    </div>
  )
}
