import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { expect } from "chai";
import { TESTDATA } from "../../config.app";
import { driverInstance } from "../../src/core/driver";
import { headerPage } from "../../src/pages/components/header.page";
//import { loginPage } from "../../src/pages/login.page";
import { escenario } from "../../src/pages/6escenarios.page";

setDefaultTimeout(60 * 1000);


Given('the user go to Clicvistas button', async function (): Promise<void> {
    await escenario.clickOnElement(escenario.clicvistas);
});

Given('the user clicks the ver calendario button', async function (): Promise<void> {
    await escenario.clickOnElement(escenario.clicvercalendario);
});
 

//------------------------------------------------------------
Then('the user should see {string} as validation escenario cuatro', async function (name) {
    const actualName = await headerPage.pvalidare4();
    // expect(isVisible).true;
    //await driverInstance.waitNetwork();
    // const pageUrl = await driverInstance.getPageUrl();
    expect(actualName).includes(name);
         
//    await driverInstance.closeDriver();
});
