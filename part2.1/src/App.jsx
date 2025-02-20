const Hello = (props) => {

  return(
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old!
      </p>
    </div>
  )

}


function App() {
  const name = 'Peter';
  const age = 27;

  return (
    <div>
      <h1>Greatings!!</h1>
      <Hello name='Maria' age={10 + 20}/>
      <Hello name={name} age={age}/>
    </div>
  )
}

export default App
