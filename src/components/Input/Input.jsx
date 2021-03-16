import React from 'react'
import "./Input.css"

const Input = ({ variant = "primary", placeholder = "Escribe . . .", ...rest }) => {
    return ( 

        <input 
            className = {`input ${variant}`}
            type="text" 
            name="" 
            id=""
            placeholder = { placeholder }
            {...rest}
        />

    );
}
 
export default Input;