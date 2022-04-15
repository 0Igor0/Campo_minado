
function primeiroClique(primeiroCampo,primeiroCampoSemIndice){
    var y=primeiroCampo.id

    var controleArray=0
    var x=0

   

    camposIniciais[0]=y-10
    camposIniciais[1]=y-9
    camposIniciais[2]=y-8
    camposIniciais[3]=y+1
    camposIniciais[4]=y+10
    camposIniciais[5]=y+9
    camposIniciais[6]=y+8
    camposIniciais[7]=y-1

    camposProibidos[0]=y
    camposProibidos[1]=y-9
    camposProibidos[2]=y-8
    camposProibidos[3]=y+1
    camposProibidos[4]=y+10
    camposProibidos[5]=y+9
    camposProibidos[6]=y+8
    camposProibidos[7]=y-1
    camposProibidos[8]=y-10

    ajustaPrimeiroClique(divCampo[y])

    while(controleArray<8){
    
       x= camposIniciais[controleArray]
       if(primeiroCampoSemIndice[x].clicado==false){
        primeiroCampoSemIndice[x]._clicado=true
        camposCertos+=1
    }
    if(primeiroCampoSemIndice[x].impar==true){
        primeiroCampoSemIndice[x].elementoHtml.style.backgroundColor = "#e6d8cb";
    }
    if(primeiroCampoSemIndice[x].impar==false){
        primeiroCampoSemIndice[x].elementoHtml.style.backgroundColor = "#ccbda6";
      
    }
        controleArray++
    }
}


 function protegePrimeiroClique(){
var y=0
var x=0

while(x<63){
while(y<camposProibidos.length){



    if(divCampo[x].id==camposProibidos[y]){
       divCampo[x]._bomba=true
       divCampo[x]._primeiroClique=true



     
       
    }
    y++
   
}
y=0
x++
}

}


function alteraTextoPrimeirosCliques(){
var y=0
var x=0

while(x<63){
while(y<camposIniciais.length){



    if(divCampo[x].id==camposIniciais[y]){
        if(divCampo[x].bombasProximas >=1 ){
            copia_P[x].classList.remove("invisivel")
        }
        
        
    }
    y++
   
}
y=0
x++
}

}

function ajustaPrimeiroClique(campoPassado){
    var ajusteEsquerda =false
    var ajusteDireita =false
    x=0
    while(x<7){
        if(campoPassado.id==camposBeiradaDireita[x]){
            
            ajusteDireita=true
            campoPassado.beirada=true
        }
        else{

        }
        x++
    }
x=0
    while(x<7){
      
        if(campoPassado.id==camposBeiradaEsquerda[x]){

            //[0]=-9    [4]=-10        [3]=-1       [6]=+8
            camposIniciais.splice(7,1)
            camposIniciais.splice(6,1)
            camposIniciais.splice(0,1)
            
           
            ajusteEsquerda=true
            campoPassado.beirada=true
        }
        else{

        }
        x++
    }
    if(ajusteEsquerda==true){
        camposIniciais.push(campoPassado.id+2)
        camposIniciais.push(campoPassado.id-7)
        camposIniciais.push(campoPassado.id+11)
        divCampo[campoPassado.id+2].bomba=true
        divCampo[campoPassado.id-7].bomba=true
        divCampo[campoPassado.id+11].bomba=true


        camposProibidos.splice(7,1)
        camposProibidos.splice(6,1)
        camposProibidos.splice(0,1)

        camposProibidos.push(campoPassado.id+2)
        camposProibidos.push(campoPassado.id-7)
        camposProibidos.push(campoPassado.id+11)
            
    }
    if(ajusteDireita==true){
        camposIniciais.splice(2,1)
        camposIniciais.splice(3,1)
        camposIniciais.splice(2,1)

        camposIniciais.push(campoPassado.id+7)
        camposIniciais.push(campoPassado.id-2)
        camposIniciais.push(campoPassado.id-11)

        camposProibidos.push(campoPassado.id-2)
        camposProibidos.push(campoPassado.id+7)
        camposProibidos.push(campoPassado.id-11)

        divCampo[campoPassado.id-2].bomba=true
        divCampo[campoPassado.id+7].bomba=true
        divCampo[campoPassado.id-11].bomba=true
    }
}
