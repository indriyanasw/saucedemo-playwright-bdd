import { Page } from "@playwright/test";
import { clickElement, typeText, waitForPageLoad } from "../utils/reuseAbleActions";

export class CheckoutPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // ===== ELEMENT =====
    checkoutBtn = '#checkout';
    firstName = '#first-name';
    lastName = '#last-name';
    postalCode = '#postal-code';
    continueBtn = '#continue';
    finishBtn = '#finish';
    successMessage = '.complete-header';
    errorMessage = '[data-test="error"]';
    overviewTitle = '.title';

    // ===== ACTION =====

    async openCheckout() {
        await clickElement(this.page, this.checkoutBtn);
    }

    async fillInformation(first: string, last: string, zip: string) {
        await typeText(this.page, this.firstName, first);
        await typeText(this.page, this.lastName, last);
        await typeText(this.page, this.postalCode, zip);
    }

    async continueCheckout() {
        await clickElement(this.page, this.continueBtn);
    }

    async finishCheckout() {
        await clickElement(this.page, this.finishBtn);
    }

    async waitForOverviewPage() {
        await this.page.waitForURL('**/checkout-step-two.html');
        await waitForPageLoad(this.page);
    }

    // 🔥 HIGH LEVEL METHOD (BEST PRACTICE)
    async completeCheckout(first: string, last: string, zip: string) {

        await this.openCheckout();
        await this.fillInformation(first, last, zip);
        await this.continueCheckout();
        await this.waitForOverviewPage(); // ✅ tambahan biar stabil
        await this.finishCheckout();

    }

}