//"http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=0digIazhk4GYmGjbisFtCzQOEmm4wJzV&limit=5"
const inputText = document.querySelector("input")
const containerImage = document.getElementById("img")


inputText.addEventListener("keypress", (event) => {
    //ejecutamos una función con el elemento para llamarlo después
   /* wich (le digo la tecla) y keyCode(le digo el código de la tecla) son eventos del teclado, 
   con el código de abajo después le designamos el código de la tecla(13) 
   para que sepa cuál es la tecla*/
   let key = event.which || event.keyCode; //le di una condición de que se cumpla uno o(||) el otro
   // 13 es enter, es su código del teclado
   if (key === 13) {
       let search = inputText.value;//rescatamos valores con .value
       //cuando aprieto enter le digo que me rescate el valor del input
       console.log(search)
       inputText.value = ""; //para limpiar el input

       fetch(`https://api.giphy.com/v1/gifs/search?api_key=0digIazhk4GYmGjbisFtCzQOEmm4wJzV&q=${search}&limit=25&offset=0&rating=G&lang=en`)
           .then(response => response.json())
           .then(data => {
               console.log(data);
               renderInfo(data);
           })
   }
})

const renderInfo = data => {
    containerImage.innerHTML = `<img src="${data.data.images.downsized_large.url}">` 
    /*escribo la etiqueta imagen para que el HTML la lea, genero el source 
    (donde la traigo por ejemplo data.Poster que contiene la imagen en el objeto de la API)*/
    })
    
   }