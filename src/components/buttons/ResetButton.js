import React, {useContext} from 'react'
import Icon from '../Icon';
import { GameContext } from '../../context/GameContext'

const ResetButton = () => {
    const {stopGame, clearSecret} = useContext(GameContext)

    return (
        <button  className = 'button grn' onClick={()=>{stopGame(); clearSecret();}}><Icon name = 'close'></Icon></button>
    )
}

export default ResetButton
