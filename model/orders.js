class Orders {
    constructor(product, quantity, unitPrice) {
        this.product = product;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
    }

    totalPrice() {
        let total = 0;

        for (let i = 0; i < this.orders.length; i++) {
            total += this.orders[i].unitPrice;
        }
        return total;
    }
}