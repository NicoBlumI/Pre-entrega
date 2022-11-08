/// <reference types="cypress"/>
import{LoginPage} from '../support/pages/loginPage'
import{Registro} from'../support/pages/registro'
import{Home} from '../support/pages/home'
import{Products} from '../support/pages/products'
import{ShoppingCart} from '../support/pages/shoppingCart'


describe('Pre-Entrega', () => {
  let loginDatos, producto, suma;
  
  const loginPage= new LoginPage();
  const registro= new Registro();
  const home=new Home();
  const products=new Products();
  const shoppingCart= new ShoppingCart();

  before('Ingresar', ()=>{
    
    cy.fixture('datos').then(data=>{
      loginDatos=data;

    })
    cy.fixture('productos').then(prod=>{
      producto=prod;     

    })    
    
  }) 
  beforeEach("beForeEach",()=>{
    cy.visit('');
    registro.dobleClickRegistro();
    loginPage.escribirUsuario(loginDatos.usuario);
    loginPage.escribirContraseña(loginDatos.password);
    loginPage.clickBotonLogin();
    home.clickOnlikneShop();
  })

  
  it('test unico', () => {
    suma=producto.producto1.precio+producto.producto2.precio;
    products.agregarCarrito(producto.producto1.producto).click();
    products.cerrarPrompt();
    products.agregarCarrito(producto.producto2.producto).click();
    products.cerrarPrompt();
    products.irCarrito();
    shoppingCart.retornarProducto(producto.producto1.producto).should('be.visible');
    shoppingCart.retornarPrecio(producto.producto1.precio).should('be.visible');
    shoppingCart.retornarProducto(producto.producto2.producto).should('be.visible');
    shoppingCart.retornarPrecio(producto.producto2.precio).should('be.visible');
    shoppingCart.verificarPrecioProducto(producto.producto1.producto, producto.producto1.precio);//verificamos que el precio sea el correcto al producto.
    shoppingCart.verificarPrecioProducto(producto.producto2.producto, producto.producto2.precio);    
    shoppingCart.clickTotal();
    shoppingCart.retornarTotal().should('text',suma);
    
  })
  
  
})