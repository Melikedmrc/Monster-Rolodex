import React, { useEffect, useState } from 'react';

import CardListComponent from './components/cardList/CardListComponent';
import SearchBoxComponent from './components/searchBox/SearchBoxComponent';
import './App.css';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  // JSON
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        // API'den gelen veriyi monsters state'ine ayarla
        setMonsters(users);
        // Konsola veriyi yazdır
        console.log('API verisi:', users);
      })
      .catch(error => {
        // Hata durumunda işlem yap
        console.error('Veri alınamadı: ', error);
      });
  }, []); // Bu effect sadece bir kez çalışacak, bileşen yüklendiğinde

  // SEARCH FILTER
  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="App">
      <SearchBoxComponent onInputChange={handleSearchChange} />
      <CardListComponent monsters={filteredMonsters} />
    </div>
  );
}

export default App;
