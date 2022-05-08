import { ToDoItem } from "./ToDoItem/ToDoItem"
import { IToDo } from '../data'

// :viod означает, что мы принимаем и ничего не возвращаем
interface IToDoListProps {
    items: IToDo[];
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const ToDoList: React.FC<IToDoListProps> = (props) => {

    const { toggleTodo, removeTodo } = props

    return <div>
        {props.items.map(todo => (
        <ToDoItem
        key={todo.id}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
        {...todo}
        />))}
    </div>
}

export { ToDoList }