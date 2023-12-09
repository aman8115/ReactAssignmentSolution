import './App.css';
import Person from './Person';
import Button from './Button';
import Header  from './Header';
import List from './List';
function App() {
  
  
  return (
    <div>
      <Person
      name = " jhony dev "
      age = "24" >
      </Person>
      
      <Button text = " Learn React "
      onClick = {()=>{ console.log(" this is react project")}}
      >
       </Button>


      <Header
      text = " I am currntly working on React js fornt end library" >

      </Header>
      <List></List>
    
    </div>
  )
}