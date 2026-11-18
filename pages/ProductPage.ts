import { Page } from "@playwright/test";
import { clickElement } from "../utils/reuseAbleActions";

export class ProductPage {

    page: Page

    constructor(page: Page) {
        this.page = page
    }

    // ===== ELEMENT =====
    productTitle = '.title'
    productList = '.inventory_list'

    addToCartBtn = '.btn_inventory'
    cartIcon = '.shopping_cart_link'
    cartBadge = '.shopping_cart_badge'

    // ===== ACTION =====

    async addFirstProductToCart() {
        await clickElement(this.page, this.addToCartBtn);
    }

}