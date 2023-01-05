let pokemonRepository = (function () {

    let pokemonList = [];
       /*  -- OLD ARRAY OBJECT LISTING --
       
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
        },

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
    */
    function add (pokemon) {
        pokemonList.push(pokemon);
    }
    function getAll () {
        return pokemonList;
    }
    return {
        getAll: getAll,
        add: add
    }
})();

pokemonRepository.add({ name: 'Sprigatito', height: 0.4, type: ['Grass'] });
pokemonRepository.add({ name: 'Fuecoco', height: 0.4, type: ['Fire'] });
pokemonRepository.add({ name: 'Quaxly', height: 0.5, type: ['Water'] });
pokemonRepository.add({ name: 'Floragato', height: 0.9, type: ['Grass'] });
pokemonRepository.add({ name: 'Crocalor', height: 1.0, type: ['Fire'] });
pokemonRepository.add({ name: 'Quaxwell', height: 1.2, type: ['Water'] });

let pokemonList = pokemonRepository.getAll();

pokemonList.forEach(printDetails);
function printDetails (pokemon) {
	let highlight = '';
	if (pokemon.height >= 1.0) {
		highlight = " - Wow, that’s big!";
	} 
	document.write(`<li>${pokemon.name} (height: ${pokemon.height}) ${highlight}</li>`);
}

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