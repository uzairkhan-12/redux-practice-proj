import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const increment = () => {
    dispatch({type:'INC'})
  }
  const decrement = () => {
    dispatch({type:'DEC'})
  }
  const addBy = () => {
    dispatch({type:'ADD',payload:300})
  }
  return (
    <div className="App">
    <h1>Counter App</h1>
    <p>{counter}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={addBy}>Add Value</button>
    </div>
  );
}

export default App;
