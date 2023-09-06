import { useForm } from "react-hook-form"


export const TodoForm = () => {
    const { register, handleSubmit } = useForm()

    const submit = (formData) => {
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" {...register("title")} />
            <textarea {...register("content")}></textarea>
            <button type="submit">Cadastrar</button>
        </form>
    )
}