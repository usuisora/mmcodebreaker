import React from 'react'
import Icon from '../Icon'
import {algorithm,reset} from '../../lib/alg'

const RepeatButton = ({secret , setGuesses}) => {

    const repeatGame =() =>{
        setGuesses(algorithm(secret));
        reset()
}   

    return (
               <button className = 'button grn' onClick={()=>{repeatGame()}}><Icon name = 'repeat'></Icon></button>
    )
}

export default RepeatButton
