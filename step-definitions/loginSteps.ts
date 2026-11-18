import { Given, When, Then } from "@cucumber/cucumber";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import { expect } from "@playwright/test";

let loginPage: LoginPage;
let productPage: ProductPage;

// ================= BASIC LOGIN =================

Given('user open saucedemo website', async function () {

    loginPage = new LoginPage(this.page);
    await loginPage.openSite();

});

When('user login with {string} and {string}', async function (username, password) {

    await loginPage.login(username, password);

});

Then('user should see product page', async function () {

    productPage = new ProductPage(this.page);

    // ================= NORMAL ASSERTION (PASS) =================
    await expect(this.page.locator(productPage.productTitle))
        .toHaveText('Products');

    // ================= FORCE FAIL (OPTIONAL) =================
    // 🔥 Aktifkan ini untuk test screenshot failure

    /* await expect(this.page.locator(productPage.productTitle))
      /*  .toHaveText('SALAH TOTAL');


});

// ================= REUSABLE LOGIN =================

Given('user login successfully', async function () {

    loginPage = new LoginPage(this.page);

    await loginPage.openSite();
    await loginPage.login('standard_user', 'secret_sauce');

});

// ================= NEGATIVE =================

Then('error message should be displayed', async function () {

    await expect(this.page.locator('[data-test="error"]'))
        .toBeVisible();

    // ================= FORCE FAIL NEGATIVE (OPTIONAL) =================
    // 🔥 kalau mau test screenshot di negative case
    /*
    await expect(this.page.locator('[data-test="error"]'))
        .toHaveText('ERROR SALAH TOTAL');
    */

});