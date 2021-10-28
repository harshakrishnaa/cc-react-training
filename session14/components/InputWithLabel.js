import React, { useEffect,useRef, useState } from "react";

class InputWithlabel=({})
    id, 
    children,
    type = "text",
    value, 
    onInputChange,
    isFocused,
    =>{
        const [clickAutoFocus, setClickAutoFocus]= useState(false);
        const inputRef =useRef();
        const clickAutoFocus=true;
        setClickAutoFocus(false);
    
        useEffect(() => {
            if(inputRef.current &&clickAutoFocus {
                inputRef.current.focus();
            },[clickAutoFocus]);

        return (
            <>
                <label htmlFor={id}>{children}</label>
                <input
                ref={inputRef}
                id = {id}  
                type={type}
                value={value} 
                onChange={onInputChange}
                />
                <button onClick={() => setClickAutoFocus(true)}>
                       Click to Autofocus
                </button>
            </>
        );
        };

export default InputWithlabel;