import React,{useContext}from 'react'
import Left from './Left'
import Right from './Right'
import RepeatButton from '../../components/buttons/RepeatButton'
import ResetButton from '../../components/buttons/ResetButton'
import Input from '../../components/Input'
import {GuessContext} from '../../context/GuessContext'
import {GameContext} from '../../context/GameContext'


const SecretUI = () => {

    const {setGuesses} = useContext(GuessContext);
    const {secret} = useContext(GameContext);

      
        return (
                <div className='ui'>
                <Left>
                                <Input disabled={true}/>
                        </Left>
                        <Right>
                                <RepeatButton   setGuesses={setGuesses} secret = {secret}/>
                                <ResetButton/>
                        </Right>
                </div>
        )
}

export default SecretUI
