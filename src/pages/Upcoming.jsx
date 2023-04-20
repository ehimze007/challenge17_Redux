import { Layout } from "../components/Layout"
import classes from "../styles/Dashboard.module.css"

export function Upcoming() {
  return (
    <Layout>
      <main className={classes.main}>
        <h1 className={classes.page_title}>Upcoming</h1>
        <p className={classes.page_subtitle}>January 2022</p>
      </main>
    </Layout>
  )
}
