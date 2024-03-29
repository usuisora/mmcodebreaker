import React from 'react'
import Key from '../components/buttons/Key'
import DeleteButton from '../components/buttons/DeleteButton'
let keys  = [1,2,3,4,5,6]

const Keys = _ => {
    return (
        <div className='keys'> 
            { keys.map((val, index) => <Key key ={val} val = {val}/> )}
            <DeleteButton/>
        </div>
    )
}

export default Keys
