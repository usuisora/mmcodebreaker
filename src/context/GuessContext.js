import React,{ createContext, useState} from 'react'



export const GuessContext = createContext();
export const GuessProvider = (props) => {
    const [guesses, setGuesses] = useState([]);

    const isGuessed = algorithm(secret,);
   
    return (
        <GuessContext.Provider value= {{}}>
                {props.children}
        </GuessContext.Provider>
    )
}

export default GuessProvider