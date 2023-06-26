import { runwayPage } from "./runwayPageObject";
const runway = new runwayPage();

describe('Login Error Test', () => {
    const url = 'https://runwayml.com/login/'; // Replace with the URL

    beforeEach(async () => {
        await runway.navigate(url);
      });
      
      afterAll(async () => {
        await runway.driver.quit(); 
      });

      test('Fill out and submit login form with invaild info', async () => { 
        await runway.click(runway.loginName);
        await runway.setInput(runway.loginName, "steve");
        await runway.click(runway.loginBtn);
        await runway.getElement(runway.errorMsg);
        const confirmMsg = await runway.getElement(runway.errorMsg);
        const confirmText = await confirmMsg.getText();
        expect(confirmText).toContain(runway.expectedErrorMsg);
        await runway.driver.sleep(4000);
        await runway.click(runway.loginName);
        await runway.setInput(runway.loginName, "John");
        await runway.click(runway.loginPass);
        await runway.setInput(runway.loginPass, "Jingles");
        await runway.click(runway.loginBtn);
        await runway.driver.sleep(5000);
        await runway.getElement(runway.errorMsg);
        const confirmMsg2 = await runway.getElement(runway.errorMsg);
        const confirmText2 = await confirmMsg2.getText();
        expect(confirmText2).toContain(runway.expectedErrorMsg2);

        
      });
    });