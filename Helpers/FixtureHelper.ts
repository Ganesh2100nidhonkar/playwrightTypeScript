import { test as base } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { HomePage } from '../Pages/HomePage';
import { RegistrationPage } from '../Pages/RegistrationPage';
import { BaseClass } from '../Pages/BasePage';
 
// Declare the types of your fixtures.
type MyFixtures = {

    BasePageObj: BaseClass;
    LoginPageObj: LoginPage;
    HomePageObj: HomePage;
    RegistrationPageObj: RegistrationPage;
    
  };
 
export const test = base.extend<MyFixtures>({

    BasePageObj: async ({ page }, use) => {

        await use(new BaseClass(page));

    },
   
    LoginPageObj: async ({ page }, use) => {

        await use(new LoginPage(page));

    },
 
    HomePageObj: async ({ page }, use) => {

        await use(new HomePage(page));

    },
 
    RegistrationPageObj: async ({ page }, use) => {

        await use(new RegistrationPage(page));

    },
 
});