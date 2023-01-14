let pokemonRepository = (function() {

    let pokemonList = [];

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log("Fields are empty or incorrect.");
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
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener("click", function (event) {
            showDetails(pokemon);
        });
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
            console.log(pokemon)
          });
        }).catch(function (e) {
          console.error(e);
        })
      }

      function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          // item details below
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
          console.error(e);
        });
      }

      function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function() {
            console.log(item);
        });
      }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    }
})();

pokemonRepository.loadList().then(function() {
    // Now data is loaded
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
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