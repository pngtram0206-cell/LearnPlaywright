export class ProductPage {

    constructor(page) {
        this.page = page;

        this.backpackAddToCart =
            page.locator('#add-to-cart-sauce-labs-backpack');
    }

    async addBackpackToCart() {
        await this.backpackAddToCart.click();
    }
}