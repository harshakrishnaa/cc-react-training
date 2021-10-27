import styles from "./App.module.css";
import Search from "./components/Search";  
import StateForSearch from "./session12/components/StateForSearch"; 
import List from "./session12/components/List";
import UseSemipersistencestate from "./hooks/UseSemipersistencestate"; 
import InputWithLabel from "./hooks/InputWithLabel";
import React, { useState, useEffect, useReducer} from "react";
const initStories=[
    {
        title:'React',
        url:'https://reactjs.org/',
        author:'Jordan',
        num_Comment:3,
        point:4,
        object_id:0,
        

    },
    {
        title:'Redux',
        url:'https://redux.js.org/',
        author:'Andrew',
        num_Comment:2,
        point:5,
        object_id:1,
        

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
const API_ENDPOINT="https://hn.algolia.com/api/v1/search?query=";

const storiesReducer=(state, action)=>{
    switch(action.type){
        case "STORIES_FETCH_INIT";
            return {..state,
            isLoading:true,
            isError:false};
        case "STORIES_FETCH_SUCCESS";
            return {...state,data:action.payload, 
                isLoading:false, 
                isError:false};
        case "STORIES_FETCH_FAILURE";
            return {...state, data:[], 
                isLoading: false, 
                isError:true}
        case "REMOVE_STORY";
            return{
             ...state,
             data: state.data.filter(
                (i) => action.payload.objectID !== i.objectID
            ),
        //    make api call in the backend
        default:
            throw new Error()
    }
};
    
// const getAsyncData=()=>
//     new Promise((res,rej)=>setTimeout(()=>res({data:initStories}), 2000));

function App() {
    const [searchTerm, setsearchTerm] = usePersistenceState("customerSearchTerm","");
    

const [stories, dispatchStories]=useReducer(storiesReducer,{
    data: [],
    isLoading:false,
    isError:false,
});

useEffect(()=>{
    dispatchStories({type:"STORIES_FETCH_INIT"}) 
    fetch(`${API_ENDPOINT}react`)
    .then({res} =>res.json())
    .then((result) => {
        dispatchstories({type:"STORIES_FETCH_SUCESS",
        type:"STORIES_FETCH_SUCCESS",
        payload:result.hits,
    });     
 })
    .catch(()=>{
        dispatchstories({type:"STORIES_FETCH_FAILURE"});
    });
     
},[]);
 
const handleOnsearch=(e)=>{
          setsearchTerm(e.target.value)
     };

const onHandleDeleteItem =(item) => {
  dispatchStories({type:"REMOVE_STORY" ,payload:item});
};  

const filteredStories = stories.data.filter ((story) =>
        story.title.toLowerCase().includes (searchTerm.toLowerCase())
        );


        return (
            <div className={styles.container}>
             <InputWithLabel 
                id="search" 
                value={searchTerm}
                onInputChange={handleOnsearch}
                type="text"
            >
            <strong>Search For Stories</strong> 
            </InputWithLabel> 
            <h4>Searching for: {searchTerm} </h4> 
            {stories.isLoading ?(
                <p>Loading...</p>
            ) : (
            <List stories={filteredStories} handleDeleteItem={onHandleDeleteItem} />
            )} 
            {stories.isError &&<p> Something went wrong..  </p> }
            </div>
            );
}
export default App;

