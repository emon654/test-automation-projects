import { test, expect } from '@playwright/test';

test('register user', async ({page}) => {
    await page.goto('https://automationteststore.com/');

    await page.getByRole('link', { name: 'Login or register' }).click();
    await page.getByRole('button', { name: ' Continue' }).click();
    await page.locator('#AccountFrm_firstname').fill('test');
    await page.locator('#AccountFrm_lastname').fill('user');
    await page.locator('#AccountFrm_email').fill('autotest2@user.com');
    await page.locator('#AccountFrm_country_id').selectOption('United States');
    await page.locator('#AccountFrm_address_1').fill('123 fake blvd');
    await page.locator('#AccountFrm_city').fill('Philadelphia');
    await page.locator('#AccountFrm_zone_id').selectOption('Pennsylvania');
    await page.locator('#AccountFrm_postcode').fill('12345');
    await page.locator('#AccountFrm_loginname').fill('testuser2');
    await page.locator('#AccountFrm_password').fill('123456');
    await page.locator('#AccountFrm_confirm').fill('123456');
    await page.getByLabel('No').click();
    await page.getByLabel('I have read and agree to the').click();
    await page.getByRole('button', { name: ' Continue' }).click();

    await expect.locator('xpath=//*[@id="maincontainer"]/div/div[1]/div/h1/span[1]').toContainText('Your Account Has Been Created!');

    await page.locator('xpath=//*[@id="maincontainer"]/div/div[1]/div/div/section/a').click();




});