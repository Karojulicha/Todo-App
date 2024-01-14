import './App.css'
import { Header } from './Components/Header'
import TaskList from './Components/TaskList'

function App() {
  const list = [
    { id: '1', content: 'Buy groceries', completed: false },
    { id: '2', content: 'Clean the house', completed: true },
    { id: '3', content: 'Go for a run', completed: false },
    { id: '3', content: 'Go for a run', completed: false}
  ]

  return (
    <div className='App' >
      <Header/>
      <TaskList list= {list}/>
    </div>
  )
}

export default App
