
  export const SecretReducer = (state, action) => {
    switch(action.type) {
        case 'PUSH_SECRET':
           return [ ...state, action.number ]
        case 'POP_SECRET': 
            return state.filter((el,index)=> index !== (state.lendth-1));
        case 'GET_SECRET':
                 {   
                        if(state.length < 4){
                                let res = Array(4).fill('')
                                state.forEach((val, i)=> res[i] = val);
                                return res
                        }
                        return state
                }
        default : 
            return [1,1,1,1]

    }
}

export default SecretReducer
