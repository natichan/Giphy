const inputText = document.querySelector("input")
const containerImage = document.getElementById("img")


inputText.addEventListener("keypress", (event) => {
   let key = event.which || event.keyCode; 
   if (key === 13) {
       let search = inputText.value;
       inputText.value = ""; 
       fetch(`https://api.giphy.com/v1/gifs/search?api_key=0digIazhk4GYmGjbisFtCzQOEmm4wJzV&q=${search}&limit=25&offset=0&rating=G&lang=en`)
           .then(response => response.json())
           .then(data => {
               renderInfo(data);
           })
   }
})

    const renderInfo = data =>{
        data.data.forEach(element => {
        let img = element.images.downsized.url;
        containerImage.innerHTML += `<img src="${img}">`; 
        
        }); 
    }
    

