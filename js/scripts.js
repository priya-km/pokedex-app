let pokemonRepository = (function() {

    let pokemonList = [
       
       {
            id: "1",
            name: 'Sprigatito',
            height: 0.4,
            type: ['Grass']
        },

        {
            id: "2",
            name: 'Fuecoco',
            height: 0.4,
            type: ['Fire']
        },

        {
            id: "3",
            name: 'Quaxly',
            height: 0.5,
            type: ['Water']
        },

        {
            id: "4",
            name: 'Floragato',
            height: 0.9,
            type: ['Grass']
        },
    
        {
            id: "5",
            name: 'Crocalor',
            height: 1.0,
            type: ['Fire']
        },
    
        {
            id: "6",
            name: 'Quaxwell',
            height: 1.2,
            type: ['Water']
        }
    ]

    function add (pokemon) {
        if(typeof pokemon === "object" &&
        Object.keys(pokemon).includes("id") &&
        Object.keys(pokemon).includes("name") &&
        Object.keys(pokemon).includes("height") &&
        Object.keys(pokemon).includes("type")) {
            pokemon.List.push(pokemon);
        } else {
            alert("Fields are empty or incorrect.");
        }
    }
    function getAll () {
        return pokemonList;
    }
    function addListItem(pokemon){
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        button.addEventListener("click", (Event) => showDetails(pokemon));
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
    }
    function showDetails(pokemon) {
        console.log(pokemon);
    }
    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem
    }
})();

console.log(pokemonRepository.getAll());
pokemonRepository.getAll().forEach(function (pokemon){
    pokemonRepository.addListItem(pokemon);
});


/* 
    --- OLD FOR EACH CODE BEFORE IIFE IMPLEMENTATION ---
function myLoopFunction(list) {
    document.write(list.name + " - Height: " + list.height + "<br>");
}
pokemonList.forEach(myLoopFunction);
    --- POKEMONLIST2 ENTRIES + printArrayDetails function + OLD for loop code below ---

let pokemonList2 = [
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

    --- OLD FOR LOOP CODE ---
for (let i=0; i< pokemonList.length; i++){

    if (pokemonList[i].height >=0.5){
        document.write(pokemonList[i].name + " - Height: " + pokemonList[i].height + " - Wow, that's big!" + "<br>");

        console.log(pokemonList[i].name + " - Height: " + pokemonList[i].height + " - Wow, that's big!");

    } else {
        document.write(pokemonList[i].name + " - Height: " + pokemonList[i].height + "<br>") 

        console.log(pokemonList[i].name + " - Height: " + pokemonList[i].height + ")");
    
}
 } */