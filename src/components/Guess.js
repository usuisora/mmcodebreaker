import React from 'react'

const Guess = ({guess}) => {
    return (
        <div className="guess">
                {guess.split('').map( (num, index) => <div key={index} className="number">{num}</div> )}
                    </div>
    )
}

export default Guess
