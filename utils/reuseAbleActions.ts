import { Page } from '@playwright/test';

export async function typeText(page: Page, locator: string, text: string) {
    await page.waitForSelector(locator);
    await page.fill(locator, text);
}

export async function clickElement(page: Page, locator: string) {
    await page.waitForSelector(locator);
    await page.click(locator);
}

export async function waitForPageLoad(page: Page) {
    await page.waitForLoadState('networkidle');
}