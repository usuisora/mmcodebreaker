import React,{useState} from 'react'
import Input from '../../components/Input'
import Left from './Left'
import Right from './Right'
import Keys from '../Keys'
import SubmitButton from '../../components/buttons/SubmitButton'

const restrictEnter = () => console.log('restrict')
const NoSecretUI = () => {
        const [secret, setSecret] = useState([]);
     

    return (
         <div className='ui'>
                        <Left>
                                <Input />
                                <Keys />
                        </Left>
                        <Right>
                               <SubmitButton/>
                        </Right>

                </div>
    )
}

export default NoSecretUI
