let inputSearch = document.getElementById('search');

// addEventListener(tipo de cambio que quieres escuchar, funcion que quieres ejecutar)
inputSearch.addEventListener('input', updateValueInputHomePage);

//event es el cambio que recibe del addEventListener
function updateValueInputHomePage(event) {
  let eventoRecibido = event.srcElement.value;
  console.log(eventoRecibido);
}

// Llamamos a la lupa, a su div
let lupa = document.getElementById('lupe');

lupa.addEventListener('click', lupeClick);

function lupeClick () {
  //inicializamos la variable text y le asignamos el valor del input
  let text = inputSearch.value;
  // consologgeamos el text para ver que valor tiene, en tagged templates (estudiar)
  console.log(`Hola, lo que escribiste fue: ${text}`);
  //Renderizar el valor del input en un h1 en el html
  let textHTML = document.getElementById('text-inner');
  // imprimir el valor en el h1
  textHTML.innerHTML = text
}

//llamar boton que puede borrar
let deleteButton = document.getElementById('delete-button')

// escuchar al boton
deleteButton.addEventListener('click', deleteButtonClick);

//funcion
function deleteButtonClick () {
  //llamar al h1 del html
  let textHTML2 = document.getElementById('text-inner')
  // borrar el texto del h1, y asignarlo vacio
  textHTML2.innerHTML = ''
  // cogemos el boton y le quitamos la clase que tiene actualmente
  deleteButton.classList.remove('delete-button-class')
  // le asignamos una nueva clase
  deleteButton.classList.add('delete-button-class2')
}