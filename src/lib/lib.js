/* eslint-disable no-loop-func */
/* eslint-disable eqeqeq */
//use strict
let isWin = false;
let  step = 0;
let backup;
let guesses = [];
let S = combi4([1,2,3,4,5,6])
const secret =[4,4,3,6]
let guess ;

function reset(){
     isWin = false;
      step = 0;
     backup= [];
     guesses = [];
     S = combi4([1,2,3,4,5,6])
     guess = [] ;
}
  function algorithm(){
  
        ///3 victory check 
    for(let i = 0; i<10; i++){
       
        try{
         guess = (step == 0) ?  [1,1,2,2] : (step == 1) ?  [3,3,4,4] : S[getRndInteger(0, S.length-1)].split('');
        }
        catch(err){
            S = [...backup];
            S = difference(S,guesses)
        }
       

        let mark = getMark(guess,secret)
        guesses.push({
            guess: guess.join(''),
            bulls: getBulls(mark),
            cows: getCows(mark) 
        });
        isWin = deleteCodesFromS(mark,guess)
        if(isWin){
            break;
        }
        if(step == 1){
            backup =[...S]

        }
        S = S.filter(el=>el != guess.join(''))

    }
    console.log('res:',guesses)

    return  guesses
    
  }

function deleteCodesFromS(mark,guess){
    step++;
    if (mark == 40  ){
        return true
    }
    else if (mark == 0){
        getUnique(guess).forEach(i => {
           S = S.filter(el=> !el.includes(i.toString()))
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

function getMark(guess,secret){
    let cows = 0
    let bullPlaces = [];
    let cowValues = []
    for (let i = 0 ; i < 4 ; i++){
        if(secret[i] == guess[i] ) {
            bullPlaces.push(i)
        }
    }

    for(let i = 0 ; i < 4 ; i++){
        for(let j = 0 ; j < 4 ; j++)
            if(secret[i] == guess[j] )
                if(i == j)
                    {
                        cows +=10;
                        i++ 
                        j = -1
                    }   
                else if(!bullPlaces.includes(j) && !bullPlaces.includes(i) ){
                        cowValues.push(guess[j]);
                        // cows +=1;
                        i++ 
                        j = -1
                    }    
        }
        cows += [...new Set(cowValues)].length;
    return cows ;
}
function getUnique(arr){
    return [...new Set(arr)];
}
 function difference(arr1,arr2) { return arr1.filter(x => !arr2.includes(x))}

 function combi4(vals,N){
        return vals.map(x=>
                        vals.map(y => 
                        vals.map(z => 
                              vals.map(t => x.toString()+y.toString()+z.toString() + t.toString()))
                        )
                    ).flat(3)
                        }

function permutator(inputArr){
                            let result = [];
                          
                            const permute = (arr, m = []) => {
                              if (arr.length === 0) {
                                result.push(m)
                              } else {
                                for (let i = 0; i < arr.length; i++) {
                                  let curr = arr.slice();
                                  let next = curr.splice(i, 1);
                                  permute(curr.slice(), m.concat(next))
                               }
                             }
                           }
                          
                           permute(inputArr)
                          
                           return result;
                          }
  
         function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }                
     function getCows(mark){
         return mark%10;
      }
     function getBulls(mark){
         return Math.floor(mark/10);
     }
    

     algorithm()
     reset()
     console.log('reset')
     algorithm()
