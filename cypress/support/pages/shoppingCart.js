export class ShoppingCart{
    verificarPrecioProducto(producto,precio){
        cy.get(`[name^='${producto}']`).should('be.visible').and('be.visible',`[name^='${precio}']`);
    }  

    retornarProducto(producto){
        return cy.get(`[name^='${producto}']`) 
    }
    retornarPrecio(precio){
        return cy.get(`[name^='${precio}']`)   

    }   

    clickTotal(){
        cy.get('#root > div > div.css-ha1fhc > div.css-n1d5pa > button').click();      

    }

    retornarTotal(){

       return cy.get('#price > b');        

    }
    clickCheckOut(){
        cy.get('.css-641vkz > .chakra-button').click();
        
    }

   
}