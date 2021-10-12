import {useState, useRef} from 'react';

import useRandomJoke from './Components/Joke'

function App() {
  const firstNameRef = useRef(null)
  const secondNameRef = useRef(null)

  const [firstName, setFirstName] = useState('Mr.X')
  const [secondName, setSecondName] = useState('Y')
  const joke = useRandomJoke(firstName, secondName);


  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value)
    setSecondName(secondNameRef.current.value)
  }
    return ( 
      <>
        <h1>{joke}</h1>

        <form>
          <input type="text" placeholder="FirstName" ref={firstNameRef} />
          <input type="text" placeholder="LastName" ref={secondNameRef} />
          <button onClick={generateJoke}>Generate Joke</button>
        </form>
      </>
    );  
}

export default App;

