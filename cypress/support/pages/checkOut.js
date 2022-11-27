export class CheckOut{
    constructor(){
        this.nombre='#FirstName';
        this.apellido= '#lastName';
        this.cardNumber='#cardNumber';
        this.purchase=cy.get('.css-13zsa');
    };

    escribirNombre(){
        cy.get(this.nombre).type();
    };
    escribirApellido(){
        cy.get(this.apellido).type();        
    };
    escribirNumero(){
        cy.get(this.cardNumber).type();
    };
    cickPurchase(){

        cy.get(this.purchase).click();
    };


    
 


};