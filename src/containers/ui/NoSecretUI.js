import React from 'react'
import Input from '../../components/Input'
import Left from './Left'
import Right from './Right'
import Keys from '../Keys'
import SubmitButton from '../../components/SubmitButton'
const NoSecretUI = () => {
    return (
         <div className='ui'>
                        <Left>
                                <Input/>
                                <Keys/>
                        </Left>
                        <Right>
                               <SubmitButton/>
                        </Right>

                </div>
    )
}

export default NoSecretUI
