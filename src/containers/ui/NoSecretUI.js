import React from 'react'
import Input from '../../components/Input'
import Icon from '../../components/Icon'
import Left from './Left'
import Right from './Right'
const NoSecretUI = () => {
    return (
         <div className='ui'>
                        <Left>
                                <Input/>
                        </Left>
                        <Right>
                                <button className='grn button'><Icon name ='done'></Icon></button>
                        </Right>

                </div>
    )
}

export default NoSecretUI
