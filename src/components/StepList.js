import React from 'react'
import Step from './Step'
let guesses = ['1111','1123','1231','1234']
const StepList = () => {
    return (
        <div className = 'step-list'>
            {guesses.reverse().map((guess, index) => <Step guess={guess} key = {index} index = {guesses.length - index}/> )}
            </div>
           
    )
}

export default StepList
