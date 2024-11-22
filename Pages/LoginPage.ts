import { Locator, Page } from '@playwright/test';
import { BaseClass } from './BasePage';

export class LoginPage extends BaseClass {
    
    // Locator
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        
        super(page);

        this.usernameField = page.locator("//input[@name='username']");
        this.passwordField = page.locator("//input[@name='password']");
        this.loginButton = page.locator("//input[@type='submit']");

    }
    
    // Locator Specific Methods

    async enterUsername(username: string) {

        await this.fillElement(this.usernameField, username);

    }

    async enterPassword(password: string) {

        await this.fillElement(this.passwordField, password);

    }

    async clickLoginButton() {

        await this.clickElement(this.loginButton);

    }

    async login(username: string, password: string) {

        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();

    }

}
