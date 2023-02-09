import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { IncNumber ,DecNumber } from './action';

function App() {
  const mystate=useSelector((state)=>state.ChangeTheNumber);
  const Dispatch=useDispatch()
  return (
    
    <div className="App">
      <h1>Increment and Decrement using React Redux</h1>
      <div className='quantity'>
        <button><a className='decrement-quantity' onClick={()=>Dispatch(DecNumber())}><span>-</span></a></button>
        <input name='quantity' type ='number' className='quantity-input' value={mystate}></input>
        <button>
        <a className='decrement-quantity' onClick={()=>Dispatch(IncNumber())}><span>+</span></a>
        </button>
      </div>
    </div>
  );
}

export default App;
