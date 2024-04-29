import { specificPokemonUrl } from "../variables";
import useFetch from "./useFetch";

const usePokemonCard = ({ name, id }) => {
    const { data, error, isLoading } = useFetch({ url: `${specificPokemonUrl}/${name}`, isCache: true, cacheKey: name });

    return {
        data, error, isLoading
    };
};

export default usePokemonCard;