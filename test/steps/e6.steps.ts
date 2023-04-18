
import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { escenario } from "../../src/pages/6escenarios.page";



setDefaultTimeout(60 * 1000);


Given('the user go to miembros button', async function (): Promise<void> {
    await escenario.clickOnElement(escenario.clicmiembros);
});

Given('the user clicks the invitados button', async function (): Promise<void> {
    await escenario.clickOnElement(escenario.clicinvitados);
});




