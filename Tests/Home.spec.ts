import { expect } from 'playwright/test';
import { test } from '../Helpers/FixtureHelper'

test.beforeEach('Launch Application', async({ BasePageObj }) => {

    await BasePageObj.goToURL("https://parabank.parasoft.com/");

});

test.describe('Home Page Tests', () => {
    
    test('should navigate to Account Overview', async ({ page, HomePageObj }) => {
        
        await HomePageObj.goToAccountOverview();
        expect(page.url()).toContain('/accountoverview');

    });

    test('should navigate to Transfer Funds page', async ({ page, HomePageObj }) => {
        
        await HomePageObj.goToTransferFunds();
        expect(page.url()).toContain('/transferfunds');

    });

    test('should log out successfully', async ({ page, HomePageObj }) => {
        
        await HomePageObj.logout();
        expect(page.url()).toContain('/login');

    });

});

test.afterEach( async({ BasePageObj }, testInfo) => {

    await BasePageObj.page.close();
    console.log(`${testInfo.title} : ${testInfo.status}`);

});
