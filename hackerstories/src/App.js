import List from "./List";
const stories=
[
    {
        title:'React',
        url:'https://reactjs.org/',
        author:'Jordan',
        num_Comment:3,
        point:4,
        object_id:0

    },
    {
        title:'Redux',
        url:'https://redux.js.org/',
        author:'Andrew',
        num_Comment:2,
        point:5,
        object_id:1

    },
]
function App() {
  return (
    <div>
      <h1>Stories</h1>
      <List stories={stories}></List>
    </div>
  );
}

export default App;