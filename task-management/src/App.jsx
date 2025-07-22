import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import TaskDetail from "./components/TaskDetail";
import TaskList from "./components/TaskList";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="" element={<TaskList/>}/>
        <Route path="/task/:id" element={<TaskDetail/>}/>
      </Routes>
    </Router>
  )
}

export default App;