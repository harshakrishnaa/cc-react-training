import { useState,useEffect } from 'react';
import Display from './Display';
import Button from './Button';
import styles from './App.module.css'
function App() {
  const [state, setstate] = useState(localStorage.getItem('state')||0);

  useEffect(() => {
    localStorage.setItem('state',state+1)
    }, [state]);

const HandleIncreaseCounter=()=>{
  setstate(state+1);
  }

const HandleDecreaseCounter=(e)=>
{
  setstate(state-1);
  localStorage.setItem('state',state-1)
  
}
  return (
    <div>
      <Display Counter={state}/>
      <div className={styles.container}>
        <Button onClick={HandleIncreaseCounter} >+</Button>
        <Button onClick={HandleDecreaseCounter} >-</Button>
      </div>
    </div>
  );
}

export default App;