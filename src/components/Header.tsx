import React from 'react'
import { type TodoTitle } from '../types'

interface IHeaderProps {
  onAddTodo: (newTodo: TodoTitle) => void
}

const Header: React.FC<IHeaderProps> = ({ onAddTodo }) => {
  const onSubmitNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const todoTitle: TodoTitle = formData.get('todo') as TodoTitle
    onAddTodo(todoTitle)
  }

  return (
    <header className='header'>
       <h1>todo
        <img
          style={{ width: '60px', height: 'auto' }}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'></img>
      </h1>
      <form onSubmit={onSubmitNewTodo}>
        <input placeholder="Escribe tu tarea" name="todo" className='new-todo' autoFocus/>
        <button type="submit"></button>
      </form>
    </header>
  )
}

export default Header
