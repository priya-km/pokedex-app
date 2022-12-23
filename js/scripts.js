let pokemonList = [
    {
        name: 'Fuecoco',
        height: 0.4,
        type: ['Fire']
    },

    {
        name: 'Quaxly',
        height: 0.5,
        type: ['Water']
    },

    {
        name: 'Sprigatito',
        height: 0.4,
        type: ['Grass']
    }

];

for (let i=0; i< pokemonList.length; i++){

    if (pokemonList[i].height >=0.5){
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") - Wow, that's big!");

    }
} else {
  document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")");
}
