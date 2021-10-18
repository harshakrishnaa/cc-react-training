import InputWithLabel from "./InputWithLabel";
import UseSemipersistenceState from "./UseSemipersistenceState";

function App() {
  const [state,setstate,prevState] = useSemipersistenceState('state',"")
  const textHandler=(e)=>{
    return(
      setstate(e.target.value)
    )
  }
  return (
  <div>
    {/* generic input component Qn-4 */}
    <InputWithLabel id={'Type'} type={'text'} OnTextChange={textHandler}><b>Type</b></InputWithLabel>
    <p>You typed:<b>{state}</b></p>
    <p>You had typed:<b>{prevState}</b></p>
  </div>
  );
}

export default App;
