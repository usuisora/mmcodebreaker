import React,{useState} from 'react'
import Input from '../../components/Input'
import Left from './Left'
import Right from './Right'
import Keys from '../Keys'
import SubmitButton from '../../components/buttons/SubmitButton'

const restrictEnter = () => console.log('restrict')
const NoSecretUI = () => {
        const [secret, setSecret] = useState([]);
        const pushToSecret = val => {
                if(secret.length < 4) {
                        setSecret([...secret,val])

                }
                else{
                        restrictEnter()
                }
        }

        const getSecret = () =>{
                if(secret.length < 4){
                        let res = Array(4).fill('')
                        secret.forEach((val, i)=> res[i] = val);
                        return res
                }
                return secret
                
        }
    return (
         <div className='ui'>
                        <Left>
                                <Input secret ={getSecret()}/>
                                <Keys pushToSecret = {pushToSecret} />
                        </Left>
                        <Right>
                               <SubmitButton/>
                        </Right>

                </div>
    )
}

export default NoSecretUI
