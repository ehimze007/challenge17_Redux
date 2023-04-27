import { Layout } from "../components/Layout"
import { Button } from "../components/Button"
import classes from "../styles/Profile.module.css"

export function Profile() {
  return (
    <Layout>
      <main className={classes.main}>
        <form>
          <input type="file" accept="image/*" />
          <input type="text" placeholder="Enter your name" />
          <input type="text" placeholder="Enter your username" />

          <div>
            <Button size="sm">Apply</Button>
            <Button size="sm" variant="outlined">
              Cancel
            </Button>
          </div>
        </form>
      </main>
    </Layout>
  )
}
