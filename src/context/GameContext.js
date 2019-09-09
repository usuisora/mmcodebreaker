import React,{ createContext, useState, useEffect, useContext} from 'react'
const {algorithm} = require('../lib/alg')


export const GameContext = createContext();

export const GameProvider = (props) => {
    const [game, setGame] = useState(false);
    const initGame =_=> setGame(true)
    const stopGame =_=> setGame(false)
    const [secret, setSecret] = useState([]);
    
  
    const getSecret = () => {
        if(secret.length < 4){
            let res = Array(4).fill('_')
            secret.forEach((val, i)=> res[i] = val);
            return res
        }
        return secret
      }

    const pushToSecret = val => {
        if(secret.length < 4) {
                setSecret([...secret,val])

        }
    }
    const popFromSecret = val => {
        if(secret.length > 0){
            
            setSecret(secret.slice(0,secret.length-1))
        }
    }
    const clearSecret = () => setSecret([])
//    useEffect(() => {
//      setGuesses([1,1])
//      if(secret === undefined){
//          stopGame()
//      }
//       game === true ?   setGuesses(algorithm(secret)) : setGuesses([])
//    }, [game, secret])
    
    return (
        <GameContext.Provider value= {{game, initGame, stopGame, getSecret,clearSecret, popFromSecret,pushToSecret, secret}}>
                {props.children}
        </GameContext.Provider>
    )
}

export default GameProvider