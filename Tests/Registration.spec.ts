import { expect } from 'playwright/test';
import { test } from '../Helpers/FixtureHelper'

test.beforeEach('Launch Application', async({ HomePageObj }) => {

    await HomePageObj.goToURL("https://parabank.parasoft.com/");
    await HomePageObj.clickRegisterLink();

});

test.describe('Registration Tests', () => {
    
    test('should register a new user successfully', async ({ page, RegistrationPageObj }) => {
        
        await RegistrationPageObj.register();
        expect(page.url()).toContain('/welcome');

    });

});

test.afterEach( async({ BasePageObj }, testInfo) => {

    await BasePageObj.page.close();
    console.log(`${testInfo.title} : ${testInfo.status}`);

});
