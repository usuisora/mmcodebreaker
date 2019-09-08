import React,{useContext} from 'react'
import Icon from '../Icon'
import { GameContext } from '../../context/GameContext'
import { SecretContext } from '../../context/SecretContext'

const SubmitButton = () => {
    const {secret} = useContext(SecretContext);
    const {initGame}  = useContext(GameContext)
    const handleClick =_=>{
        if(secret.length === 4)
                initGame(secret);
    }
        

        
    

    return (
         <button className='grn button' onClick={handleClick}><Icon name ='done'></Icon></button>
    )
}

export default SubmitButton
