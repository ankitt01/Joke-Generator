import { useState, useEffect } from 'react'

function useRandomJoke(f,s) {
  
  const [joke,setJoke] = useState('')

  useEffect(() => {
    const fetchJokes = async() => 
      await fetch(`http://api.icndb.com/jokes/random?firstName=${f}&lastName=${s}`)
      .then(res => res.json())
      .then(data => {
        setJoke(data.value.joke);
      })

      fetchJokes()
  },[f,s])
  

    return joke;
}

export default useRandomJoke;

