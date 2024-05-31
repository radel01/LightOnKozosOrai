export default class Lampa {
    #allapot=false;
    #id=0;
    #divElem;
    #szuloElem;

    constructor(allapot, id, szuloElem) {
        this.#allapot=allapot;
        this.#id=id;
        this.#szuloElem=szuloElem;
        this.#megjelenit();
        this.#divElem=this.#szuloElem.children("div:last-child")
        this.#szinBeallit();
        this.#divElem.on("click", ()=>{
            this.#trigger("kapcsolas")
            this.setAllapot();
        })
    }

    #trigger(esemenynev){
        const e= new CustomEvent(esemenynev, {detail:this.#id})
        window.dispatchEvent(e);
    }
    #megjelenit(){
        let txt = `<div></div>`;
        this.#szuloElem.append(txt);
    }

    setAllapot(){
        this.#allapot=!this.#allapot;
        this.#szinBeallit();
    }

    #szinBeallit(){
        if(this.#allapot){
            //rátesszük a divre a .felkpcs osztályt
            this.#divElem.addClass("felkapcs");
        }else{
            this.#divElem.removeClass("felkapcs");
        }
    }

    #kattintasTrigger(){

    }
}

