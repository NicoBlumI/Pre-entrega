export class LoginPage{
    constructor(){
        this.usuarioInput="#user";
        this.contraseñaInput="#pass";
        this.botonLoguin="#submitForm";
    }
    escribirUsuario(usuario){
        cy.get(this.usuarioInput).type(usuario);       
    };

    escribirContraseña(contraseña){
        cy.get(this.contraseñaInput).type(contraseña);

    };
    clickBotonLogin(){
        cy.get(this.botonLoguin).click();
    }

}