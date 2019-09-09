/* eslint-disable eqeqeq */
import React,{ createContext, useState } from 'react'

export const GuessContext = createContext();
export const GuessProvider = (props) => {

    
    const [guesses, setGuesses] = useState([]);
    

    return (
        <GuessContext.Provider value= {{guesses, setGuesses}}>
                {props.children}
        </GuessContext.Provider>
    )
}

export default GuessProvider

