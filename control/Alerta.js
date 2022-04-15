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


var bombasPertoArray=[]
var camposProibidos=[]

var camposBeiradaDireita=[8,17,26,35,44,53,62]
var camposBeiradaEsquerda=[0,9,18,27,36,45,54]