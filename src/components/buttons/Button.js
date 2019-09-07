import React from 'react'

const Button = ({handleClick,className,children}) => {
    return (
        <button className={className}>{children}</button>
    )
}

export default Button
