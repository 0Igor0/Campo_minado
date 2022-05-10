/*EXPLICANDO ARQUIVO:

Alerta.js: Nesse arquivo estão as funções 'venceu' e 'perdeu'.
'venceu' é somente chamada no index.js e 'perdeu' somente em funcoesVerifica.js*/


function venceu(){
    document.getElementById("popupSubDiv").style.background = "#0d0d0d"; //Cor do popup
    document.getElementById("popupSubDiv").style.background = "#0d0d0d"; //Cor do popup
    var bombaChorando=document.querySelector("#bomba_chorando")
    var bombaFeliz=document.querySelector("#bomba_feliz")
    document.getElementById("popupText").appendChild(bombaFeliz)
    bombaChorando.parentNode.removeChild(bombaChorando);
    document.getElementById("popupTitle").innerHTML = "Você Venceu"; //Título
    document.getElementById("btn1").innerHTML = "Jogar novamente";//Botão1
    document.getElementById("btn2").innerHTML = "Sair";//Botão2
    document.getElementById("popupDiv").style.display = "block";//Mostrando o Popup
}

function perdeu (){
    document.getElementById("popupSubDiv").style.background = "#0d0d0d"; //Cor do popup
    document.getElementById("popupSubDiv").style.background = "#0d0d0d"; //Cor do popup
    var bombaChorando=document.querySelector("#bomba_chorando")
    var bombaFeliz=document.querySelector("#bomba_feliz")
    bombaFeliz.parentNode.removeChild(bombaFeliz);
    document.getElementById("popupTitle").innerHTML = "Você Perdeu"; //Título
    document.getElementById("popupText").appendChild(bombaChorando)
    document.getElementById("btn1").innerHTML = "Jogar novamente";//Botão1
    document.getElementById("btn2").innerHTML = "Sair";//Botão2
    document.getElementById("popupDiv").style.display = "block";//Mostrando o Popup
}

