let pokemonList = [
    {
        name: 'Sprigatito',
        height: 0.4,
        type: ['Grass']
    },

    {
        name: 'Fuecoco',
        height: 0.4,
        type: ['Fire']
    },

    {
        name: 'Quaxly',
        height: 0.5,
        type: ['Water']
    }

];

function myLoopFunction(list) {
    document.write(list.name + " - Height: " + list.height + "<br>");
}
pokemonList.forEach(myLoopFunction);
/* let pokemonList2 = [
    {
        name: 'Floragato',
        height: 0.9,
        type: ['Grass']
    },

    {
        name: 'Crocalor',
        height: 1.0,
        type: ['Fire']
    },

    {
        name: 'Quaxwell',
        height: 1.2,
        type: ['Water']
    }
];

function printArrayDetails(list){
    for (let i=0; i< list.length; i++){
        document.write("<p>"+ list[i].name + "</p>")
        console.log(list[i].name);
    }
}

printArrayDetails(pokemonList);
printArrayDetails(pokemonList2);

*/

/*
for (let i=0; i< pokemonList.length; i++){

    if (pokemonList[i].height >=0.5){
        document.write(pokemonList[i].name + " - Height: " + pokemonList[i].height + " - Wow, that's big!" + "<br>");

        console.log(pokemonList[i].name + " - Height: " + pokemonList[i].height + " - Wow, that's big!");

    } else {
        document.write(pokemonList[i].name + " - Height: " + pokemonList[i].height + "<br>") 

        console.log(pokemonList[i].name + " - Height: " + pokemonList[i].height + ")");
    
}
 } */