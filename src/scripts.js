let pokemonRepository = (function () {
    let pokemonList = [];
    let printedList = document.querySelector('.pokemon-list');
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let inputField = document.querySelector('.search');
    let pokemonModal = document.querySelector('.modal-dialog');
  
    function add(pokemon) {
        pokemonList.push(pokemon);
     }

     function addKantoPokemon(pokemon) {
      loadDetails(pokemon).then(function () {
        let KantoPokemon = document.createElement('li');
        $(KantoPokemon).addClass('col');
  
        let button = document.createElement('button');
        let buttonText = document.createElement('h2');
        button.appendChild(buttonText);
        buttonText.innerText = pokemon.name;
        $(button).addClass('button-class');
        button.setAttribute('data-toggle', 'modal');
        button.setAttribute('data-target', '.modal');
  
        let pokemonImage = document.createElement('img');
        pokemonImage.src = pokemon.frontSprite;
        button.appendChild(pokemonImage);
  
        KantoPokemon.appendChild(button);
        printedList.appendChild(KantoPokemon);
        button.addEventListener('click', function () {
          showDetails(pokemon);
        });
      });
    }

    function loadList() {
  
      return fetch(apiUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          pokemonArray = json.results;
          pokemonArray.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url,
            };
            add(pokemon);
          });
        })
        .catch(function (e) {
          removeList();
          hideModal();
          showErrorMessage(
            "Error Loading Pokemon, please check your network connection and try again."
          );
          console.error(e);
        });
    }

function loadDetails(pokemon) {
  let url = pokemon.detailsUrl;
    return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (details) {
      // pokemon details below
      pokemon.frontSprite = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.types = details.types;

      let arrayOfTypes = [];
      details.types.forEach(function(item) {
        arrayOfTypes.push(item.type.name);
      });
      // Adding a separator for pokemon with multiple types or abilities
      pokemon.types = arrayOfTypes.join(' | ');

      let arrayOfAbilities = [];
      details.abilities.forEach(function (item) {
        arrayOfAbilities.push(item.ability.name);
      });
      pokemon.abilities = arrayOfAbilities.join(' | ');

      return pokemon;
    });
}

  

    function removeList() {
      printedList.innerHTML = '';
    }
  
    function hideModal() {
      $(pokemonModal).addClass('hidden');
    }
  
    function showErrorMessage(message) {
      let errorMessage = document.createElement('p');
      $(errorMessage).addClass('error-message');
      $(errorMessage).addClass('col-5');
      errorMessage.innerText = message;
      printedList.appendChild(errorMessage);
    }

    function getAll() {
      return pokemonList;
    }
  
    /* turn anything typed into the search bar or from api to lower case so searches are not case sensitive */
    function filterPokemon(query) {
      return pokemonList.filter(function (pokemon) {
        let pokemonLowerCase = pokemon.name.toLowerCase();
        let queryLowerCase = query.toLowerCase();
        return pokemonLowerCase.startsWith(queryLowerCase);
      });
    }
    /* search bar */
    inputField.addEventListener('input', function () {
      let query = inputField.value;
      let filteredList = filterPokemon(query);
      removeList();
      if (filteredList.length === 0) {
        showErrorMessage(
          'That Pokemon does not exist.'
        );
      } else {
        filteredList.forEach(addKantoPokemon);
      }
    });


  
    function showDetails(pokemon) {
      loadDetails(pokemon).then(function () {
        
        let modalTitle = document.querySelector('.modal-title');
        let modalBody = document.querySelector('.modal-body');
  
        // allows multiple modals to load and not crash or glitch
        modalTitle.innerHTML = '';
        modalBody.innerHTML = '';

        /* attaching detail elements + their css styles */

        let nameElement = document.querySelector('.modal-title');
        nameElement.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        let imageElementFront = document.createElement('img');
        $(imageElementFront).addClass('modal-img');
        imageElementFront.src = pokemon.frontSprite;
        let modalText = document.createElement('div');
        $(modalText).addClass('modal-text');
        let heightElement = document.createElement('p');
        heightElement.innerText = 'Height - ' + pokemon.height + 'M';
        let typesElement = document.createElement('p');
        typesElement.innerText = 'Types -  ' + pokemon.types;
        let abilitiesElement = document.createElement('p');
        abilitiesElement.innerText = 'Abilities - ' + pokemon.abilities;
        
        modalBody.appendChild(imageElementFront);
        modalBody.appendChild(modalText);
        modalText.appendChild(heightElement);
        modalText.appendChild(typesElement);
        modalText.appendChild(abilitiesElement);
      });
    }
  
    // Hide modal when esc is pressed
    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        hideModal();
      }
    });
  
    return {
      add: add,
      getAll: getAll,
      addKantoPokemon: addKantoPokemon,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails,
      filterPokemon: filterPokemon,
      removeList: removeList,
      hideModal: hideModal,
      showErrorMessage: showErrorMessage,
    };
  })();

  pokemonRepository.loadList().then(function () {
    function printList(pokemon) {
      pokemonRepository.addKantoPokemon(pokemon);
    }
  
    pokemonRepository.getAll().forEach(printList);
  });