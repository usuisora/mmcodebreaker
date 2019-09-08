import React, {useContext} from 'react'
import Icon from '../Icon';
import { GameContext } from '../../context/GameContext'
import { SecretContext } from '../../context/SecretContext'

const ResetButton = () => {
    const {stopGame} = useContext(GameContext)
    const {clearSecret} = useContext(SecretContext)

    return (
        <button  className = 'button grn' onClick={()=>{stopGame(); clearSecret();}}><Icon name = 'close'></Icon></button>
    )
}

export default ResetButton
