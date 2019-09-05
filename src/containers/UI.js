import React from 'react'
import NoSecretUI from './ui/NoSecretUI';
import SecretUI from './ui/SecretUI';
let secret = null
const UI = _ => 
        <div  className = 'container'>
           { secret == null ? 
            <NoSecretUI/> : <SecretUI/>
            } 
        </div>
    

export default UI
