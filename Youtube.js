
let inputSearch = document.getElementById('search');

inputSearch.addEventListener('input', updateValue);

function updateValue(e) {
  let res = e.srcElement.value;
  console.log(res);
}