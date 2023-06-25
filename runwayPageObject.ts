import { By } from 'selenium-webdriver';
import { BasePage } from './basePage';

export class runwayPage extends BasePage {
  

  constructor() {
    super({ url: 'https://runwayml.com/' });
  };
// Define locators and methods specific to the RunwayML page
    nameField: By = By.css('input[name="name"]');
    emailField: By = By.css('input[name="email"]');
    companyField: By = By.css('input[name="institution"]');
    msgField: By = By.css('textarea[name="message"]');
    submitButton: By = By.className('rw-btn py-3 outlined justify-center uppercase');
    confirmationMessage: By = By.className('text-center mt-8 font-display text-2xl');
    expectedConfirmMsg = "Thanks! We'll be in touch"
    

  // Add more methods for interacting with the page as needed
};
