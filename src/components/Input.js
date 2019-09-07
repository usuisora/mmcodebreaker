

import React from 'react'
import Number from './Number'

let secret = ['1','1','2','_',]
const Input = ({disabled}) => {

    let classes = (disabled) ? 'input blue white-text' : 'input light-grey'
    return (
        <div className={classes}>
            {secret.map((dig, index) => <Number val = {dig} key={index}/>)}
        </div>    
    )
}

export default Input
