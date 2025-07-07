const { Builder,Browser, By, Key, until } = require('selenium-webdriver');

(async function testLogin() {
  (async function loginTest() {
        let driver = await new Builder().forBrowser('chrome').build();
    
        try {
            await driver.get('https://app2.jubelio.com/login');
    
            const emailField = await driver.findElement(By.name('email'));
            await emailField.sendKeys('your email');
    
            const passwordField = await driver.findElement(By.name('password'));
            await passwordField.sendKeys('your pass');
    
            const loginButton = await driver.findElement(By.css('button[type="submit"]'));
            await loginButton.click();
            const targetUrl = 'https://app2.jubelio.com/home/getting-started';
            await driver.wait(until.urlIs(targetUrl), 30000);
        
            const currentUrl = await driver.getCurrentUrl();
        
            if (currentUrl === targetUrl) {
              console.log('Test Case 1 Passed: User Has Logged in ', currentUrl);
            } else {
              console.log('Login test failed!', currentUrl);
            }
          } catch (error) {
            console.error('Error', error);
          } finally {
            await driver.quit();
          }
    })();
}
)();
