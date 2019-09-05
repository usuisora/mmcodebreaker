import React from 'react'
import Inctruction from '../components/Instruction'
let secret = null

const Display = _ => 
        <div className = 'container display'>
            { secret == null ? <Inctruction/> : 'Display' }
        </div>

export default Display
