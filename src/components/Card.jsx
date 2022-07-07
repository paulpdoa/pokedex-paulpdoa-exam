import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { PokemonContext } from '../helpers/PokemonContext';

const Card = ({ name,url }) => {

  const { setPokemonDetailUrl } = useContext(PokemonContext);
  const navigate = useNavigate();


  // Set something in the local storage
  const initialPokemonValue = () => {
    setPokemonDetailUrl(url);
    navigate('/pokemon');
  }

  return (
    <div className="card" style={{width: "18rem"}}>
      <h1 className="card-title">{ name.slice(0,1).toUpperCase() + name.slice(1,name.length) }</h1>
      <button className="btn btn-primary btn-sm" onClick={initialPokemonValue} to='/pokemon'>View Detail</button>
    </div>
  )
}

export default Card