import { Layout } from "../components/Layout"
import { TodoItem } from "../components/TodoItem"
import classes from "../styles/Dashboard.module.css"
import plusIcon from "../images/plus-icon.svg"

export function Dashboard() {
  return (
    <Layout>
      <main className={classes.main}>
        <h1 className={classes.page_title}>Today</h1>
        <p className={classes.page_subtitle}>4/6 completed</p>

        <section className={classes.todo_list}>
          <TodoItem
            title="Cooking a salmon sushi"
            subtitle="Salmon and tuna i think is good for dinner, i wanna make it today :D"
          />
          <TodoItem
            title="Write code for fizz buzz algorithm"
            subtitle="Salmon and tuna i think is good for dinner, i wanna make it today :D"
          />
          <TodoItem
            title="Build Todo Daily app"
            subtitle="Salmon and tuna i think is good for dinner, i wanna make it today :D"
          />
          <TodoItem
            title="Design Todo Daily app"
            subtitle="Salmon and tuna i think is good for dinner, i wanna make it today :D"
          />
        </section>

        <div className={classes.add_task_button}>
          <img src={plusIcon} alt="Plus icon" />
          <p>Add task</p>
        </div>
      </main>
    </Layout>
  )
}
