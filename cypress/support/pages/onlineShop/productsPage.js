//corregir esta pagina


export class ProductsPage {
    //constructor de los elementos (productos y botones agregarProducto, close y go to shopping cart )

    constructor() {
        // this.addButtonZapatillaAzul = "#add-to-cart-1001";  //Zapatillas Azules
        // this.addButtonRemeraNegra = '[id="add-to-cart-1002"]'  //Remera Negra

        this.closeButton = "#closeModal"  //Esto creo que está ok. Aun no lo puedo probar
        this.gotShoppingCartButton = '#goShoppingCart' //esto creo que está ok
        this.showtotalPriceButton ='[class="chakra-button css-1i1ynt3"]'
    }

    //Metodos:

    //agregarProducto
  agregarProducto(Producto) {  //habrá que pasarle por parametros un this.addButtonZapatillaAzul?
        return cy.get(Producto)  //REEMPLAZAR
    }



    //close.click()
    getCloseButton() {
        return cy.get(this.closeButton)

    }

    //gotoShoppingcart.click()
   // Este metodo está ok. Lo dejo comentado hasta que funcionen los 2 metodos anteriores
    clickGoShoppingCart() {
        cy.xpath("//div[@class='css-1ktw94t']//button[@id='goShoppingCart']").click()

    }

    //obtener producto:
    obtenerProducto(Producto) {  //habrá que pasarle por parametros un this.addButtonZapatillaAzul?
        return cy.get(Producto)  //REEMPLAZAR
    }

    //showtotalPriceButton.click()
    clickShowtotalPriceButton (){
         return cy.get(this.showtotalPriceButton).click()
    }
       
    //obtener precio unitario de un producto
      obtenerPrecioUnitario(){

      }
    //obtener cantidad de un producto

      obtenerCantidadProducto(){
        
      }    
    

}