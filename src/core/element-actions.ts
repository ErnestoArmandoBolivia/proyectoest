import { driverInstance } from "./driver";

export class ElementActions {

    static async click(locator: string) {
        await driverInstance.Page.waitForSelector(locator);
        await driverInstance.Page.click(locator);
    }

    static async setText(locator: string, text: string): Promise<void> {
        await driverInstance.Page.waitForSelector(locator);
        await driverInstance.Page.fill(locator, text);
    }

    static async isElementVisible(locator: string): Promise<boolean> {
        await driverInstance.Page.waitForSelector(locator);
        return await driverInstance.Page.isVisible(locator, {
            timeout: 10000
        });
    }

    static async getElementText(locator: string): Promise<string> {
        await driverInstance.Page.waitForSelector(locator);
        return await driverInstance.Page.innerText(locator);
    }

    static async getElementVisibleInPage(locator: string): Promise<boolean> {
        return await driverInstance.Page.isVisible(locator, {
            timeout: 10000
        });
    }
}
