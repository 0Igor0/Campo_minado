var bombas=[]
var y=0
var divCampo=[];
var camposIniciais=[]

function sair(){
    close();
}
function jogarNovamente(){
    document.location.reload(true);
}



function verificaBomba(valor){
    
    if(valor._bomba==false){
          valor.elementoHtml.style.backgroundColor = "#daccb1";
          if(valor._impar==true){
             valor.elementoHtml.style.backgroundColor = "#aca18d";
         }
 
     }
     else{
        perdeu()
         
     }
 } 

 