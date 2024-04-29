import React from "react";
import { backendStaticUrl } from "../variables";

const PokemonType = React.memo(({ typeName }) => {
    return (
        <div className="mr-5 bg-white rounded-lg px-2 py-1 text-white bg-slate-700 ability">
            <img className="inline" height={20} width={20} alt="" src={`${backendStaticUrl}/images/pokemon-types/${typeName}.png`} />
            <span className="capitalize ml-1">{typeName}</span>
        </div>
    )
});
export default PokemonType;