import React from "react";

const PokemonStripe = React.memo(({ value, imageType, pokemonName }) => (
    <img className="sprite-image" src={value} alt={`${imageType} ${pokemonName}`} />
));

export default PokemonStripe;