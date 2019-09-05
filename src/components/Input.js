

import React from 'react'
import Number from './Number'

let secret = ['1','1','2','_',]
const Input = () => {
    return (
        <div className='input '>
            {secret.map((dig, index) => <Number val = {dig} key={index}/>)}
        </div>    
    )
}

export default Input
