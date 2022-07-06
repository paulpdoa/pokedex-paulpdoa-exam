import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Pokemons from './pages/Pokemons';
import PokemonDetail from './pages/PokemonDetail';
import { PokemonContext } from './helpers/PokemonContext';

function App() {

  const [pokemonDetailUrl,setPokemonDetailUrl] = useState(window.localStorage.getItem('pokemonUrl'));

  return (
    <PokemonContext.Provider value={{ pokemonDetailUrl,setPokemonDetailUrl }}>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Pokemons /> }/>
        <Route path='/pokemon' element={ <PokemonDetail /> } />
      </Routes>
    </PokemonContext.Provider>
  );
}

export default App;
