import { runwayPage } from "./runwayPageObject";
const runway = new runwayPage();

describe('Contact Form Regression Test', () => {
    const url = 'https://runwayml.com/contact/'; // Replace with the URL

    beforeEach(async () => {
        await runway.navigate(url);
      });
      
      afterAll(async () => {
        await runway.driver.quit(); 
      });

      
      test('Fill out and submit contact form', async () => {
        await runway.scrollIntoView(runway.msgField); 
        await runway.clickWithJavaScript(runway.nameField);
        await runway.setInput(runway.nameField, 'Chris');
        await runway.clickWithJavaScript(runway.emailField);
        await runway.setInput(runway.emailField, 'cnbarr28@gmail.com');
        await runway.clickWithJavaScript(runway.companyField);
        await runway.setInput(runway.companyField, 'Student of Knowledge');
        await runway.clickWithJavaScript(runway.msgField);
        await runway.setInput(runway.msgField, 'Hello, I hope you are having a phenomenal day!');
        await runway.clickWithJavaScript(runway.submitButton);
        await runway.getElement(runway.confirmationMessage);
        const confirmMsg = await runway.getElement(runway.confirmationMessage);
        const confirmText = await confirmMsg.getText();
        expect(confirmText).toContain(runway.expectedConfirmMsg);
      });
    });

