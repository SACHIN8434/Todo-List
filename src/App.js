import logo from './logo.svg';
import './App.css';
import AllTodo from "./components/AllTodo"
import AddTodo from "./components/AddTodo"

function App() {
  return (
    <div className="App">
    <AddTodo></AddTodo>
    <AllTodo></AllTodo>
    </div>
  );
}

export default App;
