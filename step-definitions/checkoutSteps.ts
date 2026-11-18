import { When, Then } from "@cucumber/cucumber";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { expect } from "@playwright/test";

let cartPage: CartPage;
let checkoutPage: CheckoutPage;

// ================= CART =================

When('user open cart page', async function () {

    cartPage = new CartPage(this.page);
    await cartPage.openCart();

});

// ================= CHECKOUT =================

When('user perform checkout', async function () {

    checkoutPage = new CheckoutPage(this.page);

    await checkoutPage.completeCheckout('Indriyana', 'QA', '12345');

});

Then('order should be successful', async function () {

    await expect(this.page.locator(checkoutPage.successMessage))
        .toHaveText('Thank you for your order!');

});

// ================= NEGATIVE =================

When('user checkout without filling data', async function () {

    checkoutPage = new CheckoutPage(this.page);

    await checkoutPage.openCheckout();
    await checkoutPage.continueCheckout();

});

Then('error should appear', async function () {

    await expect(this.page.locator(checkoutPage.errorMessage))
        .toBeVisible();

});