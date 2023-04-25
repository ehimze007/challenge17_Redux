import classes from "../styles/Button.module.css"

// props
// variant => filled/outlined
// size => lg/md/sm

export function Button(props) {
  return (
    <button className={classes.button} onClick={props.onClick}>
      {props.children}
    </button>
  )
}
