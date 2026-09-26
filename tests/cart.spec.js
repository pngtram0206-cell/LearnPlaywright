const { test } = require('./fixtures');
const { expect } = require('@playwright/test');
test('Thêm sản phẩm vào giỏ hàng', async ({
    page,
    loginPage,
    productPage,
    cartPage
}) => {

    // Mở website
    await page.goto('/');

    // Login
    await loginPage.login('standard_user', 'secret_sauce');

    // Thêm Backpack vào giỏ hàng
    await productPage.addBackpackToCart();

    // Mở giỏ hàng
    await cartPage.openCart();

    // Kiểm tra sản phẩm
    await expect(page.locator('.inventory_item_name'))
        .toHaveText('Sauce Labs Backpack');
});