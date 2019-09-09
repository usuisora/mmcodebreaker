/* eslint-disable eqeqeq */


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


function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }  

function getCows(mark){
         return mark%10;
      }
function getBulls(mark){
         return Math.floor(mark/10);
     }
    

module.exports = {
    getMark,
    getCows,
    getRndInteger,
    getBulls
}