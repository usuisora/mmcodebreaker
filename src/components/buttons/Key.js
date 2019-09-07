import React , {useContext} from 'react'
import {SecretContext} from '../../context/SecretContext'

const Key = ({val}) => {
    const {pushToSecret} = useContext(SecretContext)
    return (
        <button className="button key" onClick={()=>pushToSecret(val)}>
                                              <div className="number">{val}</div>
                                       </button>
    )
}

export default Key
