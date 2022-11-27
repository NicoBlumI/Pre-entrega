/// <reference types="cypress"/>
import{Home} from '../support/pages/home'
import{Products} from '../support/pages/products'
import{ShoppingCart} from '../support/pages/shoppingCart'
import{CheckOut} from '../support/pages/checkOut'


describe('Pre-Entrega', () => {
  let producto, suma;
  const numeroRandom = Math.floor(Math.random() * 1000);
  const usuario = `NicoBlum${numeroRandom}`; 
  const home=new Home();
  const products=new Products();
  const shoppingCart= new ShoppingCart();
  const checkOut= new CheckOut();
  
  

  before('Ingresar', ()=>{    

      cy.request({
          url: "https://pushing-it-backend.herokuapp.com/api/register",
          method: "POST",
          body: {
          username: usuario,
          password: "123456!",
          gender: "Male",
          day: "24",
          month: "03",
          year: "1988",
        },
      })
      .then(() => {
        cy.request({
          url: "http://pushing-it-backend.herokuapp.com/api/login",
          method: "POST",
          body: {
            username: usuario,
            password: "123456!",
          },
        })
        .then( response=>{
          window.localStorage.setItem('token', response.body.token)
          window.localStorage.setItem('user', response.body.username)
        });
        
    
      cy.fixture('productos').then(prod=>{
      producto=prod;   
       });

      cy.fixture('checkOut').then(info=>{
        tarjeta=info;
      })
        
      
      
      
      }) 
    
    
  }) 
  

  
  it('test unico', () => {
    suma=producto.producto1.precio+producto.producto2.precio;
    cy.visit('')
    home.clickOnlikneShop();
   
    products.agregarCarrito(producto.producto1.producto).click();
    products.cerrarPrompt();
    products.agregarCarrito(producto.producto2.producto).click();
    products.cerrarPrompt();
    products.irCarrito();
    shoppingCart.retornarProducto(producto.producto1.producto).should('have.text',producto.producto1.producto);
    shoppingCart.retornarPrecio(producto.producto1.precio).should('have.text',`$${producto.producto1.precio}`);
    shoppingCart.retornarProducto(producto.producto2.producto).should('have.text',producto.producto2.producto);
    shoppingCart.retornarPrecio(producto.producto2.precio).should('have.text',`$${producto.producto2.precio}`);     
    shoppingCart.clickTotal();
    shoppingCart.retornarTotal().should('text',suma);
    shoppingCart.clickCheckOut();
    
    
  })
  
  

})
