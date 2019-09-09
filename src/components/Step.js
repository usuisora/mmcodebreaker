import React from 'react'
import Check from './Check'
import Guess from './Guess'

const Step = ({guess, index}) =>  <div className="step">
                                        <div className="step-number"> {index}
                                        </div>
                                        <Guess guess = {guess.guess}/>
                                        <Check guess = {guess}/>
                                </div>

export default Step
