import { useEffect, useState } from "react";
import axios from "axios";
import { Pokemom } from "../Components/Pokemon";

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon`);
  const [next, setNextData] = useState();
  const [previous, setPrevious] = useState();
  const [pokemonData ,setPokeminData] = useState([])

  const getPokemonData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setNextData(res.data.next);
      setPrevious(res.data.previous);
      setLoading(false);
      getPokemon(res.data.results);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPokemon = async (data) => {
    data.map(async (pokemon) => {
      const res = await axios.get(pokemon.url);
      setPokeminData(result =>{
         result = [...result, res.data]
        return result
      })
      
    });
  };
console.log(pokemonData,"All")
  
  useEffect(() => {
    getPokemonData();
  }, [url]);

  return (
    <>
     <div>
<Pokemom pokemonData={pokemonData} />
     </div>
    </>
  );
};
