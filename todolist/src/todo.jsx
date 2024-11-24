import React from 'react'

function Todo({text, onRemove}){
    return (
        <li>
            {text}<button onClick={onRemove}>Delete</button>
        </li>
    )
}

export default Todo;