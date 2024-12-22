import { test, expect } from '@playwright/test';

test('register user', async ({page}) => {
    await page.goto('https://www.automationexercise.com/');

    await page.locator('xpath=//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a').click();
    //await expect.locator('xpath=//*[@id="form"]/div/div/div[3]/div/h2').toContainText('New User Signup!');
    await page.locator('xpath=//*[@id="form"]/div/div/div[3]/div/form/input[2]').fill('system1');
    await page.locator('xpath=//*[@id="form"]/div/div/div[3]/div/form/input[3]').fill('systemize@test.com');
    await page.locator('xpath=//*[@id="form"]/div/div/div[3]/div/form/button').click();
    await page.locator('xpath=//*[@id="id_gender1"]').click();
    await page.locator('xpath=//*[@id="password"]').fill('123456');
    await page.locator('xpath=//*[@id="days"]').selectOption("1");
    await page.locator('xpath=//*[@id="months"]').selectOption("1");
    await page.locator('xpath=//*[@id="years"]').selectOption("2000");

    await page.locator('xpath=//*[@id="newsletter"]').click();
    await page.locator('xpath=//*[@id="optin"]').click();


    await page.locator('xpath=//*[@id="first_name"]').fill('Systemize');
    await page.locator('xpath=//*[@id="last_name"]').fill('Pro');
    await page.locator('xpath=//*[@id="address1"]').fill('123 fake street');
    await page.locator('xpath=//*[@id="city"]').fill('Brooklyn');
    await page.locator('xpath=//*[@id="country"]').selectOption("United States");
    await page.locator('xpath=//*[@id="state"]').fill('NY');
    await page.locator('xpath=//*[@id="zipcode"]').fill('01111');
    await page.locator('xpath=//*[@id="mobile_number"]').fill('1234567890');
    await page.locator('xpath=//*[@id="form"]/div/div/div/div/form/button').click();

    //await expect.locator('xpath//*[@id="form"]/div/div/div/h2/b').toContainText('Account Created!');

    await page.locator('xpath=//*[@id="form"]/div/div/div/div/a').click();

    await page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[5]/a').click();

    //await expect.locator('xpath=//*[@id="form"]/div/div/div/h2/b').toContainText('Account Deleted!');

    page.close();



    

 




});