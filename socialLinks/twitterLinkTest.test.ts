import { runwayPage } from "../runwayPageObject";
const runway = new runwayPage();
const fs = require('fs');


describe('Social Links Regression Test', () => {
    const url = 'https://runwayml.com/'; // Replace with the URL

    beforeEach(async () => {
        await runway.navigate(url);
      });
      
      afterAll(async () => {
        await runway.driver.quit(); 
      });

      
      test('Click Social Link, Confirm Site Navigation', async () => {
        await runway.driver.sleep(5000);
        await runway.scrollIntoView(runway.footerHome); 
        await runway.clickWithJavaScript(runway.twitter);
        
        await runway.driver.wait(async () => {
            const handles = await runway.driver.getAllWindowHandles();
            return handles.length === 2;
          });
          const handles = await runway.driver.getAllWindowHandles();
          const currentHandle = await runway.driver.getWindowHandle();
          const newHandle = handles.find((handle) => handle !== currentHandle);
          await runway.driver.switchTo().window(newHandle);
          await runway.driver.sleep(3000);
          const screenshotData = await runway.driver.takeScreenshot();
          fs.writeFileSync(`${__dirname}/twitter.png`, screenshotData, 'base64');
          await runway.driver.sleep(1000);
        
      });

      
    });

