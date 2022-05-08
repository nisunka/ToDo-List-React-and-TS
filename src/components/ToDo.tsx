import React, { useEffect, useRef, useState } from 'react'
import { ToDoList } from './ToDoList/ToDoList'
import { IToDo } from './data'

import './ToDo.css'

export const ToDo: React.FC = () => {

  // Фиксируем состояния у input
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState<IToDo[]>([]) // хранение списка дел, изначально пустой массив

  // Смотрим за изменениями в input
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  // При загрузке страницы фокус сразу был на input, чтобы скорее добавили задачу
  const inputRef = useRef<HTMLInputElement>(null)

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if(e.key === 'Enter') {
        addToDo()
    }
  }

  useEffect(() => {
    if(inputRef.current) {
        inputRef.current.focus()
    }
  }, [])

  const addToDo = () => {
    if(value) {
        setTodos([...todos, {
            id: Date.now(),
            title: value,
            complete: false
        }])
        setValue('')
    }
  }

  const removeToDo = (id:number): void => {
      setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleToDo = (id:number): void => {
      setTodos(todos.map(todo => {
          if(todo.id !== id) return todo

          return {
              ...todo,
              complete: !todo.complete
          }
      }))
  }


  return (
    <div className='todo'>
        <h1 className='todo__title'>Список дел</h1>
        <div className="todo__container">
           <div className="todo__panel">
                <span className='todo__task'>Что нужно сделать?</span>
                <input
                className='todo__input'
                value={value}
                onChange={handleChange}
                ref={inputRef}
                onKeyDown={handleKeyDown}
                placeholder='Введите название задачи'
                />
                <button className='btn-reset todo__add-btn'>Добавить задачу</button>
           </div>

            <ToDoList items={todos} removeTodo={removeToDo} toggleTodo={toggleToDo} />
        </div>
    </div>
  )
}

