export class ProductsPage {

    //constructor:
    constructor() {
        // this.addbuttonZapatillasAzules = "#add-to-cart-1001"  //esto no me sirve acá. Quitarlo luego
        // this.addbuttonRemeraNegra = "[id='add-to-cart-1002']"  //esto no me sirve acá. Quitarlo luego
        this.closeButton = "#closeModal"
        this.goToShoppingCartButton = "//div[@class='css-1ktw94t']//button[@id='goShoppingCart']"

    }

    //Metodos:

    //agregarProducto
    agregarProducto(producto) {
        return cy.contains(producto).siblings('div').find("[id^='add-to-cart-']")
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