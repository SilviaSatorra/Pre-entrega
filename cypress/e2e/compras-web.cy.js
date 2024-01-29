/// <reference types ="cypress"/>

//import {RegisterPage} from "../support/pages/registerPage"; //quedó integrado en accessFunction
//import { LoginPage } from "../support/pages/loginPage";    //quedó integrado en accessFunction
import { AccessFunction } from "../support/functions/accessFunction";
import { HomePage } from "../support/pages/homePage";
import { HeaderPage } from "../support/pages/headerPage";
import { OnlineShopFunction } from "../support/functions/onlineShopFunction";


describe("Validación de compra de productos", () => {
    let data;
    let cantProd1 = "2" //Aunque no lo usé lo dejo para mostrar la opción que a mi me hubiera gustado usar
    let cantProd2 = "1" //Aunque no lo usé lo dejo para mostrar la opción que a mi me hubiera gustado usar
    let totalPriceProducto1;
    let totalPriceProducto2;
    let importeTotalCompra;

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
        //obtenemos el usuario del Header esperando que sea el usuario que le pasamos en el parametro:
        headerPage.getUsername(Cypress.env().usuario);
        homePage.clickOnlineshoplink();

    })

    it("Prueba e2e compra de productos + validaciones", () => {
        //Selecciono un primer producto 2 veces:

        //selecciono el primer producto
        onlineShopFunction.productsPage.agregarProducto(data.productos.producto1.nombre).should('exist').click()

        //presiono el botón "Close"
        onlineShopFunction.productsPage.getCloseButton().should('be.visible').click()

        //selecciono por 2da vez el producto
        onlineShopFunction.productsPage.agregarProducto(data.productos.producto1.nombre).should('exist').click()

        //presiono el botón "Close"
        onlineShopFunction.productsPage.getCloseButton().should('be.visible').click()



        //Selecciono un segundo producto 1 sola vez:

        //selecciono por única vez el 2do producto
        onlineShopFunction.productsPage.agregarProducto(data.productos.producto2.nombre).should('exist').click()


        //presiono el botón "Close"
        onlineShopFunction.productsPage.getCloseButton().should('be.visible').click()

        //click en goToShoppingCart
        onlineShopFunction.productsPage.clickGoShoppingCart();



        //Validaciones - Primer producto:
        //Verifico nombre - 1er producto
        onlineShopFunction.shoppingCartPage.verificarNombreProducto('[name="Zapatillas Azules"]')
            .should('be.visible')
            .contains(data.productos.producto1.nombre)


        //Verifico cantidad - 1er producto
        onlineShopFunction.shoppingCartPage.verificarCantidadProducto(data.productos.producto1.nombre, 'p[name="2"]')
            .should('have.text', data.productos.producto1.cantidad)  //lo puse así porque al preguntar en clase entendí que se quiere así
        //.should('have.text', cantProd1) //hubiera preferido ponerlo así y no poner la cantidad harcodeada en el fixture



        //Verifico precio unitario - 1er producto
        onlineShopFunction.shoppingCartPage.verificarPrecioUnitario(data.productos.producto1.nombre, 'p[id="unitPrice"]')
            .should('have.text', "$ " + data.productos.producto1.precioUnitario)


        //Verifico importe total - 1er producto
        //Primero calculo el importe total para el producto:
        totalPriceProducto1 = onlineShopFunction.shoppingCartPage.calcularImporteTotalProducto(data.productos.producto1.precioUnitario, data.productos.producto1.cantidad) //entiendo que se quiere así
        //totalPriceProducto1 = onlineShopFunction.shoppingCartPage.calcularPrecioTotalProducto(data.productos.producto1.precioUnitario,cantProd1) //preferiría así

        //Ahora comparo el importe calculado con el importe en pantalla:
        onlineShopFunction.shoppingCartPage.verificarImporteTotalProducto(data.productos.producto1.nombre, 'p[id="totalPrice"]')
            .should('have.text', "$ " + totalPriceProducto1)


        //Validaciones - Segundo producto:
        //Verifico nombre - 2do producto
        onlineShopFunction.shoppingCartPage.verificarNombreProducto('[name="Remera Negra"]')
            .should('be.visible')
            .contains(data.productos.producto2.nombre)


        //Verifico cantidad - 2do producto
        onlineShopFunction.shoppingCartPage.verificarCantidadProducto(data.productos.producto2.nombre, 'p[name="1"]')
            .should('have.text', data.productos.producto2.cantidad)  //lo puse así porque al preguntar en clase entendí que se quiere así
        //.should('have.text', cantProd2) //hubiera preferido ponerlo así y no poner la cantidad harcodeada en el fixture


        //Verifico precio unitario - 2do producto
        onlineShopFunction.shoppingCartPage.verificarPrecioUnitario(data.productos.producto2.nombre, 'p[id="unitPrice"]')
            .should('have.text', "$ " + data.productos.producto2.precioUnitario)



        //Verifico importe total - 2do producto
        //Primero calculo el importe total para el producto:
        totalPriceProducto2 = onlineShopFunction.shoppingCartPage.calcularImporteTotalProducto(data.productos.producto2.precioUnitario, data.productos.producto2.cantidad) //entiendo que se quiere así
        //totalPriceProducto2 = onlineShopFunction.shoppingCartPage.calcularPrecioTotalProducto(data.productos.producto2.precioUnitario,cantProd2) //preferiría así


        //Ahora comparo el importe calculado con el importe en pantalla:
        onlineShopFunction.shoppingCartPage.verificarImporteTotalProducto(data.productos.producto2.nombre, 'p[id="totalPrice"]')
            .should('have.text', "$ " + totalPriceProducto2)


        //Obtengo el botón show total price y lo presiono para mostrar el precio total en pantalla:
        onlineShopFunction.shoppingCartPage.ShowtotalPriceButton()
            .should('be.visible')
            .click()

        //verifico  que se muestre el texto "Total $"":
        onlineShopFunction.shoppingCartPage.verificarTextoTotal$()

        //verifico que se muestre un importe total de la compra
        //calculo el importe total de la compra:
        importeTotalCompra = onlineShopFunction.shoppingCartPage.calcularImporteTotalCompra(totalPriceProducto1, totalPriceProducto2)


        //Ahora comparo el importe calculado con el importe en pantalla:
        onlineShopFunction.shoppingCartPage.verificarImporteTotalCompra().should('have.text', importeTotalCompra)

    })
    
})
