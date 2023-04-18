import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { expect } from "chai";
import { TESTDATA } from "../../config.app";
import { driverInstance } from "../../src/core/driver";
import { headerPage } from "../../src/pages/components/header.page";
//import { loginPage } from "../../src/pages/login.page";
import { escenario } from "../../src/pages/6escenarios.page";



setDefaultTimeout(60 * 1000);


Given('the user go to Crear Plantilla izquierda button', async function (): Promise<void> {
    await escenario.clickOnElement(escenario.clicplantillaizquierdo);
});

Given('the user sets the clic en negocio', async function (): Promise<void> {
    await escenario.clickOnElement(escenario.clicnegocio);
});

Given('the user sets the clic eleccion Lead', async function () {
    await escenario.clickOnElement(escenario.cliceleccionlead);
});

Given('the user sets the clic utlizar plantilla Lead', async function () {
    await escenario.clickOnElement(escenario.clicutilizarplantilla);
});

Given('the user clicks the Crearplantilla izquierda button', async function () {
    await escenario.clickOnElement(escenario.cliccrearplantillaizquierda);
});

