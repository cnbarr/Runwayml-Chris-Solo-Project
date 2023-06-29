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
        await runway.driver.manage().window().maximize();
        await runway.click(runway.loginName);
        await runway.setInput(runway.loginName, "cnbarr28@hotmail.com"); //replace with any valid email
        await runway.click(runway.loginPass);
        await runway.setInput(runway.loginPass, "TestPassword1!"); //replace with valid password
        await runway.click(runway.loginBtn);
        await runway.driver.sleep(3000);
        await runway.click(runway.planChoice);
        await runway.click(runway.textToImage);
        await runway.click(runway.imagePrompt);
        await runway.setInput(runway.imagePrompt,"cyborg female robot, holding human baby, that is connected to her by a glowing fiber light cable, in a futuristic world, hyper-realistic, 4K, masterpiece, photo realistic, 4k textures, 8k, HDR, intricate, hyper-detailed, sharp focus, cinematic look --s1000 --c80");
        await runway.click(runway.imageGenBtn);
        await runway.driver.sleep(12000);
        const screenshotData = await runway.driver.takeScreenshot();
          fs.writeFileSync(`${__dirname}/textToImage1.png`, screenshotData, 'base64');

        
      });
    });