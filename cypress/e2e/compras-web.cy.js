/// <reference types ="cypress"/>

//import {RegisterPage} from "../support/pages/registerPage";
//import { LoginPage } from "../support/pages/loginPage";
import { AccessFunction } from "../support/functions/accessFunction";
import { HomePage } from "../support/pages/homePage";
import { HeaderPage } from "../support/pages/headerPage";
import { OnlineShopFunction } from "../support/functions/onlineShopFunction";

describe("Validación de compra de productos", () => {
    let data;
    
    //const registerPage = new RegisterPage();   //quedó integrado en accessFunction
    //const loginPage = new LoginPage();         //quedó integrado en accessFunction
    const accessFunction = new AccessFunction();
    const homePage = new HomePage();
    const headerPage = new HeaderPage();
    const onlineShopFunction = new OnlineShopFunction();

    before("before - Compra de productos", () => {
        cy.fixture("datos").then(datosFixture => {
            cy.log(datosFixture)
            data = datosFixture

        })

    })

    beforeEach("beforeEach - Compra de productos", () => {
        cy.visit('')
        accessFunction.registerPage.dobleClickRegisterToggle();
        accessFunction.loginPage.ingresarUsuario(Cypress.env().usuario);
        accessFunction.loginPage.ingresarPassword(Cypress.env().password);
        accessFunction.loginPage.clickLogin();
        // //obtenemos el usuario del Header esperando que sea el usuario que le pasamos en el parametro:
        headerPage.getUsername(Cypress.env().usuario);
        //homePage.clickTodoListLink();  //poner 1 assert en el metodo para evitar usar wait()
        homePage.clickOnlineshoplink();
        // todoListPage.clickRemoveAll()
        // cy.get('li').should('not.exist')
        // todoListPage.obtenerTareas().should('not.exist')

    })

    it("Prueba e2e compra de productos - validaciones", () => {
        //Selecciono un primer producto 2 veces:
   
        //selecciono el primer producto
        cy.get('[id="add-to-cart-1001"]').click()
        //click en close
        onlineShopFunction.productsPage.clickClose()
        //selecciono por 2da vez el producto
        cy.get('[id="add-to-cart-1001"]').click()
        //click en close
        onlineShopFunction.productsPage.clickClose()



        //Selecciono un segundo producto 1 sola vez:
                
        //selecciono por única vez el 2do producto
        cy.get('[id="add-to-cart-1007"]').click()
        //click en close
        onlineShopFunction.productsPage.clickClose()
        //click en goToShoppingCart
        
        // comento esto hasta que anden los 2 metodos anteriores
        onlineShopFunction.productsPage.clickGoShoppingCart();




        //Primer producto:
        //Verifico nombre - 1er producto
        onlineShopFunction.productsPage.obtenerProducto('[name="Zapatillas Azules"]')
        .should('be.visible')
        .contains(data.productos.producto1.nombre)

        //Verifico precio unitario - 1er producto
        //Verifico cantidd - 1er producto
        //Verifico precio total - 1er producto


        //Segundo producto:
        //Verifico nombre - 2do producto
        onlineShopFunction.productsPage.obtenerProducto('[name="Campera Negra"]')
        .should('be.visible')
        .contains(data.productos.producto2.nombre)

       
        
        //Verifico precio unitario - 2do producto
        //Verifico cantidd - 2do producto
        //Verifico precio total - 2do producto


        //Verifico el importe total de la compra:



    })

})