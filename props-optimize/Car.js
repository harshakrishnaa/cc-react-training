
const CarDetails=({name,engine,gearBox,type,bph,torque})=>{
    return(
      <>
      <h1>Car Details</h1>
      <p>name:{name}</p>
      <p>engine:{engine}</p>
      <p>gearBox:{gearBox}</p>
      <p>type:{type}</p>
      <p>bph:{bph}</p>
      <p>torque:{torque}</p>
      </>
      
  
    )
  }
  
  const Car=({spearWheel,seatingCapacity,...other})=>{
    const ignoredProperties=[spearWheel,seatingCapacity]
    console.log(`Ignored Properties are: spearWheel: ${ignoredProperties[0]},seatingCapacity: ${ignoredProperties[1]}`);
    return(
  <div>
      <CarDetails {...other}/>
  </div>
    )
  }
  function App() {
  
    const car={
      name:'BMW X5',
      engine:' Twin-turbocharged ',
      gearBox:'5-speed Automatic',
      type:'Sports Car',
      spearWheel:'12,582.00 INR',
      seatingCapacity:5,
      bph:616,
      torque:'335.26bhp@5500-6500rpm'
    }
    return (
      <div>
        {/* <Greeting {...greeting}/> */}
        <Car {...car}/>
      </div>
    );
  }
  
  export default App;