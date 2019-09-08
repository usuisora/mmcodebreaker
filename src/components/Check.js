import React from 'react'

const Check = ({guess:{cows, bulls}}) => {

    const drawPins =  (count, color)=>{
        let classes = 'circle '+ color;
       return  Array(count).fill('').map(turn => <div className={classes}></div>)
    }
    const EmptyCircles =  Array(4 - bulls - cows ).fill('').map(turn => <div className='empty-circle'></div>)

    // const bullsCircles = Array(bulls).fill('').map(turn => <div className="circle black"></div>)
    // const cowCircles =drawPins(cows,'white')

    return (
         <div className="check square blue">
                 {drawPins(bulls,'black')}
                 {drawPins(cows, 'white')}
                 {EmptyCircles}
                    </div>
    )
}

export default Check
