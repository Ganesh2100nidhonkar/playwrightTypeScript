import { Locator, Page } from '@playwright/test';
import { BaseClass } from './BasePage';
import { RandomDataHelper } from '../Helpers/RandomDataHelper';

export class RegistrationPage extends BaseClass {

    // Locators
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly addressField: Locator;
    readonly cityField: Locator;
    readonly stateField: Locator;
    readonly zipCodeField: Locator;
    readonly phoneField: Locator;
    readonly ssnField: Locator;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly confirmPasswordField: Locator;
    readonly registerButton: Locator;

    constructor(page: Page) {
        
        super(page);

        this.firstNameField = page.locator("//input[@name='customer.firstName']");
        this.lastNameField = page.locator("//input[@name='customer.lastName']");
        this.addressField = page.locator("//input[@name='customer.address.street']");
        this.cityField = page.locator("//input[@name='customer.address.city']");
        this.stateField = page.locator("//input[@name='customer.address.state']");
        this.zipCodeField = page.locator("//input[@name='customer.address.zipCode']");
        this.phoneField = page.locator("//input[@name='customer.phoneNumber']");
        this.ssnField = page.locator("//input[@name='customer.ssn']");
        this.usernameField = page.locator("//input[@name='customer.username']");
        this.passwordField = page.locator("//input[@name='customer.password']");
        this.confirmPasswordField = page.locator("//input[@name='repeatedPassword']");
        this.registerButton = page.locator("//input[@value='Register']");

    }

    // Locator Specific Methods

    async enterFirstName(firstName: string) {

        await this.fillElement(this.firstNameField, firstName);

    }

    async enterLastName(lastName: string) {

        await this.fillElement(this.lastNameField, lastName);

    }

    async enterAddress(address: string) {

        await this.fillElement(this.addressField, address);

    }

    async enterCity(city: string) {

        await this.fillElement(this.cityField, city);

    }

    async enterState(state: string) {

        await this.fillElement(this.stateField, state);

    }

    async enterZipCode(zipCode: string) {

        await this.fillElement(this.zipCodeField, zipCode);

    }

    async enterPhone(phone: string) {

        await this.fillElement(this.phoneField, phone);

    }

    async enterSSN(ssn: string) {

        await this.fillElement(this.ssnField, ssn);

    }

    async enterUsername(username: string) {

        await this.fillElement(this.usernameField, username);

    }

    async enterPassword(password: string) {

        await this.fillElement(this.passwordField, password);

    }

    async enterConfirmPassword(confirmPassword: string) {

        await this.fillElement(this.confirmPasswordField, confirmPassword);

    }

    async clickRegisterButton() {

        await this.clickElement(this.registerButton);
        await this.page.waitForTimeout(3000);
        
    }

    // Method to perform the full registration process
    async register() {

        const userData = RandomDataHelper.generateRandomUserRegistrationData();
        const currentDateTime = new Date().toISOString()
        .replace(/-/g, '')    // Remove all hyphens
        .replace(/:/g, '')    // Remove all colons
        .replace(/\.\d{3}Z$/, '');  // Remove the milliseconds and the 'Z'

        await this.enterFirstName(userData.firstName);
        await this.enterLastName(userData.lastName);
        await this.enterAddress(userData.address);
        await this.enterCity(userData.city);
        await this.enterState(userData.state);
        await this.enterZipCode(userData.zipCode);
        await this.enterPhone(userData.phoneNumber);
        await this.enterSSN(userData.ssn);
        await this.enterUsername(userData.username + currentDateTime);
        await this.enterPassword(userData.password);
        await this.enterConfirmPassword(userData.password);
        await this.clickRegisterButton();

    }

}
