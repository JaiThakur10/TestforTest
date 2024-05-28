// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        const promises = response.data.results.map(async (result) => {
          const pokemon = await axios.get(result.url);
          return pokemon.data;
        });
        const results = await Promise.all(promises);
        setPokemons(results);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchPokemons();
  }, []);

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <h1 className="text-5xl font-bold text-center text-white mb-8">Pokémon Search</h1>
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg shadow-lg"
          placeholder="Search for a Pokémon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default App;




