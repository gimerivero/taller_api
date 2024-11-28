// URL de la API de Pokémon para obtener los datos de "Pikachu"
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/pikachu';

// Hacer la solicitud GET utilizando fetch
fetch(apiUrl)
  .then(response => {
    // Verificar si la respuesta fue exitosa (código 200)
    if (!response.ok) {
      throw new Error('Error en la solicitud: ' + response.status);
    }
    return response.json(); // Parsear la respuesta como JSON
  })
  .then(data => {
    // Aquí llamamos a la función para mostrar los datos del Pokémon en el HTML
    mostrarPokemon(data);
  })
  .catch(error => {
    // Manejo de errores
    console.error('Hubo un problema con la solicitud:', error);
  });

// Función para mostrar la información del Pokémon en el HTML
function mostrarPokemon(pokemon) {
  const contenedor = document.getElementById('pokemon-info'); // Contenedor donde se mostrarán los datos
  
  // Crear un contenedor para mostrar el nombre y la imagen del Pokémon
  const nombre = document.createElement('h2');
  nombre.textContent = `Nombre: ${pokemon.name}`;

  const imagen = document.createElement('img');
  imagen.src = pokemon.sprites.front_default; // Usamos la imagen frontal de Pikachu
  imagen.alt = pokemon.name;
  imagen.width = 150;

  const habilidades = document.createElement('p');
  habilidades.textContent = `Habilidades: ${pokemon.abilities.map(ability => ability.ability.name).join(', ')}`;

  // Agregar los elementos creados al contenedor principal
  contenedor.appendChild(nombre);
  contenedor.appendChild(imagen);
  contenedor.appendChild(habilidades);
}
