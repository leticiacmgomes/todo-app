
import iconCross from '../assets/images/icon-cross.svg'
import iconCheck from '../assets/images/icon-check.svg'

import { ListItem } from './ListItem'

export const List = ({ filteredList, toggleTodo, removeTodo, itemsLeft, clearCompleted }) => {
    return (
        <ul>
            {
                filteredList.map((todo, index) => {
                    return(
                        <ListItem
                            key={index}
                            todo={todo}
                            toggleTodo={toggleTodo}
                            removeTodo={removeTodo}
                        />
                    )
                })
            }

            <div className='list-footer'> 
                <span className='items-left'>{itemsLeft} items left  </span>
                <button onClick={clearCompleted}>clear completed</button>
            </div>
        </ul>
    )
}