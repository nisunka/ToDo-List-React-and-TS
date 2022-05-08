import { IToDo } from '../../data'
import './ToDoItem.css'

// В интерфейсе показываем то, что ожидаем увидеть в списке дел. Extend значит, что он расширяется с базового IToDo
interface IToDoItem extends IToDo {
    removeTodo: (id:number) => void
    toggleTodo: (id:number) => void
}

const ToDoItem: React.FC<IToDoItem> = (props) => {

    const {id, title, complete, removeTodo, toggleTodo} = props

    return (
        <div className='item'>
            <div className="item__title">
                {title}
            </div>
            <div className="item__state">
                <input
                type="checkbox"
                checked={complete}
                onChange={() => toggleTodo(id)}
                className='item__checkbox'
                />
                <button
                className='btn-reset item__btn-delete'
                onClick={() => removeTodo(id)}
                >
                    Удалить
                </button>
            </div>
        </div>
    )
}

export { ToDoItem }