import classes from "../styles/Button.module.css"

// props
// variant => filled/outlined
// size => sm

export function Button(props) {
  return (
    <button
      className={props?.size === "sm" ? classes.button_sm : classes.button}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
