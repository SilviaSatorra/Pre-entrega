//corregir esta pagina


export class ProductsPage{
    //constructor de los elementos (productos y botones agregarProducto, close y go to shopping cart )

    constructor() {
        this.addButtonZapatillaAzul = "#add-to-cart-1001";  //Zapatillas Azules
        this.addButtonRemeraNegra = '[id="add-to-cart-1002"]'  //Remera Negra

        this.closeButton = "#closeModal"  //Esto creo que está ok. Aun no lo puedo probar
        this.gotShoppingCartButton = '#goShoppingCart' //esto creo que está ok
    }

     //Metodos:

    //agregarProducto
    agregarProducto(botonProducto) {  //habrá que pasarle por parametros un this.addButtonZapatillaAzul?
        cy.get(botonProducto).click()  //REEMPLAZAR
    }


    //close.click()
    clickClose() {
       cy.get(this.closeButton).click()

    }

    //gotoShoppingcart.click()
    //[class="css-1ktw94t"] este es el padre
    //#goShoppingCart   este es el hijo
    clickGoShoppingCart() {
        cy.get("//div[@class='css-1ktw94t']//child::button[#goShoppingCart]").click()  //Está bien este child?
 
     }

    
}