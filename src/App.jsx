import { useEffect, useState } from 'react'
import CharacterComponent from './Character'
import './App.css'
import './typography.css'

function App() {
  const [characters, setcharacters] = useState([])

useEffect (() => {
  fetch('https://hp-api.onrender.com/api/characters')
    .then((response)=> {
      return response.json()
    })
    .then((data)=> {
      console.log(data)
      setcharacters(data)
    })
 

}, [])  

  return (
    <div className="App">

      <header>
        <h1 className='titleHeader'>HARRY POTTER</h1>
        <h2 className='subtitle'>Characters</h2>  
        <h3 className='info'>IMPORTACE ORDER</h3>
      </header>
      <hr></hr>


    {characters.map((character) => {
      return<CharacterComponent key={character.id} {...character}></CharacterComponent>
    })}

    

   </div>
  )
}

export default App
