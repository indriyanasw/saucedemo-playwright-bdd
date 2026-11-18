import { When, Then } from "@cucumber/cucumber";
import { LogoutPage } from "../pages/LogoutPage";
import { expect } from "@playwright/test";

let logoutPage: LogoutPage

When('user click logout', async function () {

    logoutPage = new LogoutPage(this.page)

    await this.page.click(logoutPage.menuBtn)
    await this.page.click(logoutPage.logoutBtn)

})

Then('user redirected to login page', async function () {

    await expect(this.page.locator('#login-button'))
        .toBeVisible()

})