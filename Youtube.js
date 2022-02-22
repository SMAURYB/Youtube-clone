const VideoCardContainer = document.querySelector('.video-container');

let api_key = "AIzaSyCISPPy7vagmo7ZSaYdMdXpPnfatzRLcJQ";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";
/*use fetch function to make request*/
/*ser param to mostPopular, to fetch popular videos*/ 
fetch(video_http + new URLSearchParams({
  key: api_key,
  part: 'snippet',
  chart: 'mostPopular',
  maxResults: 50, /*it should be maxResults with "s" 
 
  regionCode: 'CO'
  /*regionCode is to specify from which region we
   are fetching data*/
}))
.then(res => res.json())
.then(data => {
// console.log(data);
//Now we need also the Channel Icon Image and we will do it separately//
  data.items.forEach(item => {
    getChannelIcon(item);
  })
})
//use catch block to handle error also//
.catch(err => console.log(err));

const getChannelIcon = (video_data) => {
  fetch(channel_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    id: video_data.snippet.channelId
  }))
  .then(res => res.json())
  .then(data => {
    // console.log(data);
    // Make new key "channelThumbnail" 
    // and store channel icon url there
    video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
    console.log(video_data);
    makeVideoCard(video_data);
  })
}
// Now we just have to create a card

const makeVideoCard = (data) => {
  //*Use inner method to attach HTML Element*//
  VideoCardContainer.innerHTML += `   
  <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
      <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
      <div class="content">
          <img src="${data.channelThumbnail}" class="channel-icon" >
          <div class="info">
              <h4 class="title">${data.snippet.title}</h4>
              <p class="channel-name"${data.snippet.channelTitle}></p>
              </div>
      </div>
  </div>
  `;
}

// Search bar
let searchInput = document.getElementById('search');
let searchBtn = document.querySelector('.search-btn');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
  if(searchInput.value.length){
    location.href = searchLink + searchInput.value;
  }
})

// let inputSearch = document.getElementById('search');
// //se designa una variable a la que se le asigna el valor del elemento 'search' por el id
// //addEventListener(tipo de cambio que quieres escuchar, funcion que quieres ejecutar)
// inputSearch.addEventListener('input', updateValueInputHomePage);

// // //event es el cambio que recibe del addEventListener
// function updateValueInputHomePage(event) {
//    let eventoRecibido = event.srcElement.value;
//    console.log(eventoRecibido);
// }


// // Llamamos a la lupa, a su div
// let lupa = document.getElementById('lupe');

// lupa.addEventListener('click', lupeClick);

/*function lupeClick () {
  //inicializamos la variable text y le asignamos el valor del input
  let text = inputSearch.value;
  // consologgeamos el text para ver que valor tiene, en tagged templates (estudiar)
  console.log(`Hola, lo que escribiste fue: ${text}`);
  //Renderizar el valor del input en un h1 en el html
  let textHTML = document.getElementById('text-inner');
  // imprimir el valor en el h1
  textHTML.innerHTML = text
}
/*
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
*/