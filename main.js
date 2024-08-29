const img = document.querySelector('img');
const btn=document.querySelector('button')
const searchbox=document.querySelector("#search")
function pagereload(){

  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=WHQbXetrA41lL1UxriYxa5wlZjcCXFdk&s=`+ searchbox.value, {mode: 'cors'})
    .then(function(response) {
      if(!response.ok){
        throw new Error("Network was not ok")
      }
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    })
    .catch((error)=>{
      console.error("There is problem with fetch opertion:",error)
    }
    );
}
pagereload()
btn.addEventListener("click",pagereload)