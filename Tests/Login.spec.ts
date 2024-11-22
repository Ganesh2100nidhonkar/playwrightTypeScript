import { expect } from 'playwright/test';
import { test } from '../Helpers/FixtureHelper'

test.beforeEach('Launch Application', async({ BasePageObj }) => {

    await BasePageObj.goToURL("https://parabank.parasoft.com/");

});

test.describe('Login Tests', () => {
    
    test('should log in successfully with valid credentials', async ({ page, LoginPageObj }) => {
        
        await LoginPageObj.login('VDIXIT', 'VGD');
        expect(page.url()).toContain('/home');

    });

    test('should show error for invalid credentials', async ({ page, LoginPageObj }) => {
        
        await LoginPageObj.login('VDIXIT', 'DFJSDFJS');
        expect(page.locator('.error-message').isVisible()).toBeTruthy();

    });

});

test.afterEach( async({ BasePageObj }, testInfo) => {

    await BasePageObj.page.close();
    console.log(`${testInfo.title} : ${testInfo.status}`);

});