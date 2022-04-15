var controladorCliques=0

var AreaCampoMinado=document.querySelector("#areaCampoMinado")
var x=0;
var caixaCampo=[]
criarElementos()

var areaCampoMinado = document.querySelector("#areaCampoMinado");
var camposCertos=0



areaCampoMinado.addEventListener("click", function(event) {

var campoClicado=event.target.parentNode.textContent
    campoClicado=(campoClicado.substring(2,0));
    campoClicado=campoClicado-10
var x=0

    while(x<63){
     

        if(divCampo[x].id==campoClicado){
            verificaBomba(divCampo[x])

            if(divCampo[x].bombasProximas>=1){
                copia_P[x].classList.remove("invisivel")
            }
            
            if(divCampo[x].clicado==false){
                divCampo[x]._clicado=true
                camposCertos+=1
            }
            if(divCampo[x].impar==true){
                divCampo[x].elementoHtml.style.backgroundColor = "#e6d8cb";
                if(controladorCliques==0){
                    primeiroClique(divCampo[x],divCampo,x)
                }
            }
            if(divCampo[x].impar==false){
                divCampo[x].elementoHtml.style.backgroundColor = "#ccbda6";
                if(controladorCliques==0){
                    primeiroClique(divCampo[x],divCampo,x)
                    
                }
            }

            if(camposCertos==59){
                venceu()
            }
         
            
        }
      
        x++
    }
    if(controladorCliques==0){
        
        criarBombas()
        
        a= verificaBeirada(a,bombasPertoArray)
        b= verificaBeirada(b,bombasPertoArray)
        c= verificaBeirada(c,bombasPertoArray)
        d= verificaBeirada(d,bombasPertoArray)
        avisaBombasPerto(a)
        avisaBombasPerto(b)
        avisaBombasPerto(c)
        avisaBombasPerto(d)
    }
    controladorCliques+=1    
});
