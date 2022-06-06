import React from "react";
import "./home.css";
import HeaderOne from '../header/header.js'
function Home(){
return(
    <div id='Home'>
<HeaderOne login={false}></HeaderOne>
<br/><br/><br/>
<div className='topic'>

         <h1>Crie questões para o LibrasPTB!</h1>

         <h2>O aplicativo de reforço para o ensino da Língua Portuguesa nas modalidades escrita e leitura para alunos surdos</h2>
        </div>
        <br/><br/><br/>
        <div className='topic'>
        <h1>Tipos de Questões Disponíveis</h1>

        
             
         <ul>
             <li>Associar colunas</li>
             <li>Ordenar palavras de uma frase</li>
             <li>Digitar palavra da imagem</li>
             <li>Digitar palavra do vídeo</li>
             <li>Digitar frase de um vídeo em libras</li>
             <li>Preencher lacuna da frase digitando</li>
             <li>Preencher lacuna da frase com alternativa</li>
             <li>Marcar alternativa da  palavra do vídeo</li>
             <li>Marcar alternativa da  palavra da imagem</li>
             <li>Marcar alternativa da frase</li>
         </ul>
  
        </div>
    </div>
)
}

export default Home;