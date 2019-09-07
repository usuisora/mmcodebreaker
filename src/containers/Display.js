import React from 'react'
import Instruction from '../components/Instruction'
import StepList from '../components/StepList'
let isSecretSubmitted = true

const Display = _ => 
        <div className = 'container display'>
            { isSecretSubmitted == null ? <Instruction/> : <StepList/> }
        </div>

export default Display
