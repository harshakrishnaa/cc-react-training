import styles from "./App.module.css";
import React, { useState, useEffect} from "react";
const initStories=
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
    {
        title: "100 years of solitude",
        url: "https://redux.js.org/",
        author: "Gabriel Garcia",
        num_comments: 2,
        points: 5,
        objectID: 5,
    },
];
function App() {
    const [searchTerm, setsearchTerm] = usePersistenceState("customerSearchTerm","");
    
const [stories,setStories]=useState(initStories);
 
const handleOnsearch=(e)=>{
          return(
              setsearchTerm(e.target.value)
          );
      }
const onHandleDeleteItem (item) => {
     const newList = stories.filter((i) => item.objectID !== i.objectID);
      setStories (newList);
}

const filteredStories = InitStories.filter ((story) =>
        story.title.toLowerCase().includes (searchTerm.toLowerCase())
        );

        return (

            div className={styles.container}>
             <InputWithLabel 
                id="search" 
                value={searchTerm}
                onInputChange={handleOnsearch}
                type="text"
             >
                <strong>Search For Stories</strong> 
            </InputWithLabel> 
            <h4>Searching for: (searchTerm} </h4> 
            <List stories={filteredStories} handleDeleteItem={onHandleDelete} />
            </div>
            );
}
export App;