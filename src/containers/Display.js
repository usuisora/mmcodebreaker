import React , {useContext}from 'react'
import Instruction from '../components/Instruction'
import StepList from '../components/StepList'
import { GameContext } from '../context/GameContext'
import { GuessContext } from '../context/GuessContext'

const Display = _ => {
const {game, secret} = useContext(GameContext)
const {guesses, setGuesses} = useContext(GuessContext)


      return  <div className = 'container display'>
            { game === false ? <Instruction/> : <StepList secret={secret} guesses = {guesses} setGuesses={setGuesses}/> }
        </div>}

export default Display
