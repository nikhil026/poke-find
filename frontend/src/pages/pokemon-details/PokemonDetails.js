import { useParams } from "react-router-dom";
import usePokemonDetails from "../../hooks/pokemon-details";
import Loader from "../../components/global/Loader";
import PokemonAbilities from "../../components/PokemonAbilities";
import React from "react";
import PokemonType from "../../components/PokemonType";
import PokemonStripe from "../../components/PokemonStripe";


const PokemonDetails = ({ pokemonData = {} }) => {
    const { pokemonName } = useParams();
    const { isLoading, imageUrl, sprites, abilities, types = [], stats = [], weight, height, id } = usePokemonDetails({ name: pokemonName, pokemonData });
    return <div className="card-wrapper w-2/3 center m-auto mt-30 shadow-2xl shadow-inner p-2 rounded relative">
        {isLoading && <Loader />}
        <div className="text-[600px] absolute center -top-40 right-[400px] opacity-20 z-30">{id}</div>
        <div className="flex justify-around">
            <div className="z-40">
                <div>
                    <img alt={pokemonName} src={imageUrl} />
                </div>
                <div className="flex">
                    {types.map(({ type }) => <PokemonType typeName={type.name} />)}
                </div>

                <div className="sprites-top flex">
                    {sprites.map(([key, value]) => (<PokemonStripe imageType={key} value={value} pokemonName={pokemonName} />))}
                </div>
                <PokemonAbilities abilities={abilities} />
            </div>
            <div className="mt-20">
                <h1 className="capitalize text-4xl mb-10">{pokemonName}</h1>
                <h3 className="text-lg">Weight: {weight / 10} kg</h3>
                <h3 className="text-lg mb-5">Height: {height / 10} m</h3>
                {
                    stats.map(({ stat, base_stat }) => {
                        return (
                            <div className="capitalize text-xl mt-4">
                                {stat.name} - {base_stat}
                            </div>
                        )
                    })
                }

            </div>
        </div>
    </div>
}

export default PokemonDetails;