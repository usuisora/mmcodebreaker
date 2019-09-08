/* eslint-disable eqeqeq */
import React,{ createContext, useState , useContext} from 'react'
import {difference, permutator, combi4 , getUnique} from '../lib/arrayLib'
import  {
    getMark,
    getCows,
    getRndInteger,
    getBulls
} from '../lib/checkerLib'
import { SecretContext } from './SecretContext';


export const GuessContext = createContext();
export const GuessProvider = (props) => {

    
    const [isWin, setIsWin] = useState(false);

    const [step, setStep] = useState(0);
    const [backup, setBackup] = useState(null);
    const [guesses, setGuesses] = useState([]);
    const [S, setS] = useState(combi4([1,2,3,4,5,6]));
    const [guess, setGuess] = useState([1,1,2,2]);
    const {secret} = useContext(SecretContext)
    
    const resetGame =_=>{
        setIsWin(false);
        setStep(0);
        setBackup(null);
        setGuesses([]);
        setS(combi4([1,2,3,4,5,6]));
        setGuess(null);

    }

    const deleteCodesFromS =  mark => {
       setStep(step+1)
        if (mark === 40  ){
            console.log('u win : ', guess)
            return true
        }
        else if (mark === 0){
            getUnique(guess).forEach(  i => {
               setS(S.filter(el=> !el.includes(i.toString())))
            })
        }
       
        else {
                let poss  = permutator([0,1,2,3]) 
                let newS = [];
                let bulls = getBulls(mark);
                
                let cows =  getCows(mark);
                poss.forEach(pos=>{
                    let regex = []
                    let border = 0;
                    for (let i = 0; i < 4 ; i++){
                            if(bulls > 0){
                                regex[pos[i]] = guess[pos[i]];
                                bulls--;
                                border = i+1;
                            }
                            else if(cows > 0){
                                if(cows === 1)
                                    regex[pos[i]] = guess[pos[i+1]];
                                else
                                    for(let k = 1; k <= cows; k++){
                                         if(k === cows) {
                                            regex[pos[i]] = guess[pos[border]]
                                        }else{
                                            regex[pos[i]] =  guess[pos[i+1]];
                                        } 
                                        i++
                                    }
                                        cows = 0;
                            }
                            else{
                               regex[pos[i]] = '['+ [1,2,3,4,5,6].filter(x=> x!= guess[pos[i]]).join(',')+']'
                            }
                    }
                    let reg = new RegExp(regex.join(''))
                    newS.push(...S.filter(el=> el.match(reg)))
                    bulls = getBulls(mark);
                    cows =  getCows(mark);
                })
            
               setS([...getUnique(newS)])
            
        }
        return false
    }

    const pushToGuesses = mark => {
        (guesses.length === 0) ? setGuesses([{
                guess: guess.join(''),
                bulls: getBulls(mark),
                cows:  getCows(mark)
            }]) :   setGuesses([...guesses, {
                guess: guess.join(''),
                bulls: getBulls(mark),
                cows:  getCows(mark)
            }])
    }
   
    const  algorithm = () => {
        // resetGame()
        for(let i = 0; i<10; i++){
            try{
                if(step === 0){
                     setGuess([1,1,2,2])
                }
                if(step === 1){
                     setGuess( [3,3,4,4])
                }
                else{
                     setGuess( S[getRndInteger(0, S.length-1)].split(''))
                }
                console.log(guess)
            // setGuess((step === 0) ?  [1,1,2,2] : (step === 1) ?  [3,3,4,4] : S[getRndInteger(0, S.length-1)].split(''));
            }
            catch(err){
                  setS([...backup]);
                  setS(difference(S,guesses.map(obj => obj.guess)))
                console.log(err)
            }

            let mark =   getMark(guess,secret);

             deleteCodesFromS(mark)
             let newstep = step +1
                setStep(newstep);
            if(isWin){
                return true;
            } 

             pushToGuesses(mark);

            if(step == 1){
                setBackup([...S])
            }

            setS(S.filter(el=>el != guess.join('')))
            
            console.log('isWin: ', isWin)
            console.log('Guess =', guess);
            console.log('secret = ',secret)
            console.log('step:', step);
            console.log('i:', i);

            console.log('mark= ', mark);
            console.log('len not used elements=',S.length)

        }

    }



    return (
        <GuessContext.Provider value= {{algorithm,guesses,isWin}}>
                {props.children}
        </GuessContext.Provider>
    )
}

export default GuessProvider

