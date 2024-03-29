import { Given, setDefaultTimeout, Then, When,  } from "@cucumber/cucumber";
import { expect } from "chai";
import { TESTDATA } from "../../config.app";
import { driverInstance } from "../../src/core/driver";
import { headerPage } from "../../src/pages/components/header.page";
import { loginPage } from "../../src/pages/login.page";
//import { expect } from 'chai';

setDefaultTimeout(60 * 1000);

Given('the user logged into Todoist', async function () {
   
    await loginPage.setEmail(TESTDATA.email);
    await loginPage.setPassword(TESTDATA.password);
    await loginPage.clickLogin();
    const isVisible = await headerPage.nombreincluidoencabezado();
    expect(isVisible).true;
});
//para iniciar el primer clic
Given('the user go to Iniciar sesion button', async function (): Promise<void> {
    await loginPage.clickOnElement(loginPage.logintrello);
});
//para darle el email en el login:
Given('the user sets the email', async function () {
//    await driverInstance.start(TESTDATA.url);
    const email: string = TESTDATA.email == '' ? process.env.EMAIL as string : TESTDATA.email;
    await loginPage.setEmail(email);
    // await loginPage.setEmail(TESTDATA.email);
});

Given('the user sets the password', async function () {
    const password = TESTDATA.password == '' ? process.env.PASSWORD as string : TESTDATA.password;
    await loginPage.setPassword(password);
    // await loginPage.setPassword(TESTDATA.password);
});
//para el boton continuar
Given('the user set the botton Continuar', async function () {
    await loginPage.clickOnElement(loginPage.botoncontinuar);
    // await loginPage.setPassword(TESTDATA.password);
});

When('the user clicks the Iniciar sesion button', async function () {
    await loginPage.clickLogin();
});

Then('the user should see {string} text on the header nav', async function (name) {
    const actualName = await headerPage.nombreincluidoencabezado();
    // expect(isVisible).true;
    //await driverInstance.waitNetwork();
    // const pageUrl = await driverInstance.getPageUrl();
    expect(actualName).includes(name);
         
//    await driverInstance.closeDriver();
});

