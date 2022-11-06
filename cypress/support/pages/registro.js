export class Registro{
    constructor(){
        this.botonInicio='#registertoggle';
    }

    dobleClickRegistro(){
        cy.get(this.botonInicio).dblclick();
    }

}