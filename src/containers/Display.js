import React , {useContext}from 'react'
import Instruction from '../components/Instruction'
import StepList from '../components/StepList'
import { GameContext } from '../context/GameContext'

const Display = _ => {
const {game, secret} = useContext(GameContext)
      return  <div className = 'container display'>
            { game === false ? <Instruction/> : <StepList secret={secret}/> }
        </div>}

export default Display
