import Animal from './components/Animal'; 
import './App.css';

function App() {
  let dataArr = [
    {id: 1, name: 'Ed', location:'Lake'},
    {id: 2, name: 'John', location:'Water'},
  ]
  
  let listItem = dataArr.map((val)=>{
return (
  <li key={val.id}>Name:{val.name}
      Location: {val.location}
  </li>
)
  })

  return (
    <div className="App">
      {/* <ul>{listItem}</ul> */}
       <Animal/>
    </div>
  );
}

export default App;
