import { faker } from '@faker-js/faker';

export class RandomDataHelper {

    // Generate random user registration data
    public static generateRandomUserRegistrationData() {
        return {

            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            address: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            phoneNumber: faker.phone.number(),
            ssn: faker.helpers.replaceSymbols('###-##-####'),
            username: faker.internet.userName(),
            password: faker.internet.password({ length: 10 }),
            
        };
    }

    // Generate random address data (if needed separately)
    public static generateRandomAddress() {
        return {

            address: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),

        };
    }

    // Generate random contact information
    public static generateRandomContactInfo() {
        return {

            phoneNumber: faker.phone.number(),
            email: faker.internet.email(),

        };
    }

    // Generate a random username and password pair
    public static generateRandomCredentials() {
        return {

            username: faker.internet.userName(),
            password: faker.internet.password({ length: 10 }),

        };
    }

    // Generate a random SSN
    public static generateRandomSSN() {

        return faker.helpers.replaceSymbols('###-##-####');

    }

    // Generate a full random profile
    public static generateFullRandomProfile() {
        return {

            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            address: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            phoneNumber: faker.phone.number(),
            ssn: faker.helpers.replaceSymbols('###-##-####'),
            username: faker.internet.userName(),
            password: faker.internet.password({ length: 10 }),
            email: faker.internet.email(),
            
        };
    }
}
