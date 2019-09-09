/* eslint-disable no-loop-func */
/* eslint-disable eqeqeq */
//use strict

const {
    difference,
    combi4,
    permutator,
    getUnique
} = require('./arrayLib')

const {
    getMark,
    getCows,
    getRndInteger,
    getBulls
} =require('./checkerLib')

var isWin = false;
var  step = 0;
var backup;
var guesses = [];
var S = combi4([1,2,3,4,5,6])
// const secret =[4,4,3,6]
var guess ;

function reset(){
     isWin = false;
     step = 0;
     backup = [];
     guesses = [];
     S = combi4([1,2,3,4,5,6])
     guess = [] ;
}
 function  algorithm(secret){
    secret.forEach(el => {
         if(el<=1 && el>6){
            throw new Error('secret have wrong format')
        }})
        if(secret.length !== 4) {
            throw new Error('secret length is wrong')
        }
    for(let i = 0; i<10; i++){
        try{
         guess = (step == 0) ?  [1,1,2,2] : (step == 1) ?  [3,3,4,4] : S[getRndInteger(0, S.length-1)].split('');
        }
        catch(err){
            S =  [...difference(backup,guesses.map(el=> el.guess))]
            guess = S[getRndInteger(0, S.length-1)].split('');
        }

        let mark = getMark(guess,secret)

        guesses.push({
            guess: guess.join(''),
            bulls: getBulls(mark),
            cows: getCows(mark) 
        });
        S =  [...S.filter(el=>el != guess.join(''))]

        isWin =  deleteCodesFromS(mark,guess)
        if(isWin){
            break;
        }
        
        if(step == 1){
            backup =  [...S]
        }

    }
    console.log('res:',guesses)

    return  guesses

  }

function deleteCodesFromS(mark,guess){
    S =  S.filter(el=>el != guess.join(''))
    step++;
    if (mark == 40  ){
        return true
    }
    else if (mark == 0){
        getUnique(guess).forEach(i => {
           S =[...S.filter(el=> !el.includes(i.toString()))]
        })
    }
   
    else {
            let poss  = permutator([0,1,2,3]) //gtht
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
                            if(cows == 1)
                                regex[pos[i]] = guess[pos[i+1]];
                            else
                                for(let k = 1; k <= cows; k++){
                                     if(k == cows) {
                                        regex[pos[i]] = guess[pos[border]]
                                    }else{
                                        regex[pos[i]] =  guess[pos[i+1]];
                                    } 
                                    i++
                                }
                                    // i+= cows
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
        
            S = [...getUnique(newS)]
        
    }
    return false
}


// eslint-disable-next-line no-unused-vars
function AlgError(){
    let success = 0;
    // eslint-disable-next-line no-unused-vars
    let fail =0

    let secret = [7,1,2,6]
    for(let ind = 0 ; ind< 100; ind++){
        let gs = algorithm(secret)
        reset()
        if(gs.pop().bulls == 4){
            success++
        }
        else{
            fail++
        } 
    }
    if(success == 0)
           return  1000;
        else
           return success
}


// algorithm([1,2,5,6]);

module.exports ={
    algorithm,
    reset
}

