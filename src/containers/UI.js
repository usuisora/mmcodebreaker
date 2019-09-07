import React from 'react'
import NoSecretUI from './ui/NoSecretUI';
import SecretUI from './ui/SecretUI';
let game = true
const UI = _ => 
        <div  className = 'container'>
           { game == null ? 
            <NoSecretUI/> : <SecretUI/>
            } 
        </div>
    

export default UI
