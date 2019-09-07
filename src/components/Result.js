import React from 'react'
let isWin =  false

const Result = ({isVisible}) => {
    let classes = `left result ${isWin ?' grn white-text' : ' lose'}`;
    if(!isVisible)
        return null
    else
    return (
        <div className = 'flex-con '>
            <div className = { classes }>{ isWin ? 'win' : 'lose' }</div>
            <div className = "square" ></div>
        </div>
        
    )
}

export default Result
