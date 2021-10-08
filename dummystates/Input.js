import React, { useState } from 'react';

function Input(props) {
    
    const [PhoneNum, setPhoneNum] = useState("");
    const [HasDataPack, setHasDataPack] = useState("");

    const HandlePhone=(e)=>
    {
        setPhoneNum(e.target.value)
    }
    const HandleHasData=(e)=>{
        setHasDataPack(e.target.value)
    }

    const Submitted=(e)=>
    {
        let msg=`Phone number: ${PhoneNum} Do you have data? ${HasDataPack}`
        alert(msg)
    }
    return (
        <>
        <form  onSubmit={Submitted}>
            <label htmlFor="Phone"><b>Phone</b></label>
             <input type='tel' onChange={HandlePhone} pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required></input>
            <p>{PhoneNum}</p>
            <label htmlFor="HasData"><b>Do You Have Data Pack?</b></label>
            <div onChange={HandleHasData}>
                <input type="radio" value="Yes" /> Yes
                <input type="radio" value="No" /> No
            <p>{HasDataPack}</p>
            </div>
            <button>Submit</button>
        </form>
        </>
    );
}

export default Input;