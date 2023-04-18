import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { expect } from "chai";
import { TESTDATA } from "../../config.app";
import { driverInstance } from "../../src/core/driver";
import { headerPage } from "../../src/pages/components/header.page";
//import { loginPage } from "../../src/pages/login.page";
import { escenario } from "../../src/pages/6escenarios.page";

setDefaultTimeout(60 * 1000);


Given('the user go to cambio de tema button', async function (): Promise<void> {
    await escenario.clickOnElement(escenario.cliccambiodetema);
});

Given('the user clicks volver a original button', async function (): Promise<void> {
    await escenario.clickOnElement(escenario.clictemaoriginal);
});

//------------------------------------------------------------
Then('the user should see color azul {string} as validation escenario cinco', async function (color) {
    const actualcolor = await headerPage.pvalidare5();
    // expect(isVisible).true;
    //await driverInstance.waitNetwork();
    // const pageUrl = await driverInstance.getPageUrl();
    expect(actualcolor).includes(color);
         
//    await driverInstance.closeDriver();
});


