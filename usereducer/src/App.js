// eslint-disable-next-line
// import logo from './logo.svg';
import { useReducer} from 'react'
import './App.css';

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

function App() {
  // const recuderfunc = (state, value)=>{
  //   // console.log(`ha ha dikh rha hain, antenna pakde rahiye`, value, state.initialNum)
  //   return {...state, count: state.counter+1}
  // }
  // // const [ counter, setcounter] = useState(0)
  // // const counter = 0;
  const counterReducer = (acc, dispatchValue)=> {
    // console.log(acc, dispatchValue)
    switch(dispatchValue.type){
      case INCREMENT:
        return {...acc, counter:acc.counter+1}
      case DECREMENT:
        return {...acc, counter:acc.counter-1}
      default:
        console.log("code Broke")
        break
    }
    return state;
  }
  const [ state, dispatch] = useReducer(counterReducer,{ counter: 0})
  return (
    <div className="App">
      <h1>Counter</h1>
      <div>Count: {state.counter}</div>
      <button onClick={()=> dispatch({type: INCREMENT})}> + </button>
      <button onClick={()=> dispatch({type: DECREMENT})}> - </button>
    </div>
  );
}

export default App;
