import { When, Then } from "@cucumber/cucumber";
import { ProductPage } from "../pages/ProductPage";
import { expect } from "@playwright/test";

let productPage: ProductPage

When('user add product to cart', async function () {

    productPage = new ProductPage(this.page)

    await productPage.addFirstProductToCart()

})

Then('cart count should increase', async function () {

    await expect(this.page.locator(productPage.cartBadge))
        .toHaveText('1')

})