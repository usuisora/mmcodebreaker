import React,{ createContext, useState} from 'react'



export const GameContext = createContext();
export const GameProvider = (props) => {
    const [game, setGame] = useState(true);
    
    const stopGame =_=> setGame(false)
   
    return (
        <GameContext.Provider value= {{game, stopGame}}>
                {props.children}
        </GameContext.Provider>
    )
}

export default GameProvider