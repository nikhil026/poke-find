import { ReactSearchAutocomplete } from 'react-search-autocomplete'
const PokemonSearch = ({ pokemons, setPokemonSelected }) => {
    const items = pokemons.map(({ url, name }) => ({ url, name, id: url.split('/')[6] }))

    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
    }

    const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
    }

    const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
        setPokemonSelected(item)
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }

    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
            </>
        )
    }
    const handleOnClear = () => {
        setPokemonSelected(null)
    }
    return (

        <div style={{ width: 400 }}>
            <ReactSearchAutocomplete
                placeholder='Type your favourite pokemon '
                items={items}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                autoFocus
                formatResult={formatResult}
                onClear={handleOnClear}
            />
        </div>


    )
}

export default PokemonSearch;