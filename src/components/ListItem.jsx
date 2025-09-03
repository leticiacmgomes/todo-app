import iconCross from '../assets/images/icon-cross.svg'

export const ListItem = ({ todo, toggleTodo, removeTodo }) => {
    return(
        <li className="list-item">                            
            <input
                id={todo.id}
                type="checkbox" 
                checked={todo.isCompleted}
                onChange={() => toggleTodo(todo.id)}
            />

            <label htmlFor={todo.id}></label>

            <span className='text'>{todo.text}</span>

            <img 
                className='icon-cross'
                src={iconCross} 
                alt="Ícone de x"
                onClick={() => removeTodo(todo.id)}
            />
        </li>
    )
}