import React from 'react'
import Inctruction from '../components/Instruction'
import StepList from '../components/StepList'
let isSecretSubmitted = true

const Display = _ => 
        <div className = 'container display'>
            { isSecretSubmitted == null ? <Inctruction/> : <StepList/> }
        </div>

export default Display
