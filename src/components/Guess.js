import React from 'react'

const Guess = ({guess}) => {
    return (
        <div className="guess">
                {guess.map( (num, index) => <div key={index} className="number">{num}</div> )}
                    </div>
    )
}

export default Guess
