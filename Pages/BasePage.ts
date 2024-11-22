import { expect, Locator, type Page } from "playwright/test";

export class BaseClass {

    readonly page: Page;

    constructor(page: Page) {
        
        this.page = page;
        
    }

    async goToURL(application: string) {

        await this.page.goto(application);

    }

    async waitForElementToBeVisible(element: Locator) {

        await element.waitFor({ state: "visible" });

    }

    async waitForElementToBeHidden(element: Locator) {

        await element.waitFor({ state: "hidden" });

    }

    async fillElement(element: Locator, text: string) {

        //await this.waitForElementToBeVisible(element);
        await element.fill(text);

    }

    async clickElement(element: Locator) {

        //await this.waitForElementToBeVisible(element);
        await element.click();

    }

    async doubleClickElement(element: Locator) {

        await this.waitForElementToBeVisible(element);
        await element.dblclick();

    }

    async clickRadioElement(name: string, value: string) {

        const radioElement = this.page.locator("//input[@name='" + name + "' and @value='" + value + "']");
        await this.clickElement(radioElement);

    }

    async clearElement(element: Locator) {

        await this.waitForElementToBeVisible(element);
        await element.clear();

    }

    async extractTextFromElement(element: Locator) {

        await this.waitForElementToBeVisible(element);
        const text = await element.textContent();
        return text;

    }

    async scrollToElement(element: Locator) {

        await element.scrollIntoViewIfNeeded();

    }

    async assertElementVisible(element: Locator) {

        await expect(element).toBeVisible();

    }

    async assertElementTextContains(element: Locator, expectedText: string) {

        await expect(element).toHaveText(new RegExp(expectedText, 'i'));

    }

}