import { RegisterPage } from "../pages/registerPage";
import { LoginPage } from "../pages/loginPage"

export class AccessFunction {
    constructor() {
        this.registerPage = new RegisterPage();
        this.loginPage = new LoginPage();
    }

}