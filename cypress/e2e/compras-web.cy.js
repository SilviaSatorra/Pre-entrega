/// <reference types ="cypress"/>


//import {RegisterPage} from "../support/pages/registerPage"; //quedó integrado en accessFunction
//import { LoginPage } from "../support/pages/loginPage"; //quedó integrado en accessFunction
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

        homePage.clickOnlineshoplink();  //poner 1 assert en el metodo para evitar usar wait()  <-------  ###### ###### ######
    })

    it("Prueba e2e compra de productos - validaciones", () => {
        //Selecciono un primer producto 2 veces...

        //selecciono por 1ra vez el primer producto + click en botón "Close":
        onlineShopFunction.productsPage.agregarProducto(data.productos.producto1.addButton).click()

        onlineShopFunction.productsPage.getCloseButton().should('be.visible').click()

        //selecciono por 2da vez el producto + click en botón "Close":
        onlineShopFunction.productsPage.agregarProducto(data.productos.producto1.addButton).click()

        onlineShopFunction.productsPage.getCloseButton().should('be.visible').click()



        //Selecciono un segundo producto 1 sola vez...

        //selecciono por única vez el 2do producto + click en botón "Close":
        onlineShopFunction.productsPage.agregarProducto(data.productos.producto2.addButton).click()

        onlineShopFunction.productsPage.getCloseButton().should('be.visible').click()


        //click en goToShoppingCart
        onlineShopFunction.productsPage.clickGoShoppingCart();


        //Validaciones - Primer producto:

        //Verifico nombre - 1er producto
        onlineShopFunction.productsPage.obtenerProducto('[name="Zapatillas Azules"]')
            .should('be.visible')
            .contains(data.productos.producto1.nombre)
        //cy.log('nombre zapas azules verificado')   ///ELIMINAR ESTO  ######    ##########

        //Verifico cantidad - 1er producto
        cy.contains(data.productos.producto1.nombre).siblings('p[name="2"]').should('have.text', '2')
        //cy.log('cantidad de prod 1 agregado verificado')  ///ELIMINAR ESTO  ######    ##########

        //Verifico precio unitario - 1er producto
        cy.contains(data.productos.producto1.nombre).siblings('p[id="unitPrice"]').should('have.text', "$ " + data.productos.producto1.precioUnitario)

        //cy.log('precio unitario de prod 1 verificado ' + data.productos.producto1.precioUnitario)  ///ELIMINAR ESTO  ######    ##########


        //Verifico precio total - 1er producto

        let totalPriceProducto1
        totalPriceProducto1 = data.productos.producto1.precioUnitario * data.productos.producto1.cantidad

        cy.contains(data.productos.producto1.nombre).siblings('p[id="totalPrice"]').should('have.text', "$ " + totalPriceProducto1)
        // cy.log('precio total de prod 1 verificado: ' + totalPriceProducto1)   ///ELIMINAR ESTO  ######    ##########


        //Validaciones - Segundo producto:
        //Verifico nombre - 2do producto:
        onlineShopFunction.productsPage.obtenerProducto('[name="Remera Negra"]')
            .should('be.visible')
            .contains(data.productos.producto2.nombre)

        // cy.log('nombre remera negra verificado')  ///ELIMINAR ESTO  ######    ##########

        //Verifico precio unitario - 2do producto:

        cy.contains(data.productos.producto2.nombre)
            .siblings('p[id="unitPrice"]')
            .should('have.text', "$ " + data.productos.producto2.precioUnitario)
       // cy.log('precio unitario de prod 2 verificado')  ///ELIMINAR ESTO  ######    ##########
       
       //Verifico cantidad - 2do producto:
        cy.contains(data.productos.producto2.nombre).siblings('p[name="1"]').should('have.text', '1')
       // cy.log('cantidad de prod 2 agregado verificado')  ///ELIMINAR ESTO  ######    ##########

        //Verifico precio total - 2do producto:
        let totalPriceProducto2
        totalPriceProducto2 = data.productos.producto2.precioUnitario * data.productos.producto2.cantidad

        cy.contains(data.productos.producto2.nombre).siblings('p[id="totalPrice"]').should('have.text', "$ " + totalPriceProducto2)
       // cy.log('precio total de prod 1 verificado: ' + totalPriceProducto2)  ///ELIMINAR ESTO  ######    ##########

        //Obtengo el botón show total price y le doy click para mostrar el precio total en pantalla:
        onlineShopFunction.productsPage.clickShowtotalPriceButton()

        //verifico  que se muestre el texto "Total $""
        cy.contains('Total $')

        //verifico que se muestre un importe total de la compra  ///ELIMINAR ESTO  ######    ##########

        //calculo el importe total de la compra:
        let importeTotalCompra
        importeTotalCompra = totalPriceProducto1 + totalPriceProducto2
        cy.log('importe total compra: ' + importeTotalCompra)

        //Verifico que se muestra el importe total de la compra en pantalla y comparo el mismo con el importe total calculado:
        cy.contains('Total $').parent('p[class="chakra-text css-vn850v"]')
            .siblings('p[id="price"]')
            .children('b', '67.78').should('have.text', importeTotalCompra)

    })

})

