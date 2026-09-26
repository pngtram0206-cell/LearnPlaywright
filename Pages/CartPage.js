export class CartPage {

    constructor(page) {
        this.page = page;

        this.cartLink = page.locator('.shopping_cart_link');
        this.productName = page.locator('.inventory_item_name');
    }

    async openCart() {
        await this.cartLink.click();
    }

    async getProductName() {
        return await this.productName.textContent();
    }
}