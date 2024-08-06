import { useState } from "react"

function AddTodoForm({addTodo}){

    const [text, setText] = useState('')

    const HandleSubmit = function(e){
        e.preventDefault()
        if(!text.trim()) return
        addTodo(text)
        setText('')
    }

    return (
        <form onSubmit={HandleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e)=> setText(e.target.value)}
                placeholder="input Todo Title" />
            <button type="submit">Add Todo</button>
        </form>
    )

}

export default AddTodoForm