
const SecretReducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case 'PUSH_SECRET':
           return [ ...state, action.number ]
        case 'POP_SECRET': 
            return state.filter((el,index)=> index !== (state.lendth-1));
        default : 
            return state

    }
}

export default SecretReducer
