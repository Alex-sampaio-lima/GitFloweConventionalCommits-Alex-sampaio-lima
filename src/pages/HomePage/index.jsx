import { TodoForm } from "../../components/components/TodoForm"
import { TodoList } from "../../components/components/TodoList"

export const HomePage = () => {
    return (
        <main>
            <TodoForm />
            <TodoList />
        </main>
    )
}