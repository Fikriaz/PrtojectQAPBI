const { Builder, By, until } = require('selenium-webdriver');

(async function testLogin() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Test Case 1: Email and Password Empty
        await driver.get('https://app2.jubelio.com/login');
        await driver.findElement(By.name('email')).clear();
        await driver.findElement(By.name('password')).clear();
        await driver.findElement(By.css('button[type="submit"]')).click();

        let emailError = await driver.findElement(By.xpath('//span[text()="Email harus diisi."]')).getText();
        let passwordError = await driver.findElement(By.xpath('//span[text()="Password harus diisi."]')).getText();

         if (emailError.includes('Email harus diisi.') && passwordError.includes('Password harus diisi.')) {
          console.log('Test Case 1 Passed');
        } else {
          console.log('Test Case 1 Failed');
        }
        // Test Case 2: Invalid Email Format
        await driver.get('https://app2.jubelio.com/login');
        await driver.findElement(By.name('email')).sendKeys('iniemailcoba');
        await driver.findElement(By.name('password')).sendKeys('A@sqweqwe12');
        await driver.findElement(By.css('button[type="submit"]')).click();

        let verifyemail = await driver.findElement(By.xpath('//span[text()="Format Email tidak valid."]')).getText();
        if (verifyemail.includes('Format Email tidak valid.')) {
            console.log('Test Case 2 Passed');
        } else {
            console.log('Test Case 2 Failed');
        }

         // Test Case 3: Invalid Login with Password field blank
         await driver.get('https://app2.jubelio.com/login');
         await driver.findElement(By.name('email')).sendKeys('your email');
         await driver.findElement(By.name('password')).clear();
         await driver.findElement(By.css('button[type="submit"]')).click();
 
         let blankpass = await driver.findElement(By.xpath('//span[text()="Password harus diisi."]')).getText();
         if (blankpass.includes('Password harus diisi.')) {
             console.log('Test Case 3 Passed');
         } else {
             console.log('Test Case 3 Failed');
         }

        // Test Case 4: Invalid Login with Email field blank
          await driver.get('https://app2.jubelio.com/login');
          await driver.findElement(By.name('email')).clear();
          await driver.findElement(By.name('password')).sendKeys('A@sqweqwe12');
          await driver.findElement(By.css('button[type="submit"]')).click();
  
          let blankemail = await driver.findElement(By.xpath('//span[text()="Email harus diisi."]')).getText();
          if (blankemail.includes('Email harus diisi.')) {
              console.log('Test Case 4 Passed');
          } else {
              console.log('Test Case 4 Failed');
          }
      
        // Test Case 5: Invalid Password Length
        await driver.get('https://app2.jubelio.com/login');
        await driver.findElement(By.name('email')).sendKeys('your email');
        await driver.findElement(By.name('password')).sendKeys('123');  
        await driver.findElement(By.css('button[type="submit"]')).click();

        // Verifikasi pesan error untuk password terlalu pendek
        let shortPasswordError = await driver.findElement(By.css('span.help-block')).getText();
        if (shortPasswordError.includes('Password harus di antara 6 dan 30.')) {
            console.log('Test Case 5 Passed');
        } else {
            console.log('Test Case 5 Failed');
        }
    } catch (error) {
        console.error('Error during negative test case:', error);
    } finally {
        await driver.quit();
    }
})();
