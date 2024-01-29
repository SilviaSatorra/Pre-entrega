export class ProductsPage {

    //constructor:
    constructor() {
       // this.addbuttonZapatillasAzules = "#add-to-cart-1001"
       // this.addbuttonRemeraNegra = "[id='add-to-cart-1002']"
        this.closeButton = "#closeModal"
        this.goToShoppingCartButton = "//div[@class='css-1ktw94t']//button[@id='goShoppingCart']"

    }

    //Metodos:

    //agregarProducto
    agregarProducto(botonAgregarProducto) {
        return cy.get(botonAgregarProducto)
    }


    //close.click()
    getCloseButton() {
        return cy.get(this.closeButton)

    }

    //gotoShoppingcart.click():
    clickGoShoppingCart() {
        cy.xpath(this.goToShoppingCartButton).click()

    }

}