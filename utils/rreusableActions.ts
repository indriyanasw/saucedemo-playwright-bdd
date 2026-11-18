import { Page, expect } from '@playwright/test';


/**
 * TYPE TEXT (isi input field)
 */
export async function typeText(page: Page, selector: string, text: string) {
    try {
        console.log(`Typing text "${text}" into ${selector}`);

        await page.waitForSelector(selector, { state: 'visible' });
        await page.fill(selector, text);

    } catch (error) {
        console.error(`❌ Failed to type text into ${selector}`);
        throw error;
    }
}

/**
 * CLICK ELEMENT
 */
export async function clickElement(page: Page, selector: string) {
    try {
        console.log(`Clicking element ${selector}`);

        await page.waitForSelector(selector, { state: 'visible' });
        await page.click(selector);

    } catch (error) {
        console.error(`❌ Failed to click ${selector}`);
        throw error;
    }
}

/**
 * GET TEXT (ambil text dari element)
 */
export async function getText(page: Page, selector: string): Promise<string> {
    try {
        await page.waitForSelector(selector);

        const text = await page.textContent(selector);
        return text || "";

    } catch (error) {
        console.error(`❌ Failed to get text from ${selector}`);
        throw error;
    }
}

/**
 * ASSERT TEXT (validasi text)
 */
export async function assertText(page: Page, selector: string, expectedText: string) {
    try {
        console.log(`Validating text on ${selector}`);

        await page.waitForSelector(selector);

        const actualText = await page.textContent(selector);

        expect(actualText).toContain(expectedText);

    } catch (error) {
        console.error(`❌ Assertion failed on ${selector}`);
        throw error;
    }
}

/**
 * WAIT FOR URL (tunggu pindah halaman)
 */
export async function waitForUrl(page: Page, expectedUrl: string) {
    try {
        console.log(`Waiting for URL: ${expectedUrl}`);

        await page.waitForURL(expectedUrl);

    } catch (error) {
        console.error(`❌ URL did not match ${expectedUrl}`);
        throw error;
    }
}

/**
 * CHECK ELEMENT VISIBLE
 */
export async function isVisible(page: Page, selector: string): Promise<boolean> {
    try {
        return await page.isVisible(selector);
    } catch {
        return false;
    }
}