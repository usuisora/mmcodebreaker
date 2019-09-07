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
    return (
        <SecretContext.Provider value= {{secret , getSecret, pushToSecret, popFromSecret}}>
                {props.children}
        </SecretContext.Provider>
    )
}

export default SecretProvider