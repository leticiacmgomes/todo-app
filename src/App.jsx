import { useState } from 'react'

import { List } from './components/List'
import { FilterMenu } from './components/FilterMenu'

import './App.css'

import iconMoon from './assets/images/icon-moon.svg'
import iconSun from './assets/images/icon-sun.svg'

function App() {
  // Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(false)
  const changeTheme = () => setIsDarkMode(!isDarkMode)

  const [newTodo, setNewTodo] = useState('')
  const [todoList, setTodoList] = useState([])
  const [filter, setFilter] = useState('all')

  const toggleTodo = (id) => {
    setTodoList(
      todoList.map(todo => {
        if (todo.id === id) {
          return {...todo, isCompleted: !todo.isCompleted}
        } else {
          return todo
        }
      })
    )
  }
  
  const addNewTodo = () => {
    setTodoList([...todoList, {id: Date.now(), text: newTodo, isCompleted: false}])
    setNewTodo('')
  }

  const removeTodo = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  const filteredList = todoList.filter(todo => {
    switch (filter) {
      case 'active': return !todo.isCompleted
      case 'completed': return todo.isCompleted
      default: return true
    }
  })

  const itemsLeft = todoList.filter(todo => !todo.isCompleted).length

  const clearCompleted = () => {
    setTodoList(todoList.filter(todo => !todo.isCompleted))
  }

  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      <header>
        <h1>todo</h1>
        <img
          onClick={changeTheme}
          src={isDarkMode ? iconSun : iconMoon}
          alt={isDarkMode ? 'Sun icon' : 'Moon icon'} 
        />
      </header>

      <form 
        onSubmit={(e) => {
          e.preventDefault()
          if (!newTodo.trim()) return
          addNewTodo()
        }}
      >
        <input
          required
          type="text"
          placeholder='Create a new todo...'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </form>

      <List 
        filteredList={filteredList}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
        itemsLeft={itemsLeft}
        clearCompleted={clearCompleted}
      />

      <FilterMenu 
        filter={filter}
        setFilter={setFilter}
      />
    </div>

  )
}

export default App
