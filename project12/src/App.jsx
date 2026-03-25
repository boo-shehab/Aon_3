import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const [oneItem, setOneItem] = useState('')
  const [items, setItems] = useState([]);
  return (
    <>
      <input type="text" value={oneItem} onChange={(e) => setOneItem(e.target.value)} />
      <button onClick={() => {
        setItems([...items, oneItem])
        console.log(items)
      }}>add</button>
      {items.map((item, i) => (
        <NavBar key={i} text={item} />
      ))}
    </>
  )
}

export default App
