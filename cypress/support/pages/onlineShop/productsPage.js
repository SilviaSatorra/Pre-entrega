export class ProductsPage {

    //constructor:
    constructor() {
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