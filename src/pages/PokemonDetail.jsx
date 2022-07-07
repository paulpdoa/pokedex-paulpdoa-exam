import axios from 'axios';
import { useContext,useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PokemonContext } from '../helpers/PokemonContext';

const PokemonDetail = () => {
    
    const { pokemonDetailUrl } = useContext(PokemonContext);
    const [pokemon,setPokemon] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        window.localStorage.setItem('pokemonUrl', pokemonDetailUrl);
        const abortCont = new AbortController();

        const fetchPokemonDetail = async () => {
            try {
                const data = await axios.get(pokemonDetailUrl,{ signal:abortCont.signal });
                setPokemon(data.data);
            }
            catch(err) {
                console.log(err);
            }
        }
        fetchPokemonDetail();

        return () => abortCont.abort();
    },[pokemonDetailUrl]);


  return (
    <div className="pokemon container">
        <button onClick={() => navigate(-1)} className="back_btn btn btn-secondary">&#60; Go Back</button>
        <h1 className="pokemon_title">Pokemon Detail</h1>
        <div className="pokemon_info">
            <img className="pokemon_img" src={ pokemon && pokemon.sprites.front_default} alt={ pokemon && pokemon.name } />
            <div className="pokemon_about">
                <h1 className="pokemon_name"><span>Name:</span> { pokemon && pokemon.name.slice(0,1).toUpperCase() + pokemon.name.slice(1,pokemon.name.length) }</h1>
                <h2 className="pokemon_type">Type: { pokemon && pokemon.types.map(type => type.type.name + " ") }</h2>
                <h2 className="pokemon_ability">Abilities: { pokemon && pokemon.abilities.map(ability => ability.ability.name + ", ") }</h2>
            </div>
        </div>
        <div className="pokemon_stats">
            <h1>Stats</h1>
            { pokemon && pokemon.stats.map(stat => (
                <div>
                    <span>{ stat.stat.name.toUpperCase() }:</span>
                    <span>{ stat.base_stat }</span>
                </div>   
            )) }
        </div>
    </div>
  )
}

export default PokemonDetail