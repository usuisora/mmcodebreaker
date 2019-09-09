

import React ,{useContext} from 'react'
import Number from './Number'
import {GameContext} from '../context/GameContext'
// let Game = ['1','1','2','']
const Input = ({disabled}) => {
    const {getSecret} = useContext(GameContext)
    let     classes = (disabled) ? 'input blue white-text' : 'input light-grey'
    return (
         <div className={classes}>
                         {getSecret().map((dig, index) => <Number val = {dig} key={index}/>)}
        </div> 
      
    )
}

export default Input
