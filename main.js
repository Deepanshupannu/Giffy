const img = document.querySelector('img');
const searchbox=document.querySelector("#search")
function pagereload(){

  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=WHQbXetrA41lL1UxriYxa5wlZjcCXFdk&s=`+ searchbox.value, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    });
}
  const btn=document.querySelector('button')
  pagereload()
  btn.addEventListener("click",pagereload)