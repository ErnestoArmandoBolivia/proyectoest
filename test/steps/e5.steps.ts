import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { escenario } from "../../src/pages/6escenarios.page";



setDefaultTimeout(60 * 1000);


Given('the user go to cambio de tema button', async function (): Promise<void> {
    await escenario.clickOnElement(escenario.cliccambiodetema);
});

Given('the user clicks volver a original button', async function (): Promise<void> {
    await escenario.clickOnElement(escenario.clictemaoriginal);
});



