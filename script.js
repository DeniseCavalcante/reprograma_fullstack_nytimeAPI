const btnBusca = document.getElementById("btn-busca");
btnBusca.addEventListener("click", trazResultadoDaBusca);
let listaGif = [];

function buscaGif(){
  return document.getElementById("campo-busca").value;
}

function erro(){
  console.log("erro");
}


function trazResultadoDaBusca(event){
event.preventDefault();
const respostaDaBusca = new XMLHttpRequest();
respostaDaBusca.open("GET", `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${buscaGif()}&api_key=6ce7400388ca45e7ab5834aac294ac73`)
respostaDaBusca.onload = carregaPostsComGifs;
respostaDaBusca.onerror = erro;
respostaDaBusca.send();
}




function carregaPostsComGifs(){
listaGif= JSON.parse(this.responseText)["response"]["docs"];
exibePosts();

}

function exibePosts(){
  let exibeBusca = document.getElementById("exibe-busca");
    exibeBusca.innerHTML = 
      `<div class="area-gif"> ${listaGif.map(gif => `
        <div class="gif">
          <p>${gif.headline.main}</p>
        </div>
        `).join("")}
      </div>`;

}
  


