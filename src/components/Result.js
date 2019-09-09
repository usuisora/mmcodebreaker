import React from 'react'

const Result = ({bulls}) => {
    let isWin = bulls === 4
    let classes = `left result ${isWin ?' grn white-text' : ' lose'}`;
  
    return (
        <div className = 'flex-con '>
            <div className = { classes }>{ isWin ? 'win' : 'lose' }</div>
            <div className = "square" ></div>
        </div>
        
    )
}

export default Result
