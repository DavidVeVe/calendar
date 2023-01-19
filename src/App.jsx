import Calendar from "./calendar";
import './App.css'

function App() {

  return (
    <div className="App" >
      <Calendar date={new Date()} />
    </div>
  )
}


export default App
