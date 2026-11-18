import { Then } from "@cucumber/cucumber";
import { ProductPage } from "../pages/ProductPage";
import { expect } from "@playwright/test";

let productPage: ProductPage

Then('product list should be visible', async function () {

    productPage = new ProductPage(this.page)

    await expect(this.page.locator(productPage.productList))
        .toBeVisible()

})