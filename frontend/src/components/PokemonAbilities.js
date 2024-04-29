import { useState } from "react";
import { backendBaseUrl } from "../variables";
import Loader from "./global/Loader";

const PokemonAbility = ({ ability, is_hidden }) => {
    const [abilityData, setAbilityData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleAbilityClick = () => {
        const abilityId = ability.url.split('/')[6];
        setIsLoading(true)
        fetch(`${backendBaseUrl}/pokemon/ability/${abilityId}`).then(data => data.json()).then(resp => {
            console.log('resp', resp)
            setAbilityData(resp.ability)
            setIsLoading(false)

        }).catch(e => {
            setIsLoading(false)
        })
        console.log('abilityId', abilityId)
    }

    return (
        <div>
            <button key={ability.name}
                className="text-lg block font-bold capitalize"
                disabled={abilityData}
                onClick={handleAbilityClick}>
                &rarr; {ability.name}
            </button>
            {isLoading && <Loader isSmall />}
            {abilityData && abilityData.effect_entries[0].short_effect}
        </div>
    )
}

const PokemonAbilities = ({ abilities = [] }) => {


    return (
        <div className="abilities-wrapper">
            <h3 className="text-4xl font-thin">Abilities</h3>
            {
                abilities.map(({ ability, is_hidden }) => <PokemonAbility ability={ability} is_hidden={is_hidden} />)
            }


        </div >
    )
};

export default PokemonAbilities;