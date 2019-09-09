import React,{useContext} from 'react'
import Icon from '../Icon'
import { GameContext } from '../../context/GameContext'

const SubmitButton = () => {
    const {initGame, secret}  = useContext(GameContext);

    const handleClick =_=>{
        if(secret.length === 4){
            initGame()
        }

    }
        
    return (
         <button className='grn button' onClick={handleClick}><Icon name ='done'></Icon></button>
    )
}

export default SubmitButton
