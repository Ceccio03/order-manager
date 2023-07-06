class Client extends Person {
    constructor(name, surname, dob, genere, age, address) {
        super(name, surname, dob, genere, age);
        this.address = address;
        this.orders = [];
    }

    toString() {
        return super.toString() + 'Indirizzo: ' + this.address + '\n' + 'Spesa totale: ' + this.totalExpenses().toFixed(2) + '€\n'
    }

    totalExpenses() {
        // const totalExpenses = this.orders.reduce((a, c) => a + c.totalPrice, 0);

        // return totalExpenses;

        let accumulator = 0;

        for (const order of this.orders) {
            accumulator += order.getTotalPrice();
        }
        return accumulator;
    }

    addOrder(order) {
        this.orders.push(order);
    }
}