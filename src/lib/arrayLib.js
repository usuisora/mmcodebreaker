 const difference = (arr1,arr2) => { return arr1.filter(x => !arr2.includes(x))}

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
 
 function getUnique(arr){
     return [...new Set(arr)];
}

module.exports = {
            difference,
            combi4,
            permutator,
            getUnique
       }