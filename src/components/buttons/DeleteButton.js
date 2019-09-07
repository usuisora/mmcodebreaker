


import React from 'react'
import Icon from '../Icon';

let secret = ['1','1']
const DeleteButton = () => {
    const handleClick = () => secret.pop();
    return (
        <button className="red button key" onClick ={handleClick}>
            <Icon name = 'backspace' className='white-text'/>
        </button>
    )
}

export default DeleteButton
