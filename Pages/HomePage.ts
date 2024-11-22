import { Locator, Page } from '@playwright/test';
import { BaseClass } from './BasePage';

export class HomePage extends BaseClass {
    
    // Locators
    readonly accountOverviewLink: Locator;
    readonly transferFundsLink: Locator;
    readonly logoutButton: Locator;
    readonly registerLink: Locator;

    constructor(page: Page) {

        super(page);

        this.accountOverviewLink = page.locator("a[href='/accountoverview']");
        this.transferFundsLink = page.locator("a[href='/transferfunds']");
        this.logoutButton = page.locator("button#logout");
        this.registerLink = page.locator("//a[text() = 'Register']");

    }

    // Locator Specific Methods
    async goToAccountOverview() {

        await this.clickElement(this.accountOverviewLink);
        
    }

    async goToTransferFunds() {

        await this.clickElement(this.transferFundsLink);

    }

    async logout() {

        await this.clickElement(this.logoutButton);

    }

    async clickRegisterLink() {

        await this.clickElement(this.registerLink);
        await this.page.waitForTimeout(3000);

    }

}
