import { expect, Page } from '@playwright/test';

export async function verifyText(page: Page, locator: string, expected: string) {
    await expect(page.locator(locator)).toHaveText(expected);
}

export async function verifyVisible(page: Page, locator: string) {
    await expect(page.locator(locator)).toBeVisible();
}
