let pokemonRepository = (function() {

    let pokemonList = [];

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
       pokemonList.push(pokemon);
    }
    function addListItem(pokemon){
        let pokemonList = document.querySelector(".pokemon-list");
        let pokemonItem = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        button.addEventListener('click', Event => showDetails(pokemon));
        pokemonItem.appendChild(button);
        pokemonList.appendChild(pokemonItem);
    }

    function getAll () {
      return pokemonList;
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
          console.log(e);
        });
      }


      // show pokemon details modal
      function showModal(title, text, img) {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.innerHTML = '';

        let modal = document.createElement('div');
        modal.classList.add('modal');
  

        // hide modal when user clicks close

        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innterText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);

        // h1 element in modal
        let titleElement = document.createElement('h1');
        titleElement.innerText = title;

        // p element in modal
        let contentElement = document.createElement('p');
        contentElement.innerText = text;

        // img element (pokemon sprite) in modal
        let imageElement = document.createElement('img');
        imageElement.setAttribute("src", img);
        imageElement.setAttribute("alt", "Pokemon Sprite");

        // Create above modal elements

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modal.appendChild(imageElement);
        modalContainer.appendChild(modal);

        modalContainer.classList.add('is-visible');

        // hides modal when user clicks outside of the modal

        modalContainer.addEventListener('click', (e) => {
          let target = e.target;
          if (target === modalContainer) {
            hideModal();
          }
        });
      }

      
      function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
          showModal(pokemon.name, pokemon.name + "'s height is: " + pokemon.height, pokemon.imageUrl);
        });
      }

      function hideModal() {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.remove('is-visible');
      }

      // hides modal when user clicks esc

      window.addEventListener('keydown', (e) => {
        let modalContainer = document.querySelector('#modal-continer');
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
          hideModal();
        }
      });

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
    //  go to pokemonRepository and return pokemon list
    pokemonRepository.getAll().forEach(function printDetails(pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
});