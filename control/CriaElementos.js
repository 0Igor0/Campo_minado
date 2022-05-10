/*EXPLICANDO ARQUIVO:

CriaElementos.js:
    Aqui a gente cria os elementos, na função criaElementos, criamos os quadrados do jogo, que são os campos, e no criar bomas criamos as bombas
*/

var elementoX=0
var CaixaElementoX=0
var divTeste=0
var Pdivcampo=[]
var copia_P=[]

function criarElementos(){
    var z=0
        while(z<4){
            bombas[z]= Math.floor(Math.random() * 63)
            z++
        }

        while(x<63){
            caixaCampo[x]=document.createElement("div")
            caixaCampo[x].classList.add("caixaCampo")
            CaixaElementoX=document.createElement("div")
            elementoX=document.createElement("p")
            CaixaElementoX.appendChild(elementoX)
            divCampo[x]=new campos(CaixaElementoX, x, false, true,false,0,false,false); //até agora esse elementoX é o divCampo[x].elemento html, e é uma div vazia
            caixaCampo[x].appendChild(divCampo[x].elementoHtml)
            AreaCampoMinado.appendChild(caixaCampo[x])
            divCampo[x].elementoHtml.textContent=divCampo[x].id +10;
            divCampo[x].elementoHtml.classList.add("campo")
            divCampo[x].elementoHtml.classList.add("fadeOut")
            copia_P[x]=document.createElement("p")
            Pdivcampo[x]=document.createElement("p")
            divCampo[x].elementoHtml.appendChild(copia_P[x])
            copia_P[x].textContent=divCampo[x].id
            copia_P[x].classList.add("invisivel")
            copia_P[x].classList.add("bombasProximas")
            verificaImpar(divCampo[x])  
            x++
        }

    }


function criarBombas(){
        var x=0 
        var y=0
        protegePrimeiroClique()
        
        
        while(x<63){
            if(divCampo[x].id==bombas[0]){             
                if(divCampo[x].bomba==true || divCampo[x].permissao==false){
                    bombas[0]+=7
                }
                if(divCampo[x].bomba==false){
                    divCampo[x]._bomba=true;
                    aBomba=divCampo[x]
                }
               
                y++
               a =  x
              }
        if(divCampo[x].id==bombas[1]){
            if(divCampo[x].bomba==true){
                bombas[1]+=1
            }
            if(divCampo[x].bomba==false){
                divCampo[x]._bomba=true;
                bBomba=divCampo[x]
            }
            b =  x
            y++
        }
  
        if(divCampo[x].id==bombas[2]){
            if(divCampo[x].bomba==true){
                bombas[2]+=1
            }
            if(divCampo[x].bomba==false){
                divCampo[x]._bomba=true
                cBomba=divCampo[x]
            }

            y++
            c =  x
        }
        if(divCampo[x].id==bombas[3]){
            if(divCampo[x].bomba==true){
                bombas[3]+=1
            }
            if(divCampo[x].bomba==false){
                divCampo[x]._bomba=true;
                 dBomba=divCampo[x]
            }
    
             d =  x
             y++
        }
       
          x++
        }
        var z=0
        while(z<63){
            
            if(divCampo[z].primeiroClique==true){
               divCampo[z]._bomba=false
            }
            z++
        }
}

           
