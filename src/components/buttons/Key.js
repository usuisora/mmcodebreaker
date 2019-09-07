import React from 'react'

const Key = ({val,pushToSecret}) => {
    // let secret = []
    // let handleClick = () =>{
    //     if(secret.length<4)
    //              secret.push(val)
    // }
    return (
        <button className="button key" onClick={()=>pushToSecret(val)}>
                                              <div className="number">{val}</div>
                                       </button>
    )
}

export default Key
