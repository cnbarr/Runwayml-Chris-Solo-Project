import { runwayPage } from "./runwayPageObject";
const runway = new runwayPage();
const fs = require('fs');

describe('Login and create a image', () => {
    const url = 'https://runwayml.com/login/'; // Replace with the URL

    beforeEach(async () => {
        await runway.navigate(url);
      });
      
      afterAll(async () => {
        await runway.driver.quit(); 
      });

      test('Login, navigate to text to image and create an image', async () => { 
        await runway.click(runway.loginName);
        await runway.setInput(runway.loginName, "cnbarr28@hotmail.com");
        await runway.click(runway.loginPass);
        await runway.setInput(runway.loginPass, "TestPassword1!");
        await runway.click(runway.loginBtn);
        await runway.driver.sleep(3000);
        await runway.click(runway.planChoice);
        await runway.click(runway.textToImage);
        await runway.click(runway.promptField);
        await runway.setInput(runway.promptField,"cyborg female robot, holding human baby, that is connected to her by a glowing light fiber cable, in a futuristic world, hyper realistic, 4K, masterpiece, photo realistic, cinematic, s1000, c80");
        await runway.click(runway.generateBtn);
        await runway.driver.sleep(12000);
        const screenshotData = await runway.driver.takeScreenshot();
          fs.writeFileSync(`${__dirname}/textToImage.png`, screenshotData, 'base64');

        
      });
    });