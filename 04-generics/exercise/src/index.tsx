import React, { useState, FormEvent, ChangeEvent } from 'react'
import ReactDOM from 'react-dom'

interface Todo {
    description: string
    completed: boolean
}

interface TodoItemProps {
    todo: Todo
}

const TodoItem = (props: TodoItemProps) => {
    const [checked, setChecked] = useState(props.todo.completed)

    const onChange = (event: ChangeEvent<HTMLInputElement>) =>
        setChecked(event.target.checked)
    return (
        <li>
            <label
                style={{ textDecoration: checked ? 'line-through' : 'none' }}
                htmlFor="completed"
            >
                description: {props.todo.description}{' '}
            </label>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                id="completed"
            />
        </li>
    )
}

const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [value, setValue] = useState('')

    const onChange = (event: ChangeEvent<HTMLInputElement>) =>
        setValue(event.target.value)

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const newTodo = { description: value, completed: false }
        setTodos([...todos, newTodo])
    }

    return (
        <div>
            <h1>My Todo list</h1>
            <ul>
                {!todos.length ? (
                    <div>Nothing to do!</div>
                ) : (
                    todos.map((todo, index) => (
                        <TodoItem todo={todo} key={index} />
                    ))
                )}
            </ul>
            <form onSubmit={onSubmit}>
                <input type="text" value={value} onChange={onChange} />
            </form>
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <TodoList />
    </React.StrictMode>,
    document.getElementById('root')
)
