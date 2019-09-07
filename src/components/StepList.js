import React  from  'react'
import Step   from  './Step'
import Result from  './Result'
let guesses = ['1111','1123','1231','1234','1111','1123','1231','1234','1111','1123']

let result = null
const StepList = () => {
    return (
        <div className = 'step-list'>
            <Result isVisible = {guesses.length === 10}/>
            {guesses.reverse().map((guess, index) => <Step guess={guess} key = {index} index = {guesses.length - index}/> )}
            </div>
           
    )
}

export default StepList
