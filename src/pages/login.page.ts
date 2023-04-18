//iniciar con el login al trello
import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";

class LoginPage extends BasePage {
    public logintrello: string = '//div[@class="Buttonsstyles__ButtonGroup-sc-1jwidxo-3 jnMZCI"]//a[text()="Iniciar sesión"]';
    public email: string = '//div[@class="email-password"]//input[contains(@placeholder,"Introduzca el correo electrónico")]';
    public botoncontinuar: string = '//input[contains(@value,"Continuar")]';
    public password: string = '#password';
    public loginButton: string = '#login-submit';
    
    
    constructor(){
        super();
    }

    async setEmail(text: string) {        
        await ElementActions.setText(this.email, text);
    }

    async setPassword(text: string) {        
        await ElementActions.setText(this.password, text);
    }

    async clickLogin() {
        await ElementActions.click(this.loginButton);
    }

    async login(emailInput: string, passwordInput: string) {
        await ElementActions.setText(this.email, emailInput);
        await ElementActions.setText(this.password, passwordInput);
        await ElementActions.click(this.loginButton);
    }
}

export const loginPage = new LoginPage();