import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then(users => {
        //API'den gelen veriyi monsters state'ine ayarla
        setMonsters(users);
        // Konsola veriyi yazdır
        console.log('API verisi:', users);
      })
      .catch(error => {
        //Hata durumunda işlem yap
        console.error('Veri alınamadı: ', error);
      });
  }, []); //Bu effect sadece bir kez çalışacak, bileşen yüklendiğinde

  return (
    <div className="App">
      {monsters.map((monster, index) => {
        return <h1 key={index}>{monster.name}</h1>
      })}
    </div>
  )
}

export default App
