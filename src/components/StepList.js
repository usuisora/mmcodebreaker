import React,{useEffect}  from  'react'
import Step   from  './Step'
import Result from  './Result'
const {algorithm, reset } = require('../lib/alg')


const StepList = ({secret,guesses, setGuesses}) => {
    useEffect(() => {
        setGuesses(algorithm(secret))
        reset()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    console.log(guesses)
return guesses === undefined ? <>proccessing...</> :
        <div className = 'step-list'>
            <Result bulls = {guesses.reverse()[0].bulls}/>
             {guesses.map((guess, index) =>{
                     setTimeout(console.log('121323'),1000)
                   return   <Step guess={guess} key = {index} index = {guesses.length - index}/>
                   })
    
             } 
            </div>
           
    
}

export default StepList
