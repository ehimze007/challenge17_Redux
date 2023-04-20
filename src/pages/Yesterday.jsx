import { Layout } from "../components/Layout"
import classes from "../styles/Dashboard.module.css"

export function Yesterday() {
  return (
    <Layout>
      <main className={classes.main}>
        <h1 className={classes.page_title}>Yesterday</h1>
        <p className={classes.page_subtitle}>4/6 completed</p>
      </main>
    </Layout>
  )
}
