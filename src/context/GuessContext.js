/* eslint-disable eqeqeq */
import React,{ createContext, useState , useContext} from 'react'
import {difference, permutator, combi4 , getUnique} from '../lib/arrayLib'

import { SecretContext } from './SecretContext';


export const GuessContext = createContext();
export const GuessProvider = (props) => {

    
    const [guesses, setGuesses] = useState([]);
    
    


    return (
        <GuessContext.Provider value= {{guesses}}>
                {props.children}
        </GuessContext.Provider>
    )
}

export default GuessProvider

