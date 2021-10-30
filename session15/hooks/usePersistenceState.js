import { useEffect, useState } from "react";
const usePersistenceState = (key, initValue) =>{
    const [value,setValue]=useState(localStorage.getItem(key) ||initValue);
    useEffect(()=>{
        localStorage.setItem(key,value);
    },[key,value]);
    return [value, setValue];
};
export default;t usePersistenceState;