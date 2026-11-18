import { Before, After, setDefaultTimeout, Status } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";
import fs from "fs";

setDefaultTimeout(20000);

let browser: Browser;
let page: Page;

Before(async function () {

    browser = await chromium.launch({
        headless: false,
        slowMo: 500
    });

    const context = await browser.newContext();
    page = await context.newPage();

    this.page = page;
});

After(async function (scenario) {

    if (!fs.existsSync("reports/screenshots")) {
        fs.mkdirSync("reports/screenshots", { recursive: true });
    }

    if (scenario.result?.status === Status.FAILED) {

        const fileName = scenario.pickle.name.replace(/[^a-zA-Z0-9]/g, "_");

        const screenshotPath = `reports/screenshots/${fileName}.png`;

        const screenshot = await this.page.screenshot({
            path: screenshotPath,
            fullPage: true
        });

        // 🔥 penting untuk report
        await this.attach(screenshot, "image/png");
    }

    await browser.close();
});