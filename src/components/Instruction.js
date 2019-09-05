import React  from 'react'



const Instruction = () => {
    const rules = ['Length of secret must be 4','Use digits from 1 to 6','Digits can repeat'];
    return (
        <div className = 'instruction'>
            <div className="name"><span className='grntext'>M</span>ASTER<span className='grntext'>M</span>IND CODEBREAKER</div>
            <div className="title">Rules</div>
            {rules.map((rule,index ) => <div className='text' key= {index}>{rule}</div>)}
        </div>
    )
}

export default Instruction
