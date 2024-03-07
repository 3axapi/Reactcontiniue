import { useState } from 'react'
import ProductList from './ProductList' 
import './App.css'

function App() {
  const [count, setCount] = useState(0) // DESTRUKTURYZACJA
  const [start, startUpdate] = useState(false)
  const [imie, setImie] = useState("")

  function startCounter() {
    startUpdate(true);
  }

  function increaseCount() {
    setCount(count + 1)
  }

  return (
    <>
      <h1>WELCOME TO APLICATION WITH COUNTER</h1>
      { !start && <button onClick={startCounter}>Uruchom licznik</button> }
      { start && <div>
          <button onClick={increaseCount}>Licz</button>
          <p>{imie}</p>
          <p>{count}</p>
          <p>wpisz swoje imię</p>
          <input
            type="text"
            value={imie}
            placeholder='wpisz swoje imię'
            onChange={(event) => setImie(event.target.value)}
          />
        </div>
      }
      {/* <h1>H1: LISTA PRODUKTÓW</h1>
      <ProductList
      nazwaProduktu="Super Zabawki"/> */}
    </>
  )
}

export default App;