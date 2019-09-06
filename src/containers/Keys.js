import React from 'react'
import Key from '../components/Key'
import DeleteButton from '../components/DeleteButton'
let keys  = [1,2,3,4,5,6]

const Keys = () => {
    return (
        <div className='keys'> 
            { keys.map((val, index) => <Key key ={val} val = {val}/> )}
            <DeleteButton/>
        </div>
    )
}

export default Keys
