import React,{useContext} from 'react'
import Icon from '../Icon';
import {SecretContext} from '../../context/SecretContext'

const DeleteButton = () => {
    const {popFromSecret} = useContext(SecretContext)
    return (
        <button className="red button key" onClick ={popFromSecret}>
            <Icon name = 'backspace' className='white-text'/>
        </button>
    )
}

export default DeleteButton
