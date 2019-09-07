

import React ,{useContext} from 'react'
import Number from './Number'
import {SecretContext} from '../context/SecretContext'
// let secret = ['1','1','2','']
const Input = ({disabled}) => {
    const {getSecret} = useContext(SecretContext)
    let     classes = (disabled) ? 'input blue white-text' : 'input light-grey'
    return (
         <div className={classes}>
                         {getSecret().map((dig, index) => <Number val = {dig} key={index}/>)}
        </div> 
      
    )
}

export default Input
