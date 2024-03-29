import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { expect } from "chai";
import { TESTDATA } from "../../config.app";
import { driverInstance } from "../../src/core/driver";
import { headerPage } from "../../src/pages/components/header.page";

import { escenario } from "../../src/pages/6escenarios.page";



setDefaultTimeout(60 * 1000);


//para iniciar el primer clic en crear
Given('the user go to Crear button', async function (): Promise<void> {
    await escenario.clickOnElement(escenario.crear1);
});

//para dar clic en crear tablero
Given('the user sets the botton Crear Tablero', async function (): Promise<void> {
    await escenario.clickOnElement(escenario.creartablero1);
});

//para darle el titulo del tablero:
Given('the user sets the titulo del Tablero', async function () {
//    await driverInstance.start(TESTDATA.url);
    const titulotablero: string = TESTDATA.titulotablero == '' ? process.env.TITULOTABLERO as string : TESTDATA.titulotablero;
    await escenario.settitulotablero(titulotablero);
    // await loginPage.setEmail(TESTDATA.email);
});

//para el boton crear finalizando
Given('the user clicks the Crear button', async function () {
    await escenario.clickOnElement(escenario.botoncrear);
    // await loginPage.setPassword(TESTDATA.password);
});


//-------------------------------------------------------------------------------------------
Then('the user should see {string} as validation escenario uno', async function (name) {
    const actualName = await headerPage.pvalidare1();
    // expect(isVisible).true;
    //await driverInstance.waitNetwork();
    // const pageUrl = await driverInstance.getPageUrl();
    expect(actualName).includes(name);
         
//    await driverInstance.closeDriver();
});






