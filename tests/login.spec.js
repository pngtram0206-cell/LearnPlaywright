const { test } = require('./fixtures');
const { expect } = require('@playwright/test');

const loginData = [
    {
        case: 'Đăng nhập thành công',
        username: 'standard_user',
        password: 'secret_sauce'
    },
    {
        case: 'Sai mật khẩu',
        username: 'standard_user',
        password: 'abc123'
    }
];

for (const data of loginData) {

    test(data.case, async ({ loginPage, page }) => {

        await page.goto('/');

        await loginPage.login(
            data.username,
            data.password
        );

    });

}
// This change is on login-test
// Fix login test
// Pull request test