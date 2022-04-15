class campos{
    constructor(elementoHtml,id,bomba, impar, clicado, bombasProximas, beirada, primeiroClique){
        this._elementoHtml =elementoHtml
        this._id=id
        this._bomba=bomba
        this._impar=impar
        this._clicado=clicado
        this._bombasProximas=bombasProximas
        this._beirada =beirada
        this._primeiroClique =primeiroClique
    }
    get elementoHtml(){
        return this._elementoHtml;
    }
    get clicado(){
        return this._clicado;
    }
    get impar(){
        return this._impar;
    }
    get id(){
        return this._id;
    }
    get bomba(){
        return this._bomba;
    }
    get bombasProximas(){
        return this._bombasProximas;
    }
    get beirada(){
        return this._beirada;
    }
    get primeiroClique(){
        return this._primeiroClique;
    }

}
