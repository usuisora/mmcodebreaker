import React,{useContext} from 'react'
import NoSecretUI from './ui/NoSecretUI';
import SecretUI from './ui/SecretUI';
import { GameContext } from '../context/GameContext'

const UI = _ => {
        const {game} = useContext(GameContext)
        return <div  className = 'container'>
           { game === false ? 
            <NoSecretUI/> : <SecretUI/>
            } 
        </div>
}

       
    

export default UI
