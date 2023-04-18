import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { expect } from "chai";
import { TESTDATA } from "../../config.app";
import { driverInstance } from "../../src/core/driver";
import { headerPage } from "../../src/pages/components/header.page";
//import { loginPage } from "../../src/pages/login.page";
import { escenario } from "../../src/pages/6escenarios.page";



setDefaultTimeout(60 * 1000);


//para iniciar el primer clic en crear
Given('the user go to Plantilla button', async function (): Promise<void> {
    await escenario.clickOnElement(escenario.clicplantilla);
});

//para dar clic en elegir plantilla
Given('the user sets the botton 1 on 1 Meeting agenda', async function (): Promise<void> {
    await escenario.clickOnElement(escenario.elegirplantilla);
});

//para darle el clic en crear plantilla:
Given('the user clicks the Crearplantilla button', async function () {
    await escenario.clickOnElement(escenario.crearplantilla);
});


