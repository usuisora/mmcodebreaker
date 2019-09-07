import React from 'react'
import Left from './Left'
import Right from './Right'
import RepeatButton from '../../components/buttons/RepeatButton'
import ResetButton from '../../components/buttons/ResetButton'
import Input from '../../components/Input'

let game = true

const SecretUI = () => {
        return (
                <div className='ui'>
                <Left>
                                <Input disabled={true}/>
                        </Left>
                        <Right>
                                <RepeatButton/>
                                <ResetButton/>
                        </Right>
                </div>
        )
}

export default SecretUI
