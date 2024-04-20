import React, { useState } from 'react'
import './App.css'

function App() {
  const [monsters, setMonsters] = useState([
    { name: 'Linda' },
    { name: 'Frank' },
    { name: 'Jacky' },
    { name: 'Andrei' }
  ]);


  return (
    <div className="App">
      {monsters.map((monster,index)=>{
        return <h1 key={index}>{monster.name}</h1>
      })}
    </div>
)
}

export default App
