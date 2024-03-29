import { Browser, BrowserContext, BrowserType, chromium, firefox, Page, webkit } from "playwright";

export class Driver {
    //context: Promise<BrowserContext>;
    private page!: Page;
    private browser!: Browser;
    private context!:BrowserContext;
    private static driver: Driver;

    private constructor(){}
//para abrir el navegador e iniciar los drivers
    async start(url: string,browserName: string = 'chrome') {
        console.log('INIT ELEMENTS');
        const browserInstance: BrowserType<{}> = await this.browserFactory(browserName);;//fevuelve una instancia de ese driver
        this.browser = await browserInstance.launch(
        {
            headless: false,
            slowMo: 3000
        }
        );
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
        await this.page.goto(url);
    }

    get Page(): Page {
        return this.page;
    }

    static getInstance() {
        if(typeof this.driver === 'undefined') {
            this.driver = new Driver();
        }
        return this.driver;
    }

    // async getPageTitle() {
    //     return await this.page.title;
    // }

    async isElementDisplayed(locator: string) {
        //await this.page.waitForTimeout(5000);
        return await this.page.isVisible(locator, {
            timeout: 10000
        });
    }

    async getPageUrl(): Promise<string> {
        //await this.page.waitForTimeout(5000);
        return this.page.url();
    }

    async waitNetwork() {
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('load');
        await this.page.waitForLoadState('domcontentloaded');
    }

    async closeDriver(){
        await this.context.close();
        await this.browser.close();      
    }

    private async browserFactory(browserName: string): Promise<BrowserType<{}>>{//las instancias de los navegadores
        const browsers: {[id: string]: BrowserType<{}>} = {
            chrome: chromium,
            firefox: firefox,
            webkit: webkit
        }
        if(!browsers.hasOwnProperty(browserName)) {
            throw new Error(`Browser "${browserName}" is not a valid input`);
        }
        return browsers[browserName];
    }
}

//export const driverInstance =  new Driver();
export const driverInstance =  Driver.getInstance();
