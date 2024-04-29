import { useState } from "react";
import PokemonCard from "../../components/PokemonCard";
import PokemonSearch from "../../components/PokemonSearch";
import Loader from "../../components/global/Loader";
import useFetch from "../../hooks/useFetch";
import { allPokemonUrl } from "../../variables";

const Home = () => {
    const { data = {}, isLoading } = useFetch({ url: allPokemonUrl, isCache: true, cacheKey: 'pokemons' });
    const { pokemons = [] } = data || {};

    const [pokemonSelected, setPokemonSelected] = useState(null);



    return (
        <div className="App">
            <header className="App-header relative">
                <h1 className="top-5 text-4xl left-20 bold">PokeFind</h1>
                {isLoading ? <Loader /> :
                    (
                        <PokemonSearch
                            setPokemonSelected={setPokemonSelected}
                            pokemons={pokemons} />
                    )}

                {pokemonSelected && <PokemonCard {...pokemonSelected} />}
            </header>
        </div>)

}

export default Home;