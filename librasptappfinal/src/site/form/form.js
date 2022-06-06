function aparecerOpcoes(num){
    switch (num){
        case 0:
            document.
        break;
    }
}

function criarCategoria(){
      
}

let buttonCategoria = document.getElementsByClassName('criarCategoria')[0];
buttonCategoria.addEventListener('click', criarCategoria)

let tipo;
let notpicked;
for(let i=0; i<10; i++ ){
  tipo= document.getElementsByClassName('Tipo')[i]
  tipo.addEventListener('click', (e) => {
      e.num = i //adicionando o num dele no objeto
     console.log(e)
       // e.returnValue=false;

  })
}