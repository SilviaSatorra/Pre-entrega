export class ShoppingCartPage {


    //constructor para quantity, product,Price, totalPrice, total
    constructor() {

        this.showtotalPriceButton = '[class="chakra-button css-1i1ynt3"]'
        this.totalText = 'Total $'
        this.totalTextParent = 'p[class="chakra-text css-vn850v"]'
        this.totalTextSiblings = 'p[id="price"]'
        this.totalTextChildren = 'b', '67.78'
    }


    //Métodos:

    //Para verifcarNombreProducto
    obtenerProducto(producto) {
        return cy.get(producto, { timeout: 10000 })
    }
    //Para verificarPrecioUnitario
    obtenerPrecioUnitario(producto, Precio) {
        return cy.contains(producto).siblings(Precio)

    }
    //Para verificar Cantidad de Producto
    obtenerCantidadProducto(producto, Cantidad) {
        return cy.contains(producto).siblings(Cantidad)


    }

    //Para calcular precio total de un producto:
    calcularPrecioTotalProducto(precio, cantidad) {
        let precioProducto = precio
        let cantProducto = cantidad
        return precioProducto * cantProducto
    }

    //Para verificar el importe total calculado de un producto con el correspondiente importe en pantalla:
    verificarImporteTotalProducto(producto, selectorImporteTotalProducto) {
        return cy.contains(producto).siblings(selectorImporteTotalProducto)

    }


    //showtotalPriceButton.click()
    ShowtotalPriceButton() {
        return cy.get(this.showtotalPriceButton)
    }

    //Para verificar Texto Total $ en pantalla

    verificarTextoTotal$() {
        cy.contains(this.totalText)
    }

    //Para calcular importe total de la compra:
    calcularImporteTotalCompra(importeProducto1, importeProducto2) {
        let importeProd1 = importeProducto1
        let importeProd2 = importeProducto2
        return importeProd1 + importeProd2

    }

    //Para verificar el importe total de la compra con el correspondiente importe en pantalla:
    verificarImporteTotalCompra(selectorTotalCompra) {
        return cy.contains(this.totalText).parent(this.totalTextParent)
            .siblings(this.totalTextSiblings)
            .children(this.totalTextChildren)

    }


}