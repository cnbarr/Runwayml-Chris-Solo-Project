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
        await runway.clickWithJavaScript(runway.youTube);
        await runway.switchTabs();
        await runway.driver.sleep(3000);
        const screenshotData = await runway.driver.takeScreenshot();
        fs.writeFileSync(`${__dirname}/youtube.png`, screenshotData, 'base64');
    
        
      });
    });

