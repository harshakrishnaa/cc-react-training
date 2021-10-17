import Input from "./Label&counter";
import useSemiPersistenceState from "./useSemiPersistenceState";

function App() {
  const [state,setstate,prevState] = useSemiPersistenceState('state',"")
  const textHandler=(e)=>{
    return(
      setstate(e.target.value)
    )
  }
  return (
  <div>
    {/* generic input component Qn-4 */}
    <Input id={'Type'} type={'text'} OnTextChange={textHandler}><b>Type</b></Input>
    <p>You typed:<b>{state}</b></p>
    <p>You had typed:<b>{prevState}</b></p>
  </div>
  );
}

export default App;