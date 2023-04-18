import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { escenario } from "../../src/pages/6escenarios.page";



setDefaultTimeout(60 * 1000);


Given('the user go to Clicvistas button', async function (): Promise<void> {
    await escenario.clickOnElement(escenario.clicvistas);
});

Given('the user clicks the ver calendario button', async function (): Promise<void> {
    await escenario.clickOnElement(escenario.clicvercalendario);
});
 


