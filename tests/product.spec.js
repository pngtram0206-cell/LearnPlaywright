const { test } = require('./fixtures');

test("Add backpack to cart", async ({ page, productPage }) => {

    await page.goto('/inventory.html');

    await productPage.addBackpackToCart();

});