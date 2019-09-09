import React,{useContext} from 'react'
import Icon from '../Icon';
import {GameContext} from '../../context/GameContext'

const DeleteButton = () => {
    const {popFromSecret} = useContext(GameContext)
    return (
        <button className="red button key" onClick ={popFromSecret}>
            <Icon name = 'backspace' className='white-text'/>
        </button>
    )
}

export default DeleteButton
