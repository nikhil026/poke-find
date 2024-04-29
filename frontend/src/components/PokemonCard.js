import usePokemonCard from "../hooks/pokemon-card";
import usePokemonImage from "../hooks/pokemon-image";
import { Link } from "react-router-dom";


const PokemonCard = ({ id, name, url }) => {
    const { data } = usePokemonCard({ id, name, url });
    const { imageUrl } = usePokemonImage({ id });

    return <div className="card rounded mt-48">
        <h4 className="capitalize text-[250px] absolute left-0 top-56 -z-10"> {name} </h4>
        <Link to={`/pokemon/${name}`} state={data} >
            <img alt={name} src={imageUrl} className="z-40" />
        </Link>
    </div>
}

export default PokemonCard;