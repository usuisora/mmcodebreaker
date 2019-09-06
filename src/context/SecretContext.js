import React,{ useReducer, createContext } from 'react'
import SecretReducer from '../reducers/SecretReducer'
export const SecretContext = createContext();



const SecretContextProvider = (props) => {

    const [secret,dispatch] = useReducer(SecretReducer,[])
    return (
        <SecretContext.Provider value= {{secret , dispatch}}>
                {props.childen}
        </SecretContext.Provider>
    )
}


export default SecretContextProvider