import axios from 'axios';
import { useEffect,useState } from 'react';
import Card from '../components/Card';

const Pokemons = () => {

    const [endPoint,setEndPoint] = useState('https://pokeapi.co/api/v2/pokemon');
    const [pokemons,setPokemons] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        
        const fetchPokemons = async () => {
            try {
                const data = await axios.get(endPoint, { signal: abortCont.signal });
                setPokemons(data.data);
                console.log(data.data);
            }
            catch(err) {
                console.log(err);
            }
        }
        fetchPokemons();

        return () => abortCont.abort();
    },[endPoint])

  return (
    <div className="main">
        <div className="container">
            <div className="row">
                { pokemons && pokemons.results.map((pokemon,key) => (
                    <div className="col spacer" key={key}>
                        <Card 
                            name={pokemon.name}
                            url={pokemon.url}
                        />
                    </div>
                )) }
            </div>
        </div>
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                { pokemons && pokemons.previous !== null && <li className="page-item" onClick={() => setEndPoint(pokemons.previous)}><span className="page-link">Previous</span></li> }
                { pokemons && pokemons.next !== null && <li className="page-item" onClick={() => setEndPoint(pokemons.next)}><span className="page-link">Next</span></li> }
            </ul>
        </nav>
    </div>
  )
}

export default Pokemons