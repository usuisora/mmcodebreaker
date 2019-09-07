import React,{ createContext, useState} from 'react'



export const SecretContext = createContext();
export const SecretProvider = (props) => {
    const [secret, setSecret] = useState([]);
    const getSecret = () => {
        if(secret.length < 4){
            let res = Array(4).fill('')
            secret.forEach((val, i)=> res[i] = val);
            return res
        }
        return secret
      }
    return (
        <SecretContext.Provider value= {{secret , getSecret}}>
                {props.children}
        </SecretContext.Provider>
    )
}

export default SecretProvider