import { useContext } from "react"
import { TodoContext } from "../../../providers/TodoContext"

export const TodoForm = () => {

    const { addTodo } = useContext(TodoContext)

    return (
        <form>
            <input type="text" />
            <textarea></textarea>
            <button type="submit">Cadastrar</button>
        </form>
    )
}