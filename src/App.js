import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './store/index';
function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const increment = () => {
    dispatch(actions.increment())
  }
  const decrement = () => {
    dispatch(actions.decrement())
  }
  const addBy = () => {
    dispatch(actions.addBy(10))
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
