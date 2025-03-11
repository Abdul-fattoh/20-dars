async function name() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20`)
    const data = await response.json()
    const results = await data.results
    const pokemonList = document.querySelector("#pokemonList")
    
    for (let i = 0; i < results.length; i++) {
        const response2 = await fetch(`${results[i].url}`)
        const data2 = await response2.json()

        pokemonList.insertAdjacentHTML("beforeend",    `<div>
                                                            <img class="pokemonImg" src="${data2.sprites.front_default}" alt="">
                                                            <h2>${results[i].name}</h2>
                                                        </div>`)
    }
}

name()