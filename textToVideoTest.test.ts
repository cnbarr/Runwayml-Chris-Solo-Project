import { runwayPage } from "./runwayPageObject";
const runway = new runwayPage();
const fs = require('fs');

describe('Login and create a video', () => {
    const url = 'https://runwayml.com/login/'; // Replace with the URL

    beforeEach(async () => {
        await runway.navigate(url);
      });
      
      afterAll(async () => {
        await runway.driver.quit(); 
      });

      test('Login, navigate to text to Video and create a 4sec video w/text prompt', async () => {
        await runway.driver.manage().window().maximize(); 
        await runway.click(runway.loginName);
        await runway.setInput(runway.loginName, "cnbarr28@hotmail.com"); //replace with any valid email
        await runway.click(runway.loginPass);
        await runway.setInput(runway.loginPass, "TestPassword1!"); //replace with valid password
        await runway.click(runway.loginBtn);
        await runway.driver.sleep(3000);
        await runway.click(runway.planChoice);
        await runway.click(runway.textToVideo);
        await runway.click(runway.videoPrompt);
        await runway.setInput(runway.videoPrompt,"A man frantically coding software in preparation for a rebellion in a dystopian world, cinematic masterpeice, hyper realistic");
        await runway.click(runway.videoGenBtn);
        await runway.driver.sleep(90000);
        const screenshotData = await runway.driver.takeScreenshot();
          fs.writeFileSync(`${__dirname}/textToVideo.png`, screenshotData, 'base64');

        
      });
    });