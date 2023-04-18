import {ElementActions} from "../../core/element-actions";
import {BasePage} from "../base.page";

class HeaderPage extends BasePage {
    // private homeIcon: string = 'button[data-gtm-id="burger-home-button"]';
    private signInNavButton: string = "//div[@class='panel header']//li[@class='authorization-link']/a"; //ya se dejó de ocupar


    private validarlogin: string = '//button[@title="Espacios de trabajo"]';   //para mi login, lo que debe salir cuando ingrese
                                //div[@class="panel header"]//span[@class="logged-in"]


    private validare1:string = '//h1[@class="js-board-editing-target board-header-btn-text"]'; //validar que diga el nombre pruebaexamen
    private validare2:string = '//h1[@class="js-board-editing-target board-header-btn-text"]';
    private validare3:string = '//h1[@class="js-board-editing-target board-header-btn-text"]';
    private validare4:string = '//p[@class="dEm1cfVgHhRuNo zu6bc_UDQfr040"]';
    private validare5:string = '//div[@class="KhqgWd0h95qmSQ"]';
    private validare6:string = '//a[text()="Invitados"]';

    constructor() {
        super();
    }

    async clickOnNavLogin(): Promise<void> {
        await ElementActions.click(this.signInNavButton);
    }

    async nombreincluidoencabezado(): Promise<string> {
        return ElementActions.getElementText(this.validarlogin);
            }
    async pvalidare1(): Promise<string> {
        return ElementActions.getElementText(this.validare1);
    }
    async pvalidare2(): Promise<string> {
        return ElementActions.getElementText(this.validare2);
    }
    async pvalidare3(): Promise<string> {
        return ElementActions.getElementText(this.validare3);
    }
    async pvalidare4(): Promise<string> {
        return ElementActions.getElementText(this.validare4);
    }
    async pvalidare5(): Promise<string> {
        return ElementActions.getElementText(this.validare5);
    }
    async pvalidare6(): Promise<string> {
        return ElementActions.getElementText(this.validare6);
    }

}

export const headerPage = new HeaderPage();