class Orders {
    constructor(product, quantity, unitPrice) {
        this.product = product;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
    }

    getTotalPrice() {
        return this.unitPrice * this.quantity;
    }

    toString() {
        const card = 'Product: ' + this.product + '\n' + 'Prezzo unitario: ' + this.unitPrice.toFixed(2) + '€\n' + 'Quantità: ' + this.quantity + '\n' + 'Prezzo totale: ' + this.totalPrice.toFixed(2) + '€\n';

        return card;
    }
}