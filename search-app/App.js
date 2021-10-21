import Stories from "./stories";
import Search from "./Search";
import React,{useState} from 'react';


const d1= new Date("2021-10-01T11:32:02.089Z");
const d2= new Date("2021-10-01T11:32:58.089Z");
const stories=
[
    {
        title:'React',
        url:'https://reactjs.org/',
        author:'Jordan',
        num_Comment:3,
        point:4,
        object_id:0,
        createdAt:d1

    },
    {
        title:'Redux',
        url:'https://redux.js.org/',
        author:'Andrew',
        num_Comment:2,
        point:5,
        object_id:1,
        createdAt:d2

    },
]



function App() {
  const [search, setsearch] = useState("");
  
    const handleOnsearch=(e)=>{
        return(
            setsearch(e.target.value)
        );
    }
    const handleOnMinutes=()=>
    {
      return
    }
    const searchstories=stories.filter((story)=>
        story.title.toLowerCase().includes(search.toLowerCase())
    )
  return (
    <div>
      <Search onSearch={handleOnsearch} onDate={handleOnMinutes}/>
      <h1>Search for:{search}</h1>
      <Stories stories={searchstories}></Stories>
      {/* <Button>Click Me</Button> */}
    </div>
  );
}

export default App;
