import React from 'react';

function Input({id,children,type,OnTextChange}) {
    return (
        <>
        <label htmlFor={id}> {children}: </label>
        <input id={id} type={type} onChange={OnTextChange}/>
        </>
    );
}

export default Input;