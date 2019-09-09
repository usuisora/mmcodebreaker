import React,{useState, useEffect,useContext}  from  'react'
import Step   from  './Step'
import Result from  './Result'
const {algorithm, reset } = require('../lib/alg')


const StepList = ({secret}) => {
    const [guesses, setGuesses] = useState([]);
    useEffect(() => {
        setGuesses(algorithm(secret))
        reset()
    },[])
    console.log(guesses)
return guesses === undefined ? <>proccessing...</> :
        <div className = 'step-list'>
            <Result isVisible = {guesses.length === 10}/>
             {guesses.reverse().map((guess, index) =>{
                     setTimeout(console.log('121323'),1000)
                   return   <Step guess={guess} key = {index} index = {guesses.length - index}/>
                   })
    
             } 
            </div>
           
    
}

export default StepList
