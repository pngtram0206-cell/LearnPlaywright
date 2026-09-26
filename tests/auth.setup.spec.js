const { test } = require('@playwright/test');

test('Login và lưu trạng thái', async ({ page }) => {

    await page.goto('/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await page.context().storageState({
        path: 'auth.json'
    });

});