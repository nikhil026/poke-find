import express from 'express';
const router = express.Router();
import axios from 'axios';

const basePokemonUrl = 'https://pokeapi.co/api/v2/';

// API For fetching all pokemons with limit and offset params
router.get('/pokemons', async (req, res) => {
    const { limit = 106, offset = 0 } = req.query;
    try {
        const pokemonUrl = `${basePokemonUrl}pokemon?limit=${limit}&offset=${offset}`;
        const response = await axios.get(pokemonUrl);

        return res.status(200).json({ pokemons: response.data.results })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }

});

// API for fetching specific pokemon with ID
router.get('/pokemon/:pokemonId', async (req, res) => {
    const pokemonUrl = `${basePokemonUrl}pokemon/${req.params.pokemonId}`;
    try {
        const response = await axios.get(pokemonUrl);
        return res.status(200).json({ pokemon: response.data })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
});


// API to get respective ability-color mapping
router.get('/abilities-color-map', async (req, res) => {
    return res.status(200).json({
        abilitiesColorMap: {
            'grass': 'green',
            'poison': 'red'
        }
    })
});


router.get('/pokemon/ability/:abilityId', async (req, res) => {
    const pokemonAbilityUrl = `${basePokemonUrl}/ability/${req.params.abilityId}`;
    try {
        const response = await axios.get(pokemonAbilityUrl);
        return res.status(200).json({ ability: response.data })
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
})


export default router;