import React  from  'react'
import Step   from  './Step'
import Result from  './Result'


let guesses = [{value:[1,2,3,4] , cows:2 , bulls:2},
                {value:[1,3,3,4] , cows:1 , bulls:1},
                {value:[2,4,5,6] , cows:0 , bulls:0},]

let result = null
const StepList = () => {
    return (
        <div className = 'step-list'>
            <Result isVisible = {guesses.length === 10}/>
            {guesses.reverse().map((guess, index) =>{
                     setTimeout(console.log('121323'),1000)
                   return   <Step guess={guess} key = {index} index = {guesses.length - index}/>
                   })
          
             }
            </div>
           
    )
}

export default StepList
