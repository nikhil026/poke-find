import { useEffect, useState } from "react";
import { backendBaseUrl, specificPokemonUrl } from "../variables";
import usePokemonImage from "./pokemon-image";
import useFetch from "./useFetch";

const usePokemonDetails = ({ name, pokemonData }) => {
    const { data = pokemonData, error, isLoading } = useFetch({ url: `${specificPokemonUrl}/${name}`, isCache: true, cacheKey: name });
    const { data: abilitiesData } = useFetch({ url: `${backendBaseUrl}/abilities-color-map`, isCache: true, cacheKey: 'abilities-color' })
    const { imageUrl } = usePokemonImage({ id: data?.pokemon?.id });
    const [sprites, setSprites] = useState([]);

    useEffect(() => {
        if (data?.pokemon) {
            const spriteImages = Object.entries(data.pokemon.sprites || {})
                .filter(([, value]) => value && typeof value === 'string');
            setSprites(spriteImages)
        }
    }, [data]);


    
    return {
        ...data?.pokemon, error, isLoading, imageUrl, sprites, abilitiesColorMap: abilitiesData?.abilitiesColorMap
    };
};

export default usePokemonDetails;