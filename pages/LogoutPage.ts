import { Page } from "@playwright/test";
import { clickElement, waitForPageLoad } from "../utils/reuseAbleActions";

export class LogoutPage {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // ===== ELEMENT =====
    menuBtn = '#react-burger-menu-btn';
    logoutBtn = '#logout_sidebar_link';

    // ===== ACTION =====

    async openMenu() {
        await clickElement(this.page, this.menuBtn);
    }

    async clickLogout() {
        await clickElement(this.page, this.logoutBtn);
    }

    async logout() {
        await this.openMenu();

        // ⚠️ penting: tunggu menu kebuka dulu sebelum klik logout
        await this.page.waitForSelector(this.logoutBtn);

        await this.clickLogout();

        // optional: tunggu redirect ke login page
        await waitForPageLoad(this.page);
    }

}