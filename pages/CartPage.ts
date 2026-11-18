import { Page } from "@playwright/test";
import { clickElement } from "../utils/reuseAbleActions";

export class CartPage {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // ===== ELEMENT =====
    cartIcon = '.shopping_cart_link';
    cartItem = '.cart_item';
    checkoutBtn = '#checkout';

    // ===== ACTION =====

    async openCart() {
        await clickElement(this.page, this.cartIcon);
    }

    async clickCheckout() {
        await clickElement(this.page, this.checkoutBtn);
    }

    async isCartItemVisible() {
        await this.page.waitForSelector(this.cartItem);
        return await this.page.locator(this.cartItem).isVisible();
    }

}