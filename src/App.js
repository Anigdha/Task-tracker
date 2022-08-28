import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

function App() {
  // const name ='brad'
  // const x= false

  const [tasks,setTasks] = useState([
    {
        id : 1,
        text : 'Doctor appointment',
        day : 'feb 5 at 2:30 pm',
        reminder : true
    },
    {
      id : 2,
      text : 'Meeting at school',
      day : 'feb 7 at 1:30 pm',
      reminder : true
    },
    {
      id : 3,
      text : 'Food shopping',
      day : 'feb 5 at 2:30 pm',
      reminder : false
    }
  ])

  return (
    <div className = 'container'>
      {/* <h1>
        hello from react
      </h1>
      <h2>hello {name}</h2>
      <h2>hello {x ? 'yes' : 'no'}</h2> */}

      <Header />
      <Tasks tasks = {tasks} />
    </div>
  );
}

export default App;
