import {useState} from 'react';

const Display = (props) => {
  return(
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}



function App() {
  
  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value ', counter );
  

  const increaseByOne = () => {
    console.log('increasing counter by one value before', counter);
    
    setCounter(counter + 1)
  }
  const decreaseByOne = () => {
    console.log('decreasing counter by one value before', counter);
    
    setCounter(counter - 1)
  }
  const resetCounter = () => {
    console.log('resetting to zero de value before', counter);
    
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={increaseByOne} text='plus'/>
      <Button onClick={resetCounter} text='zero'/>
      <Button onClick={decreaseByOne} text='minus'/>
    </div>
  )
}

export default App
