import classes from "../styles/Button.module.css"

export function Button(props) {
  return <button className={classes.button}>{props.children}</button>
}
