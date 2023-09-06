import { createContext } from "react"

export const TodoContext = createContext({})

export const TodoProvider = ({ children }) => {

    const [todoList, setTodoList] = useState([])

    const addTodo = (formData) => {
        const newTodo = { ...formData, id: crypto.randomUUID() }
        setTodoList([...todoList, newTodo])
    }

    return (
        <TodoContext.Provider value={{ addTodo }}>
            {children}
        </TodoContext.Provider>
    )
}