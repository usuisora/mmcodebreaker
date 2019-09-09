import React , {useContext} from 'react'
import {GameContext} from '../../context/GameContext'

const Key = ({val}) => {
    const {pushToSecret} = useContext(GameContext)
    return (
        <button className="button key" onClick={()=>pushToSecret(val)}>
                                              <div className="number">{val}</div>
                                       </button>
    )
}

export default Key
