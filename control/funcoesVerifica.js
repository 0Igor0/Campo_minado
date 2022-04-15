

 function verificaImpar(){


    if(divCampo[x].id % 2 == 0){
        divCampo[x]._impar=false
        divCampo[x].elementoHtml.style.backgroundColor = "#01455a";
    }
    if(divCampo[x].id % 2 == 1){
        divCampo[x]._impar=true
        divCampo[x].elementoHtml.style.backgroundColor = "#5f98ab";
    }
    }

function verificaBeirada(valore,arrayPassado){
var bombasPertoArray=[]
    bombasPertoArray[0]=valore-9
    bombasPertoArray[1]=valore+9
    bombasPertoArray[2]= valore+1
    bombasPertoArray[3]= valore-1
    bombasPertoArray[4]= valore-10
    bombasPertoArray[5]= valore+10
    bombasPertoArray[6]= valore+8
    bombasPertoArray[7]= valore-8

    var x=0


    while(x<7){
        if(divCampo[valore].id==camposBeiradaDireita[x]){
            bombasPertoArray.splice(7,1)
            bombasPertoArray.splice(5,1)
            bombasPertoArray.splice(2,1)

            divCampo[valore].beirada=true
        }
        else{

        }
        x++
    }
x=0
    while(x<7){
        
        if(divCampo[valore].id==camposBeiradaEsquerda[x]){

            //[0]=-9    [4]=-10        [3]=-1       [6]=+8
            bombasPertoArray.splice(6,1)
            bombasPertoArray.splice(4,1)
            bombasPertoArray.splice(3,1)
           
  
            divCampo[valore].beirada=true
        }
        else{

        }
        x++
    }
if(arrayPassado==''){
    return bombasPertoArray


}else{

    alert(arrayPassado)
}


} 


function avisaBombasPerto(valor){
    var x=0
    var y=0

        while(y<8 && x<63){
            
            if(valor[y]<63 && valor[y]>=0){
                if(divCampo[x].id==valor[y]){
                    if(divCampo[x].beirada!=true){
                        
                        divCampo[x]._bombasProximas+=1
                        copia_P[x].textContent=divCampo[x].bombasProximas
                        alteraTextoPrimeirosCliques()
                        x=0
                        y++
                    }
                    else{

                    }

                  
                    
                }
            }
            else{
                y++
            }
        x++
        if(y < 8 && x==63){
            x=0
                
            }
        }
    }
    
